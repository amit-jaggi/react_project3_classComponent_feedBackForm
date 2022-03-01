import React from 'react';

class FeedbackForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name : '',
            department : '',
            rating : '',
            content : true,
            users : []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]  : event.target.value
        });
    }

    submitForm = (event) => {
        event.preventDefault();
        // console.log(this.state.users)
        if (this.state.name && this.state.department && this.state.rating) {
            const setUserData = {
                name : this.state.name,
                department : this.state.department,
                rating : this.state.rating
            }
            const userData = this.state.users;
            userData.push(setUserData);
            this.setState({
                users: userData,
                name : '',
                department : '',
                rating : '',
                content : !this.state.content
            });
        }
        else {
            alert('Field is required.\nYou have left a field empty and a value must be entered.')
        }
    }

    render() {
        return (
            <div className="form-container">
                {
                    this.state.content ?
                        <>
                            <form className="input-container">
                                <h2>EMPLOYEE FEEDBACK FORM</h2>
                                <div className="sub-container">
                                    <span>Name : </span>
                                    <input type="text" name="name" id="name" autoComplete="off" value={this.state.name} onChange={this.handleChange} />
                                </div>
                                <div className="sub-container">
                                    <span>Department : </span>
                                    <input type="text" name="department" id="department" value={this.state.department} onChange={this.handleChange} />
                                </div>
                                <div className="sub-container">
                                    <span>Rating : </span>
                                    <input type="number" name="rating" id="rating" value={this.state.rating} onChange={this.handleChange} />
                                </div>
                                <input className="submit-btn" type="submit" onClick={this.submitForm} />
                            </form>
                        </>
                        :
                        <>
                            <h2>EMPLOYEE FEEDBACK DATA</h2>
                            <div className="show-details">
                                {
                                    this.state.users.map((element, index) => {
                                        const { name, department, rating } = element;
                                        return (
                                            <span className="detail" key={index}>Name : {name} &nbsp;|&nbsp; Department : {department} &nbsp;|&nbsp; Rating : {rating}</span>
                                        )
                                    })
                                }
                            </div>
                            <button type="back" className='back-btn' onClick={() => {this.setState({content : !this.state.content})}}>BACK</button>
                        </>
                }
            </div>
        )
    }
}

export default FeedbackForm;
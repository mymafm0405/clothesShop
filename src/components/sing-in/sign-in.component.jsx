import React from 'react'

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: 'ddd@cc.com',
            password: 'ss'
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            email: '',
            password: ''
        })
    }
    handleChange = (event) => {
        const {value, name} = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                    <label>Email:</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                    <label>Password:</label>
                    <input type="submit" value="Sign-in"/>
                </form>
            </div>
        )
    }
}

export default SignIn
import React from 'react';
import { NavLink } from 'react-router-dom';
import { userService } from '../../services/userService.js';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numExpedient: "",
            password: "",
            msgError: ""
        }
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    pressLogin = (ev) => {
        ev.preventDefault();

        let credentials = {
            numExpedient: this.state.numExpedient,
            password: this.state.password
        };

        try {
            userService.login(credentials);
            setTimeout(() => {
                this.props.history.push('/');
            }, 2000);

        } catch (error) {
            console.log(error);
            return;
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.pressLogin}>
                    <h3>Login</h3>
                    <span>{this.state.msgError}</span>
                    <input className="inputs" type="text" placeholder="numExpedient" name="numExpedient"
                        value={this.state.numExpedient} onChange={this.handleChange}></input>
                    <input className="inputs" type="password" placeholder="password" name="password"
                        value={this.state.password} onChange={this.handleChange}></input>
                    <button type="submit">LogIn!</button>
                </form>
                <NavLink to="/access">Ask for ur Access</NavLink>
                <NavLink to="/forgotPass">I forgot my password</NavLink>
            </div>
        )
    }
}
export default Login;
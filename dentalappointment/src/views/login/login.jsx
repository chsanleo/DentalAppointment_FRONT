import React from 'react';

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
            userService.loginServ(credentials);
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
            <form onSubmit={this.pressLogin} className="fondo">
                <div className="login">
                    <h3>Login</h3>
                    <span>{this.state.msgError}</span>
                    <input className="inputs" type="text" placeholder="numExpedient" name="numExpedient"
                        value={this.state.numExpedient} onChange={this.handleChange}></input>
                    <input className="inputs" type="password" placeholder="password" name="password"
                        value={this.state.password} onChange={this.handleChange}></input>
                    <button type="submit">LogIn!</button>
                </div>
            </form>
        )
    }
}
export default Login;
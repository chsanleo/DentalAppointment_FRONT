import React from 'react';
import { NavLink } from 'react-router-dom';
import { userService } from '../../services/userService.js';
import { validations } from '../../utils/validations.js';
import { utils } from '../../utils/utils.js';

import './login.scss';

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

    componentDidMount() {
        //if user move to /agenda
    }

    pressLogin = (ev) => {
        ev.preventDefault();

        let credentials = {
            numExpedient: this.state.numExpedient,
            password: this.state.password
        };

        let error = validations.validateCredentials(credentials);
        if (!utils.isNullOrEmpty(error)) {
            this.setState({ msgError: error });
            return;
        }

        try {
            userService.login(credentials);
            setTimeout(() => {
                this.props.history.push('/agenda');
            }, 2000);

        } catch (error) {
            console.log(error);
            return;
        }
    }
    render() {
        return (
            <div className="centerInfo">
                <form onSubmit={this.pressLogin}>
                    <h2>Login</h2>
                    <span>{this.state.msgError}</span>
                    <input className="inputs" type="text" placeholder="Expedient Number" name="numExpedient"
                        value={this.state.numExpedient} onChange={this.handleChange}></input>
                    <input className="inputs" type="password" placeholder="Password" name="password"
                        value={this.state.password} onChange={this.handleChange}></input><br />
                    <NavLink to="/forgotPass">I forgot my password</NavLink>
                    <br />
                    <button type="submit">LogIn!</button>
                </form>
            </div>
        )
    }
}
export default Login;
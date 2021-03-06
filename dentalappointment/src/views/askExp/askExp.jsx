import React from 'react';
import { userService } from '../../services/userService.js';
import { validations } from '../../utils/validations.js';
import { utils } from '../../utils/utils.js';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            msgError: ""
        }
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    pressRegister = (ev) => {
        ev.preventDefault();
        let error = validations.validateEmail(this.state.email)
        if (!utils.isNullOrEmpty(error)) {
            this.setState({ msgError: error });
            return;
        }

        let askEmail = {
            email: this.state.email
        };

        userService.askNumExp(askEmail);
        setTimeout(() => {
            this.props.history.push('/');
        }, 2000);
    }

    render() {
        return (
            <div className="centerInfo">
                <form onSubmit={this.pressRegister}>
                    <h3>Ask for your Expedient number</h3>
                    <span className="errorText">{this.state.msgError}</span>
                    <input type="text" placeholder="email" name="email"
                        value={this.state.email} onChange={this.handleChange}></input>
                    <button type="submit">Ask for ur Access!</button>
                </form>
            </div>
        )
    }
}
export default Login;
import React from 'react';
import { userService } from '../../services/userService.js';
import { validations } from '../../utils/validations.js';
import { utils } from '../../utils/utils.js';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numExpedient: '',
            email: '',
            msgError: ''
        }
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    pressRecover = (ev) => {
        ev.preventDefault();

        let identification = {
            numExpedient: this.state.numExpedient,
            email: this.state.email
        };

        let error = validations.validateIdentification(identification);
        if (!utils.isNullOrEmpty(error)) {
            this.setState({ msgError: error });
            return;
        }

        userService.forgotPass(identification);
        setTimeout(() => {
            this.props.history.push('/');
        }, 2000);
    }
    render() {
        return (
            <div className="centerInfo">
                <form onSubmit={this.pressRecover}>
                    <h2>Did u forgot ur password? </h2>
                    <span className="errorText">{this.state.msgError}</span>
                    <input className="inputs" type="text" placeholder="Expedient Number" name="numExpedient"
                        value={this.state.numExpedient} onChange={this.handleChange}></input>
                    <input className="inputs" type="text" placeholder="Email" name="email"
                        value={this.state.password} onChange={this.handleChange}></input><br />
                    <br />
                    <button type="submit">Recover Account!</button>
                </form>
            </div>
        )
    }
}
export default Login;
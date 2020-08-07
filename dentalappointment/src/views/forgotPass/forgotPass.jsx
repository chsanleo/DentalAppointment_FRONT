import React from 'react';
import { userService } from '../../services/userService.js';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numExpedient: "",
            email: "",
            msgError: ""
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

        try {
            userService.forgotPass(identification);
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
            <div className="login">
                <form onSubmit={this.pressRecover}>
                    <h2>Did u forgot ur password? </h2>
                    <span>{this.state.msgError}</span>
                    <input className="inputs" type="text" placeholder="Expedient Number" name="numExpedient"
                        value={this.state.numExpedient} onChange={this.handleChange}></input>
                    <input className="inputs" type="text" placeholder="Email" name="email"
                        value={this.state.password} onChange={this.handleChange}></input><br/>
                    <br />
                    <button type="submit">Recover Account!</button>
                </form>
            </div>
        )
    }
}
export default Login;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { userService } from '../../services/userService.js';
import { validations } from '../../utils/validations.js';
import { utils } from '../../utils/utils.js';

import './profile.scss';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numExp: '',
            name: '',
            surname: '',
            address: '',
            email: '',
            msgError: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    componentDidMount() {
        this.setState({
            numExp: this.props.user.numExp,
            name: this.props.user.name,
            surname: this.props.user.surname,
            address: this.props.user.address,
            email: this.props.user.email
        });
    }

    pressLogin = (ev) => {
        ev.preventDefault();

        let user = {
            name: this.state.name,
            surname: this.state.surname,
            address: this.state.address,
            email: this.state.email,
            numExp: this.state.numExp//no change
        };

        let error = validations.validateUser(user);
        if (!utils.isNullOrEmpty(error)) {
            this.setState({ msgError: error });
            return;
        }

        try {
            userService.update(user);
            setTimeout(() => {
                this.props.history.push('/agenda');
            }, 2000);

        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div className="centerInfo">
                <form onSubmit={this.pressUpdate}>
                    <h2>Personal information</h2>
                    <span className="errorText">{this.state.msgError}</span>
                    <label className="delicated">Expedient Number</label><br />
                    <span>{this.state.numExp|| ''}</span><br />
                    <label>Name</label>
                    <input className="inputs" type="text" name="name" value={this.state.name|| ''}
                        onChange={this.handleChange}></input>
                    <label>Surname</label>
                    <input className="inputs" type="text" name="surname" value={this.state.surname|| ''}
                        onChange={this.handleChange}></input><br />
                    <label>Address</label>
                    <input className="inputs" type="text" name="address" value={this.state.address|| ''}
                        onChange={this.handleChange}></input><br />
                    <label>Email</label>
                    <input className="inputs" type="text" name="email" value={this.state.email|| ''}
                        onChange={this.handleChange}></input><br />
                    <br />
                    <button type="submit">Update profile!</button><br />
                    <NavLink to="/forgotPass">Change my password</NavLink>
                </form>
            </div>
        )
    }
}
const mapStateToProps = ({ users }) => ({ user: users?.user })
export default connect(mapStateToProps)(Profile);
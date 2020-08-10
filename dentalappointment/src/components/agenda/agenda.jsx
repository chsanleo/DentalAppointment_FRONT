import React from 'react';
import { connect } from 'react-redux';
import { utils } from '../../utils/utils.js';
import { validations } from '../../utils/validations.js';

import { appointmentService } from '../../services/appointmentService';
import AppointmentList from '../appointmentList/appointmentList.jsx';


class Agenda extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            appointmentid: 0,
            numExp: this.props.user?.numExp,
            msgError: ''
        }
        this.setAppointment = this.setAppointment.bind(this);
        this.updateAppointment = this.updateAppointment.bind(this);
    }

    componentDidMount() {
        try {
            //setTimmer
            let numExp = this.props.user?.numExp;

            if (utils.isNullOrEmpty(numExp)) {
                this.props.history.push('/');
            }

            let numExpUser = { numExp: numExp };
            appointmentService.getAllFree();
            appointmentService.getAppointmentByUser(numExpUser);
        } catch (error) {
            console.log(error);
        }
    }
    setAppointment(appointment_id) {
        this.setState({ appointmentid: appointment_id });
    }
    updateAppointment() {

        let error = validations.validateUser(this.props.user);

        if (!utils.isNullOrEmpty(error)) {
            this.setState({ msgError: error });
            setTimeout(() => {
                this.props.history.push('/profile');
            }, 2000);
            return;
        }

        let appointment = {
            numExp: this.props.user?.numExp,
            subject: "Appointment required by user.",
            id: this.state.appointmentid
        }
        try {
            appointmentService.updateAppointment(appointment);
            this.props.history.push('/agenda');
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div>
                <p> You have an appointment: </p>
                <span className="errorText">{this.state.msgError}</span>
                <p> Take a new Appointment
                <AppointmentList setAppointment={this.setAppointment} readOnly />
                    <button onClick={this.updateAppointment}>Take Appointment</button>
                </p>
            </div>
        );
    }
}

const mapStateToProps = ({ users }) => ({ user: users?.user })
export default connect(mapStateToProps)(Agenda);

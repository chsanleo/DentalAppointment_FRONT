import React from 'react';
import { connect } from 'react-redux';

class AppointmentList extends React.Component {

    render() {
        return (
            <select className="selector" defaultValue={this.props.selected} onChange={
                e => this.props.setAppointment( e.target.value )}>
                {this.props.appointmentList?.map(appointment => (
                    <option key={appointment.id}
                        value={appointment.id}
                    >
                        {appointment.startTime+ " " + appointment.endTime}
                    </option>
                ))} 
            </select>
        )
    }
}

const mapStateToProps = ({ appointments }) => ({ appointmentList: appointments.appointmentList })
export default connect(mapStateToProps)(AppointmentList);
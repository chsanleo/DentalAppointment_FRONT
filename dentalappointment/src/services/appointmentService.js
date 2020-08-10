import { appointmentRepository } from '../repositories/appointmentRepository.js';
import { addAppointmentUser,addFreeAppointmentList } from '../redux/actions/appointment.js';


export const appointmentService = {
    getAll, getAppointment, createAppointment, updateAppointment,
    deleteAppointment, getAllFree, getAppointmentByUser
};

function getAll() {
    appointmentRepository.getAll()
        .then(res => { })
        .catch(error => console.log(error));
};

function getAllFree() {
    appointmentRepository.getAllFree()
        .then(res => { 
            addFreeAppointmentList(res)
        })
        .catch(error => console.log(error));
};

function getAppointment(appointmentId) {
    appointmentRepository.getAppointment(appointmentId)
        .then(res => { })
        .catch(error => console.log(error));
};

function getAppointmentByUser(userExp) {
    appointmentRepository.getAppointmentByUser(userExp)
        .then(res => {addAppointmentUser(res) })
        .catch(error => console.log(error));
};

function createAppointment(appointment) {
    appointmentRepository.createAppointment(appointment)
        .then(res => { })
        .catch(error => console.log(error));
};

function updateAppointment(appointment) {
    appointmentRepository.updateAppointment(appointment)
        .then(res => { })
        .catch(error => console.log(error));
};

function deleteAppointment(appointmentId) {
    appointmentRepository.deleteAppointment(appointmentId)
        .then(res => { })
        .catch(error => console.log(error));
};
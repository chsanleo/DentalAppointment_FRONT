import { LISTAPPT, APPTUSER } from "../types/appointment.js";

import store from '../store';

export const addAppointmentUser = async (appointment) => {
    try {
        store.dispatch({
            type: APPTUSER,
            payload: appointment
        });
    } catch (error) {
        console.error(error);
    }
};
export const addFreeAppointmentList = async (appointmentList) => {
    try {
        store.dispatch({
            type: LISTAPPT,
            payload: appointmentList
        });
    } catch (error) {
        console.error(error);
    }
};
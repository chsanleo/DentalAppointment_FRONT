import axios from 'axios';

export const appointmentRepository = {
    getAll, getAppointment, createAppointment, updateAppointment,
    deleteAppointment, getAllFree, getAppointmentByUser
};

async function getAll() {
    try {
        const res = await axios.get(`api/appointment`);
        return res.data;
    }
    catch (error) {
        throw Error("Could not get appt.");
    }
};

async function getAllFree() {
    try {
        const res = await axios.get(`api/appointment/choose`);
        return res.data;
    }
    catch (error) {
        throw Error("Could not get appt.");
    }
};

async function getAppointment(appointmentId) {
    try {
        const res = await axios.get(`api/appointment/` + appointmentId);
        return res.data;
    }
    catch (error) {
        throw Error("Could not get appt.");
    }
};

async function getAppointmentByUser(userExp) {
    try {
        const res = await axios.post(`api/appointment/user`, userExp);
        return res.data;
    }
    catch (error) {
        throw Error("Could not get appt.");
    }
};

async function createAppointment(appointment) {
    try {
        const res = await axios.post(`api/appointment`, appointment);
        return res.data;
    }
    catch (error) {
        throw Error("Could not get appt.");
    }
};

async function updateAppointment(appointment) {
    try {
        const res = await axios.post(`api/appointment/update`, appointment);
        return res.data;
    }
    catch (error) {
        throw Error("Could not get appt.");
    }
};

async function deleteAppointment(appointmentId) {
    try {
        const res = await axios.put(`api/appointment/` + appointmentId);
        return res.data;
    }
    catch (error) {
        throw Error("Could not get appt.");
    }
};
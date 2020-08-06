import axios from 'axios';

export const userRepository = {
    getAll, getAppointment, createAppointment,updateAppointment,
    deleteAppointment
};

async function getAll(credentials) {
    try {
        const res = await axios.get(`api/appointment`);
        console.log(res)
        return res.data;
    }
    catch (error) {
        throw Error("Could not log in.");
    }
};

async function getAppointment(appointmentId) {
    try {
        const res = await axios.get(`api/appointment/` + appointmentId);
        console.log(res)
        return res.data;
    }
    catch (error) {
        throw Error("Could not log in.");
    }
};

async function createAppointment(appointment) {
    try {
        const res = await axios.post(`api/appointment`,appointment);
        console.log(res)
        return res.data;
    }
    catch (error) {
        throw Error("Could not log in.");
    }
};

async function updateAppointment(appointment) {
    try {
        const res = await axios.put(`api/appointment/` + appointment.id, appointment);
        console.log(res)
        return res.data;
    }
    catch (error) {
        throw Error("Could not log in.");
    }
};

async function deleteAppointment(appointmentId) {
    try {
        const res = await axios.put(`api/appointment/` + appointmentId);
        console.log(res)
        return res.data;
    }
    catch (error) {
        throw Error("Could not log in.");
    }
};
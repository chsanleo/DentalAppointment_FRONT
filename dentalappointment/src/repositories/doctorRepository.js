import axios from 'axios';

export const userRepository = {
    getProfile, createDoctor,
    updateDoctor, deleteDoctor
};

async function getProfile(userId) {
    try {
        const res = await axios.get(`api/doctor/` + userId);
        console.log(res)
        return res.data;
    }
    catch (error) {
        throw Error("Could not log in.");
    }
};
async function createDoctor(user) {
    try {
        const res = await axios.post(`api/doctor/`, user);
        console.log(res)
        return res.data;
    }
    catch (error) {
        throw Error("Could not log in.");
    }
};
async function updateDoctor(user) {
    try {
        const res = await axios.put(`api/doctor/` + user.userId, user);
        console.log(res)
        return res.data;
    }
    catch (error) {
        throw Error("Could not log in.");
    }
};
async function deleteDoctor(userId) {
    try {
        const res = await axios.delete(`api/user/` + userId);
        console.log(res)
        return res.data;
    }
    catch (error) {
        throw Error("Could not log in.");
    }
};
import axios from 'axios';

export const userRepository = {
    login, getProfile, updateUser,
    deleteUser, signup
};

async function login(credentials) {
    try {
        const res = await axios.post(`api/auth/login`, credentials);
        console.log(res)
        return res.data;
    }
    catch (error) {
        throw Error("Could not log in.");
    }
};
async function signup(email) {
    try {
        const res = await axios.post(`api/auth/signup`, email);
        console.log(res)
        return res.data;
    }
    catch (error) {
        throw Error("Problem signUp");
    }
};
async function getProfile(userId) {
    try {
        const res = await axios.get(`api/user/` + userId);
        console.log(res)
        return res.data;
    }
    catch (error) {
        throw Error("Problem Profile.");
    }
};
async function updateUser(user) {
    try {
        const res = await axios.put(`api/user/` + user.userId, user);
        console.log(res)
        return res.data;
    }
    catch (error) {
        throw Error("problem update.");
    }
};
async function deleteUser(userId) {
    try {
        const res = await axios.delete(`api/user/` + userId);
        console.log(res)
        return res.data;
    }
    catch (error) {
        throw Error("Could not log in.");
    }
};
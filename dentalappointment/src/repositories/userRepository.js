import axios from 'axios';

export const userRepository = {
    login
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
import { userRepository } from '../repositories/userRepository.js';

export const userService = {
    login
};

function login(credentials) {
    userRepository.login(credentials)
        .then(res => {
            localStorage.setItem('authToken', res.token);
        })
        .catch(error => console.log(error))
};
import { userRepository } from '../repositories/userRepository.js';
import { loginAction, logoutAction } from '../redux/actions/user.js';

export const userService = {
    login, logout
};

function login(credentials) {
    userRepository.login(credentials)
        .then(res => {
            localStorage.setItem('authToken', res.token);
            loginAction(res);
        })
        .catch(error => console.log(error))
};
function logout() {
    localStorage.clear();
    logoutAction();
};
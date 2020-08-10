import { userRepository } from '../repositories/userRepository.js';
import { loginAction, logoutAction } from '../redux/actions/user.js';

export const userService = {
    login, logout, askNumExp, getProfile,
    updateUser, deleteUser, forgotPass
};

function login(credentials) {
    userRepository.login(credentials)
        .then(res => {
            localStorage.setItem('authToken', res.token);
            loginAction(res);
        })
        .catch(error => {throw new Error(error);});
};

function logout() {
    localStorage.clear();
    logoutAction();
};

function askNumExp(email) {
    userRepository.signup(email)
        .then()
        .catch(error => console.log(error));
};

function getProfile(userId) {
    userRepository.getProfile(userId)
        .then()
        .catch(error => console.log(error));
};

function updateUser(user) {
    userRepository.updateUser(user)
        .then()
        .catch(error => {throw new Error(error);});
};

function deleteUser(userId) {
    userRepository.delete(userId)
        .then()
        .catch(error => console.log(error));
};

function forgotPass(identification) {
    userRepository.forgotPass(identification)
        .then()
        .catch(error => console.log(error));
}
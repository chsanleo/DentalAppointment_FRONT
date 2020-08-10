import { doctorRepository } from '../repositories/doctorRepository.js';

export const doctorService = {
    getProfile, createDoctor, updateDoctor, deleteDoctor
};

function getProfile() {
    doctorRepository.getProfile()
        .then(res => { })
        .catch(error => { console.log(error) });
};

function createDoctor(user) {
    doctorRepository.createDoctor(user)
        .then(res => { })
        .catch(error => { console.log(error) });
};

function updateDoctor(user) {
    doctorRepository.updateDoctor(user)
        .then(res => { })
        .catch(error => { console.log(error) });
};

function deleteDoctor(userId) {
    doctorRepository.deleteDoctor(userId)
        .then(res => { })
        .catch(error => { console.log(error) });
};

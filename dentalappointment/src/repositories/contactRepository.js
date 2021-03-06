import axios from 'axios';

export const contactRepository = {
    getAllContactUs, getContactUs,
    createContactUs, updateContactUs
};

async function getAllContactUs() {
    try {
        const res = await axios.get(`api/contact/getAll`);
        return res.data;
    }
    catch (error) {
        throw Error("Error back getallContactUs.");
    }
};

async function getContactUs(id) {
    try {
        const res = await axios.get(`api/contact/get` + id);
        return res.data;
    }
    catch (error) {
        throw Error("Error back getContactUs.");
    }
};
async function createContactUs(contactMail) {
    try {
        const res = await axios.post(`api/contact/`,contactMail);
        return res.data;
    }
    catch (error) {
        throw Error("Error back updateContactUs.");
    }
};
async function updateContactUs(id) {
    try {
        const res = await axios.get(`api/contact/update/` + id);
        return res.data;
    }
    catch (error) {
        throw Error("Error back updateContactUs.");
    }
};
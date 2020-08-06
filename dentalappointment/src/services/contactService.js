import { contactRepository } from '../repositories/contactRepository.js';

export const contactService = {
    getAllContactMails, getContactMail,
    createContactMail,updateContactMail
};

function getAllContactMails(){
    contactRepository.getAllContactUs()
    .then(res => { })//craete in redux
    .catch(error=>{console.log(error)});
};
function getContactMail(idContactMail){
    contactRepository.getContactUs(idContactMail)
    .then(res => { })//craete in redux/devolverVista
    .catch(error=>{console.log(error)});
};
function createContactMail(contactMail){
    contactRepository.createContactUs(contactMail)
    .then(res => { })
    .catch(error=>{console.log(error)});
};
function updateContactMail(){
    contactRepository.updateContactUs()
    .then(res => { })
    .catch(error=>{console.log(error)});
};
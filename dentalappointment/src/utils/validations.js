import { utils } from './utils.js';
import properties from '../config/properties.js';
import PROPERTIES from '../config/properties.js';


export const validations = {
    validateIdentification, validateCredentials, validateEmail,
    validateUser,
};

function validateIdentification(identification) {

    let error = utils.EMPTY();
    
    if (utils.isNullOrEmpty(identification.numExpedient)) { error += 'Expedient must be provided '; }
    error += validateEmail(identification.email);

    return error;
};

function validateCredentials(credentials) {

    let error = utils.EMPTY();

    if (utils.isNullOrEmpty(credentials.numExp)) { error += ' Expedient must be provided '; }

    if (!utils.isNullOrEmpty(credentials.password)) {
        if (credentials.password.length !== properties.MAX_PASSWORD_LENGTH) {
            error += ' Numer of character of the password is incorrect ';
        }
    } else { error += ' Password must be provided'; }

    return error;
};

function validateEmail(email) {
    let error = utils.EMPTY();
    //let regExp = '/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/';

    if (!utils.isNullOrEmpty(email)) {
    //    if (!regExp.test((email))) { error += 'Email must have a correct format "xxx@xx.xx" '; }
    } else { error += 'Email must be provided.'; }

    return error;
};

function validateUser(user) {
    let error = utils.EMPTY();

    if (utils.isNullOrEmpty(user.name) || user.name.length < PROPERTIES.MIN_CHAR_NAME) {
        error += ' Name must be provided. '
    }
    if (utils.isNullOrEmpty(user.surname) || user.surname.length < PROPERTIES.MIN_CHAR_SURNAME) {
        error += ' Surname must be provided. '
    }
    if (utils.isNullOrEmpty(user.address) || user.address.length < PROPERTIES.MIN_CHAR_ADDRESS) {
        error += ' Adress must be provided. '
    }
    error += this.validateEmail(user.email);

    return error;
}
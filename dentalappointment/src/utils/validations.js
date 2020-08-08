import { utils } from './utils.js';
import properties from '../config/properties.js';
import PROPERTIES from '../config/properties.js';


export const validations = {
    validateIdentification, validateCredentials, validateEmail,
    validateUser,
};

function validateIdentification(identification) {

    let error = utils.EMPTY();
    
    if (utils.isEmpty(identification.numExpedient)) { error += 'Expedient must be provided '; }
    error += validateEmail(identification.email);

    return error;
};

function validateCredentials(credentials) {

    let error = utils.EMPTY();

    if (utils.isEmpty(credentials.numExpedient)) { error += ' Expedient must be provided '; }

    if (!utils.isEmpty(credentials.password)) {
        if (credentials.password.length !== properties.MAX_PASSWORD_LENGTH) {
            error += ' Numer of character of the password is incorrect ';
        }
    } else { error += ' Password must be provided'; }

    return error;
};

function validateEmail(email) {
    let error = utils.EMPTY();
    let regExp = '/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/';

    if (!utils.isEmpty(email)) {
        if (!regExp.test((email).val())) { error += 'Email must have a correct format "xxx@xx.xx" '; }
    } else { error += 'Email must be provided.'; }

    return error;
};

function validateUser(user, password2) {
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

    if (!utils.isNullOrEmpty(user.password) && !utils.isNullOrEmpty(password2)) {
        if (user.password.length !== properties.MAX_PASSWORD_LENGTH ||
            password2.length !== properties.MAX_PASSWORD_LENGTH) {
            error += ' Numer of character of passwords is incorrect ';
        }
        else if (user.password !== password2) { error += ' Both passwords must coincide'; }
    }
    else { error += ' Both passwords must be provided. '; }

    return error;
}
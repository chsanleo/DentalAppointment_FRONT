import { LISTAPPT, APPTUSER} from "../types/appointment.js";

const initialState = {
    appointmentUser: {},
    appointmentList: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LISTAPPT:
            return {
                ...state,
                appointmentList: action.payload
            };
        case APPTUSER:
            return {
                ...state,
                appointmentUser: action.payload
            };
        default:
            return state;
    }
}
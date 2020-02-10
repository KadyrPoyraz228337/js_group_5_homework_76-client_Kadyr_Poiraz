import axios from 'axios';
import {store} from "../../index";

export const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
export const CREATE_MESSAGES = "CREATE_MESSAGES";
export const INPUT_CHANGE_HANDLER = "INPUT_CHANGE_HANDLER";
export const PROCESS_ERROR = "PROCESS_ERROR";
export const REMOVE_ERROR = "REMOVE_ERROR";

export const addNewMessageAction = () => ({type: ADD_NEW_MESSAGE});
export const createMessagesAction = data => ({type: CREATE_MESSAGES, data});
export const inputChangeHandlerAction = e => ({type: INPUT_CHANGE_HANDLER, e});
export const processErrorAction = () => ({type: PROCESS_ERROR});
export const removeErrorAction = () => ({type: REMOVE_ERROR});

export const createMessages = () => async dispatch => {
    const messages = await axios.get('http://localhost:8000/messages');
    dispatch(createMessagesAction(messages.data));
};

export const removeError = () => dispatch => dispatch(removeErrorAction());

export const addNewMessage = data => async dispatch => {
    const info = {
        author: data.author,
        message: data.message,
    };
    try {
        const resp = await axios.post('http://localhost:8000/messages', info);
        console.log(resp);
        dispatch(removeError());
    } catch (e) {
        console.log(e);
        dispatch(processErrorAction())
    }
    dispatch(addNewMessageAction());
};

export const checkNewMessage = () => async dispatch => {
    const messages = await axios.get('http://localhost:8000/messages?datetime=' + store.getState().listMessages[store.getState().listMessages.length-1].datetime);
    if (messages.data[0]) dispatch(createMessages());
};

export const inputChangeHandler = e => dispatch => {
    dispatch(inputChangeHandlerAction(e));
};
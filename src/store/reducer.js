import {ADD_NEW_MESSAGE, CREATE_MESSAGES, INPUT_CHANGE_HANDLER, PROCESS_ERROR, REMOVE_ERROR} from "./actions/chat";

const initialState = {
    author: '',
    message: '',
    listMessages: null,
    error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_NEW_MESSAGE:
          return {
            ...state,
            message: '',
          };
      case CREATE_MESSAGES:
          return {
              ...state,
              listMessages: action.data.reverse()
          };
      case INPUT_CHANGE_HANDLER:
            return {
                ...state,
                [action.e.target.name]: action.e.target.value
            };
      case PROCESS_ERROR:
          return {
              ...state,
              error: true
          };
      case REMOVE_ERROR:
          return {
              ...state,
              error: null
          };
      default: return state;
  }
};

export default reducer;
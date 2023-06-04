const redux = require("redux");

//initial state
const initialState = {
  loading: true,
  users: [],
  error: "",
};

//actions-> action-name, actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

const featchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const featchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const featchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
};

//reducer
const reducer = (state = initialState) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_USERS_ERROR:
      return {
        users: [],
        loading: false,
        error: action.payload,
      };
  }
};

//middleware

//store
const craeteStore = redux.legacy_createStore;
const store = craeteStore(reducer);

//subscribe
const unsubscribe = store.subscribe(() => {});

//dispatch

//unsubscribe
// unsubscribe();

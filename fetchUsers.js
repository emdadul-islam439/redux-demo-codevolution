const redux = require("redux");
const axios = require("axios");
const reduxThunk = require("redux-thunk");

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

const fetchUsersRequest = () => {
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
const reducer = (state = initialState, action) => {
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
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = reduxThunk.default;

// fetch users from jsonplaceholder
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(featchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(featchUsersError(error.message));
      });
  };
};

//store
const createStore = redux.legacy_createStore;
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

//subscribe
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//dispatch
store.dispatch(fetchUsers());

//unsubscribe
// unsubscribe();

import redux from "redux";

// initial state
const initialState = {
  noOfCakes: 10,
};

// actions-> action_name, actions
const BUY_CAKE = "BUY_CAKE";
function buyCakes() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};

// store
const createStore = redux.legacy_createStore;
const store = createStore(reducer);

// subscribe-dispatch values

console.log("From INDEX.JS");

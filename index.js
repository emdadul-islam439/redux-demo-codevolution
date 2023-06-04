const redux = require("redux");

// initial state
const initialState = {
  noOfCakes: 10,
  noOfIceCreams: 20,
};

// actions-> action_name, actions
// created 2 actions for tackling 2 situations 
const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

function buyCakes() {
  return {
    type: BUY_CAKE,
    info: "cake action",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
    info: "ice cream action",
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
    case BUY_ICE_CREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// store
const createStore = redux.legacy_createStore;
const store = createStore(reducer);

// subscribe-dispatch values
// CHAT-GPT chat link: https://chat.openai.com/share/a0bc6ab6-57d1-4319-8afb-2f123a5eb2f8
console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state: ", store.getState())
);

store.dispatch(buyCakes());
store.dispatch(buyCakes());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

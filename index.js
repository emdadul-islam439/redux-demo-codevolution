// initial state
const initialState = {
  noOfCakes: 10,
};

// actions-> action_name, actions
const BUY_CAKE = "BUY_CAKE";
function buyCakes() {
  return {
    type: BUY_CAKE,
    info: "First redux action"
  }
}

// reducers
// store
//

console.log("From INDEX.JS");

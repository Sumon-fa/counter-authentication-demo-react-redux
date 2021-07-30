import { createSlice, configureStore } from "@reduxjs/toolkit";
const counterInitialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.counter++;
      return state;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toogle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const authInitialState = { isAuthentication: false };
const authenticationSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthentication = true;
    },
    logout(state) {
      state.isAuthentication = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authenticationSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authenticationSlice.actions;

export default store;

/*import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toogle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;*/

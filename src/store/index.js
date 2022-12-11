import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: CounterReducer, auth: authReducer },
});

export default store;

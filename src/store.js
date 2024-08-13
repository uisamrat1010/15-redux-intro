import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./Features/customer/customerSlice";
import accountReducer from "./Features/account/accountSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;

import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from "./CartReducer";
import { drawerReducer } from "./drawerReducer";
import { couponReducer } from "./couponReducer";

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
  drawer: drawerReducer,
  coupon: couponReducer,
});

export default rootReducer;

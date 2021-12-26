import { createStore , Store } from "redux";

import { ListReducer } from "./action";
import * as types from './types';


const store: Store<types.PersonState, types.PersonAction> & {
    dispatch: types.DispatchType;
} = createStore(ListReducer);

export default store;
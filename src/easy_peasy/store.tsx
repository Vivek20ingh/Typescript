
import { createStore, createTypedHooks } from "easy-peasy";
import model from './acton';
import * as types from "./types";

const { useStoreActions, useStoreState, useStoreDispatch } =
    createTypedHooks<types.ListModel>();

export { useStoreActions, useStoreDispatch, useStoreState };

const store = createStore<types.ListModel>(model);

export default store;
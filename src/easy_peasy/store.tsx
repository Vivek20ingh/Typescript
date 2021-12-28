
import { createStore, createTypedHooks } from "easy-peasy";
import model from './acton';
import * as types from "./types";

const { useStoreActions, useStoreState, useStoreDispatch } =
    createTypedHooks<types.Actionlist>();

export { useStoreActions, useStoreDispatch, useStoreState };

const store = createStore<types.Actionlist>(model);

export default store;
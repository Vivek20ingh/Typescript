import { action } from "easy-peasy";

import * as types from './types'

const model: types.ListModel={
    list: [],
    addnote: action((state, payload) => {
        state.list.push(payload.object1);

    }),
};


export default model;
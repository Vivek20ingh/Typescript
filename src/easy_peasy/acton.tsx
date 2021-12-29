import { action } from "easy-peasy";
import shortid from "shortid";

import * as types from './types'

const model: types.Actionlist = {
    list: [],
    open1:false,
    id:"",
    addnote: action((state, payload) => {
        let key: string = shortid.generate();
        let newobject: types.Person = payload;
        newobject.unique_id = key;
        state.list.push(newobject);

    }),
    deletenote: action((state, payload) => {
        let newidx = state.list.findIndex(obj => obj.unique_id === payload);
        let newlist = state.list;
        newlist.splice(newidx,1)
        state.list = newlist;

    }),
    updatenote: action((state, payload) => {

        let newidx1 = state.list.findIndex(obj => obj.unique_id === payload.unique_id);
        let newlist = state.list;
        newlist[newidx1] = payload;
        state.list = newlist;
    }),

    setpopup:action((state, payload) => {
        state.open1=payload
    }),

    setid: action((state, payload) => {
        state.id=payload
    }),
  
};


export default model;
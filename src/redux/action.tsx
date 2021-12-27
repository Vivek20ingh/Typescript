
import shortid from "shortid";
import * as type from './types'

const initialState: type.PersonState = {
    list: []
}

const ListReducer = (state: type.PersonState = initialState, action:type.PersonAction): type.PersonState => {
    switch (action.type) {
        case 'SAVE':
            let key: String = shortid.generate();
            action.object1.unique_id = key;
            state.list.push(action.object1)
            return {
                ...state,
                list: state.list, 
            }; 
            case 'DELETE':
                let newidx = state.list.findIndex(obj => obj.unique_id === action.idx);
                state.list.splice(newidx,1)
            return {
                ...state,
                list:state.list
            }; 
            case 'UPDATE':
                 let newidx1 = state.list.findIndex(obj => obj.unique_id === action.object1.unique_id);
                 state.list[newidx1]=action.object1
            return {
                ...state,
                list: [...state.list]
            }; 

        default:
            return state;
    }
};

export default ListReducer

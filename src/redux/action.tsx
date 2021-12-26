
import * as type from './types'

const initialState: type.PersonState = {
    list: []
}

export const ListReducer = (state: type.PersonState = initialState, action:type.PersonAction): type.PersonState => {
    switch (action.type) {
        case 'SAVE':
            return {
                ...state,
                list: [...action.list], 
            }; 
            case 'DELETE':
            return {
                ...state,
                list: [...action.list], 
            }; 
            case 'UPDATE':
            return {
                ...state,
                list: [...action.list], 
            }; 
        default:
            return state;
    }
};

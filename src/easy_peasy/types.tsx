import { Action } from "easy-peasy";
interface Person {
    unique_id: String;
    name: string;
    city: string;
    age: Number;
};


type PersonState = {
    list: Person[];
};

type PersonAction = {
  
    object1:Person;

};

interface ListModel {
    list: Person[];
    addnote: Action<ListModel, PersonAction>;
}

// interface StoreModel {
//     model: ListModel;
// }

type DispatchType = (args: PersonAction) =>  PersonAction;


export type { Person, PersonState, PersonAction, DispatchType,ListModel };
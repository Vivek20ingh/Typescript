interface Person {
    unique_id: String;
    name: string;
    city: string;
    age: Number;
};


type PersonState = {
    list: Person[];
    object1:Person;
    index:number,
    idx: String,
};

type PersonAction = {
    type: string;
    list: Person[];
    object1:Person;
    index:number;
    idx: String,
};

type DispatchType = (args: PersonAction) =>  PersonAction;


export type { Person, PersonState, PersonAction, DispatchType };
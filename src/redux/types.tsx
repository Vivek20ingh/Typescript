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
    type: string;
    list: Person[];
};

type DispatchType = (args: PersonAction) =>  PersonAction;


export type { Person, PersonState, PersonAction, DispatchType };
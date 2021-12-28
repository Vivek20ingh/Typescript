import { Action } from "easy-peasy";
interface Person {
    unique_id: String;
    name: string;
    city: string;
    age: Number;
};

type Persondelete=String



interface Actionlist {
    list: Person[];
    addnote: Action<Actionlist, Person>;
    updatenote: Action<Actionlist, Person>;
    deletenote: Action<Actionlist, Persondelete>;
}





export type { Person,Actionlist };
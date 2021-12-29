import { Action } from "easy-peasy";

type Person= {
    unique_id: string,
    name: string,
    city: string,
    age: Number,
};

type Persondelete=string;
type popup=boolean


interface Actionlist {
    list: Person[];
    open1:popup;
    id: Persondelete;
    addnote: Action<Actionlist, Person>;
    updatenote: Action<Actionlist, Person>;
    deletenote: Action<Actionlist, Persondelete>;
    setpopup:Action<Actionlist, popup>;
    setid:Action<Actionlist, Persondelete>;

}





export type { Person,Actionlist };
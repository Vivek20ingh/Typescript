import  {createContext} from "react";
type Person= {
    unique_id: string,
    name: string,
    city: string,
    age: Number,
};

type Persondelete=string;
type popup=boolean

interface listInterface {
    list: Person[];
    id:Persondelete;
    open1:popup;
    addnote:(Object: Person) =>void;
    updatenote:(Object: Person)=>void;
    deletenote:(idx:Persondelete)=>void;
    setpopup:(open:popup)=>void;
    setid:(idx:string)=>void;
}

const ListContext:listInterface= {
    list: [],
    id:"",
    open1:false,
    addnote:()=>{},
    updatenote:()=>{},
    deletenote:()=>{},
    setpopup:()=>{},
    setid:()=>{}
};

export const APPtx = createContext<listInterface>(ListContext);

export default ListContext;
export type { Person };


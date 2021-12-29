
import React, { useState } from "react";
import Form  from "./Component/Form";

import ListContext from './Component/Context/Context'
import { APPtx } from './Component/Context/Context'
import shortid from "shortid";
import * as types from  './Component/Context/Context'


function App() {
  const [list,setlist] = useState(ListContext.list);
  const  [ open1, setopen1]= useState(ListContext.open1);
  const [id,setid1]=useState(ListContext.id)

  const addnote = (object:types.Person):void => {
    let key: string = shortid.generate();
    let newobject = object;
    newobject.unique_id = key;
    setlist([...list, newobject])

  }

  const updatenote =(object:types.Person):void=>{
    let newlist = list;
    let newidx1 = list.findIndex(obj => obj.unique_id === object.unique_id);
    newlist[newidx1]=object;
    setlist(list);

  }

  const setpopup =(open:boolean):void=>{
    setopen1(open)
  }

  const setid =(idx:string):void=>{
    setid1(idx);
  }

  const deletenote =(idx:string):void=>{
    let newidx = list.findIndex(obj => obj.unique_id === idx);
    let newlist=list
    newlist.splice(newidx,1)
    setlist(newlist)
  }

  return (
    <div className="App">
      <APPtx.Provider value={{ list, addnote, updatenote ,setpopup,setid,deletenote,open1,id}} >
        <Form />
      </APPtx.Provider>
    </div>
  );
}


export default App;

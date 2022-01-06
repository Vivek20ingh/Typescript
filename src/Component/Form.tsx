import React, { useState ,useContext} from "react";
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Listview from './Listview'
import * as types from './Context/Context'
import ConfirmDialog from "./ConfirmDialog";
import {APPtx}from './Context/Context'
const axios = require('axios');

const Form = () => {

    const Person = { unique_id: "a", name: "a", city: "", age: 0 }
    const {list ,addnote,updatenote,setpopup,setid}= useContext(APPtx)
    
    const [object, setobject] = useState<types.Person>(Person);
    const handleSubmit = (): void => {
        addnote(object);
        setobject(Person)
    }

    const handleDelete = (idx: string): void => {
        setpopup(true);
        setid(idx);
    }

    const handleUpdate = (idx: string,): void => {
        let newidx = list.findIndex(obj => obj.unique_id === idx);
        setobject({ unique_id: idx, name: list[newidx].name, city: list[newidx].city, age: list[newidx].age })

    }

    const handleEdit = (): void => {
        updatenote(object)
        setobject(Person)
    }

    axios.get(`http://www.geognos.com/api/en/countries/info/all.json`)
    .then(res=>{
      console.log(res);
    })
    .catch(err => console.log(err));

    return (
         <div>
            <ConfirmDialog />
            <Listview handleDelete={handleDelete} handleUpdate={handleUpdate} />
        </div>
    );
}

export default Form





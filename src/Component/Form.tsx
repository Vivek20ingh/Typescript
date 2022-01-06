import React, { useState, useContext } from "react";
import { ReactForm } from 'react-forms'
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Listview from './Listview'
import * as types from './Context/Context'
import ConfirmDialog from "./ConfirmDialog";
import { APPtx } from './Context/Context'

const Form = () => {

  // type xyz = [{
  //   type: string,
  //   valueKey: string,
  //   fieldProps: {
  //     label: String,
  //     fullWidth: Boolean,
  //   }

  // }]
  const myConfig = [{
    type: 'text',
    valueKey: 'name',
    fieldProps: { 
      setlabel: 'Sample Text name', fullWidth: true },
  },
  {
    type: 'text',
    valueKey: 'city',
    fieldProps: { label: 'Sample Text city', fullWidth: true },
  },
  {
    type: 'text',
    valueKey: 'age',
    fieldProps: { label: 'Sample Text age', fullWidth: true },
  }
  ]

  const Person = { unique_id: "", name: "hj", city: "", age: 0 }
  const { list, addnote, updatenote, setpopup, setid } = useContext(APPtx)

  const [object, setobject] = useState<types.Person>(Person);

  const handleSubmit = (values: object,actions): void => {
    object.name=values.name;
    object.city=values.city;
    object.age=values.age;
    setobject({...object,values})
   
    addnote(object );
    console.log(object);
    // object.unique_id="";
    // object.name="";
    // object.city="";
    object.age=0;
    
    setobject({ unique_id: "", name: "", city: "", age: 0 })
    
    actions.setSubmitting(false);
  }

  const handleDelete = (idx: string): void => {
    setpopup(true);
    setid(idx);
  }

  const handleUpdate = (idx: string,): void => {
    let newidx = list.findIndex(obj => obj.unique_id === idx);
    object.unique_id=list[newidx].unique_id;
    object.name=list[newidx].name;
    object.city=list[newidx].city;
    object.age=list[newidx].age;

    setobject({ unique_id: idx, name: list[newidx].name, city: list[newidx].city, age: list[newidx].age })

  }

  const handleEdit = (values): void => {
    console.log(object);
    console.log("heyyy")
    updatenote(object)
    setobject(Person)
  }

  return (


    <div className="split left">
      <ReactForm
        config={myConfig}

        initialValues={object}
     
        onSubmit={object.unique_id == "" ? (values: object,actions) => handleSubmit(values,actions) : (values:object) => handleEdit(values)} 

      />
      <ConfirmDialog />
      <Listview handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>




  );
}

export default Form





// const myInitialValues = [{ myTextField : 'c' }]

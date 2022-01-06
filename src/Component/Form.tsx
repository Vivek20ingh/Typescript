import React, { useState, useContext } from "react";
import { ReactForm } from 'react-forms'
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Listview from './Listview'
import * as types from './Context/Context'
import ConfirmDialog from "./ConfirmDialog";
import { APPtx } from './Context/Context'

const Form = () => {

  const myConfig = [{
    type: 'text',
    valueKey: 'name',
    fieldProps: {
      setlabel: 'Sample Text name', fullWidth: true
    },
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

  const handleSubmit = async (values: types.Person, actions): void => {

    await (()=>{
      setobject({...object, unique_id: "", name: values.name, city: values.city, age: values.age })
    })


    addnote(object);
    console.log(object);
    //setobject({ unique_id: "", name: values.name, city: "", age: 5 })
    //actions.setSubmitting(false);
    setobject({ unique_id: "", name: values.name, city: values.city, age: values.age })

    console.log(object);


  }

  const handleDelete = (idx: string): void => {
    setpopup(true);
    setid(idx);
  }

  const handleUpdate = (idx: string,): void => {
    let newidx = list.findIndex(obj => obj.unique_id === idx);
    setobject({ unique_id: idx, name: list[newidx].name, city: list[newidx].city, age: list[newidx].age })

  }

  const handleEdit = (values): void => {
    // console.log(object);
    // console.log("heyyy")
    updatenote(object)
    setobject(Person)
  }

  return (


    <div className="split left">
      <ReactForm
        config={myConfig}
        initialValues={object}
        onSubmit={object.unique_id == "" ? (values: types.Person, actions) => handleSubmit(values, actions) : (values: object) => handleEdit(values)}
      />
      <ConfirmDialog />
      <Listview handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>




  );
}

export default Form





// const myInitialValues = [{ myTextField : 'c' }]

import React, { useState, useContext } from "react";
import { ReactForm } from 'react-forms'
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Listview from './Listview'
import * as types from './Context/Context'
import ConfirmDialog from "./ConfirmDialog";
import { APPtx } from './Context/Context'
import { action } from "easy-peasy";

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

  const Person = { unique_id: "", name: "", city: "", age: 0 }
  const { list, addnote, updatenote, setpopup, setid } = useContext(APPtx)
  const [object, setobject] = useState<types.Person>(Person);
  const handleSubmit = (values: types.Person, actions): void => {
    addnote(values);
    setobject({ unique_id: "", name: "", city: "", age: 0 })
    actions.setSubmitting(false);
    actions.resetForm();
  }

  const handleDelete = (idx: string): void => {
    setpopup(true);
    setid(idx);
  }

  const handleUpdate = (idx: string,): void => {
    let newidx = list.findIndex(obj => obj.unique_id === idx);
    setobject({ unique_id: idx, name: list[newidx].name, city: list[newidx].city, age: list[newidx].age })}

  const handleEdit = (values): void => {
    updatenote(values)
    setobject(Person)
  }


  return (

    <div className="split left">
      <ReactForm
        config={myConfig}
        initialValues={object}
        enableReinitialize
        onSubmit={object.unique_id == "" ? (values: types.Person, actions) => handleSubmit(values, actions) : (values: object) => handleEdit(values)}
      />
      <ConfirmDialog />
      <Listview handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>
  );
}

export default Form


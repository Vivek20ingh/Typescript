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
    fieldProps: { label: 'Sample Text name', fullWidth: true },
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

  const handleSubmit = (values: object): void => {
    object.name=values.name;
    object.city=values.city;
    object.age=values.age;
    // setobject({...object,values})
    setobject(object);
    addnote(object);
    setobject(Person)
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

  const handleEdit = (): void => {
    updatenote(object)
    setobject(Person)
  }

  return (


    <div className="split left">
      <ReactForm
        config={myConfig}

        // initialValues={[{ myTextField: '6' }, { myTextField2: '12' }]}
        onSubmit={object.unique_id == "" ? (values: object) => handleSubmit(values) : () => handleEdit()} 

      />
      <ConfirmDialog />
      <Listview handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>




  );
}

export default Form





// const myInitialValues = [{ myTextField : 'c' }]

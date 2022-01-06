import React, { useState, useContext } from "react";
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Listview from './Listview'
import * as types from './Context/Context'
import ConfirmDialog from "./ConfirmDialog";
import { APPtx } from './Context/Context'
const axios = require('axios');

const Form = () => {

  const Person = { unique_id: "12", name: "Vivek", city: "Gorakhpur", age: 21 }
  const { list, addnote, updatenote, setpopup, setid } = useContext(APPtx)

  const [object, setobject] = useState<types.Person>(Person);
  const handleSubmit = (): void => {

    // axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-12-06&sortBy=publishedAt&apiKey=09e64a2754e24d1eb920ec7c478dc60b`)
    // .then(res=>{
    //   let nameaut=res.data.articles[0].author;
    //   let city1=res.data.articles[0].title;
    //   let age1=res.data.articles[0].description;
    //   setobject({...object,name: nameaut,city:city1, age: age1});
    //   console.log();
    //   console.log(res.data.articles);

    // })
    // .catch(err => console.log(err));

    const headers = {
      "Content-Type": "application/json",
    };
    const cor={
      origin: true, credentials: true
    }
    axios.all([
      axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-12-06&sortBy=publishedAt&apiKey=09e64a2754e24d1eb920ec7c478dc60b`),
      axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-12-06&sortBy=publishedAt&apiKey=09e64a2754e24d1eb920ec7c478dc60b`)
    ])
      .then(res => {
        console.log(res[0]);
        console.log(res[1].data);
        
      })
      .catch(err => console.log(err))
    addnote(object);


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
    <div>
      <ConfirmDialog />
      <Listview handleDelete={handleDelete} handleUpdate={handleUpdate} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Form





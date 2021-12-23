import React, { useState } from "react";
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Listview from './Listview'
import shortid from "shortid";


const Form = () => {
    const [object, setobject]= useState({ unique_id: null, name: String, city: String, age: Number });
    const [masterData, setmasterData] = useState(Array({ unique_id: null, name: String, city: String, age: Number }))

    const handleSubmit = (evt) =>  {

        evt.preventDefault();
        let key = shortid.generate();
        object.unique_id = key;
        setobject(object)
        setmasterData([...masterData, object]);
        console.log(object)
        console.log(key);
        setobject({ ...object, unique_id: null, name: String, city: String, age: Number })

    }

    const handleDelete = (idx:String) => {
        console.log(idx);
        let newidx = masterData.findIndex(obj => obj.unique_id === idx);
        masterData.splice(newidx, 1);
        setmasterData([...masterData])
    }

    const handleUpdate = (idx:String) => {
        let newidx = masterData.findIndex(obj => obj.unique_id === idx);
        setobject({ unique_id: idx, name: masterData[newidx].name, city: masterData[newidx].city, age: masterData[newidx].age })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        let obj1 = object
        let newidx = masterData.findIndex(obj => obj.unique_id === obj1.unique_id);
        masterData[newidx] = obj1;
        setmasterData(masterData)
        setobject({ ...object, unique_id: null, name: String, city: String, age: Number })
    }
    return (
        <div>
            <form className="split left">
                <h3>Detail</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name"
                        value={object.name}
                        onChange={e => { setobject({ ...object, name: e.target.value }) }} />
                </div>

                <div className="form-group" style={{ marginTop: 10 }}>
                    <label >City Name</label>
                    <input type="text" className="form-control" placeholder="Enter City Name"
                        value={object.city}
                        onChange={e => { setobject({ ...object, city: e.target.value }) }} />
                </div>

                <div className="form-group" style={{ marginTop: 10 }}>
                    <label >Age</label>
                    <input type="text" className="form-control" placeholder="Enter Your Age"
                        value={object.age}
                        onChange={e => { setobject({ ...object, age: e.target.value }); }} />
                </div>
                <button onClick={object.unique_id == null ? (evt) => handleSubmit(evt) : (e) => handleEdit(e)} className="btn btn-primary btn-block" style={{ marginTop: 10 }}>{object.unique_id == null ? "Submit" : "Update"}</button>
            </form>

            <Listview masterData={masterData} handleDelete={handleDelete} handleUpdate={handleUpdate} />


        </div>
    );
}

export { Form };


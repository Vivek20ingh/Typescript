import React, { useState } from "react";
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Listview from './Listview'
import shortid from "shortid";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';




const Form = () => {
    const Person = { unique_id: null, name: String, city: String, age: Number }
    const [object, setobject] = useState<typeof Person>(Person);
    const [masterData, setmasterData] = useState<typeof Person[]>([])

    const handleSubmit = (evt: Event): void => {

        evt.preventDefault();
        let key: String = shortid.generate();
        object.unique_id = key;
        setobject(object)
        setmasterData([...masterData, object]);
        setobject(Person)

    }

    const handleDelete = (idx: String): void => {
        let newidx = masterData.findIndex(obj => obj.unique_id === idx);
        masterData.splice(newidx, 1);
        setmasterData([...masterData])
    }

    const handleUpdate = (idx: String): void => {
        let newidx = masterData.findIndex(obj => obj.unique_id === idx);
        setobject({ unique_id: idx, name: masterData[newidx].name, city: masterData[newidx].city, age: masterData[newidx].age })
        console.log(typeof (newidx));
    }

    const handleEdit = (e: Event): void => {
        e.preventDefault()
        let obj1 = object
        let newidx = masterData.findIndex(obj => obj.unique_id === obj1.unique_id);
        masterData[newidx] = obj1;
        setmasterData(masterData)
        setobject(Person)
    }
    return (
        <div>
            <Box sx={{ '& > :not(style)': { m: 1 } }} className="split left">
                <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">Name </InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        value={object.name}
                        onChange={e => { setobject({ ...object, name: e.target.value }) }}/>
                </FormControl>

                <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">CITY</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                            </InputAdornment>
                        }
                        value={object.city}
                        onChange={e => { setobject({ ...object, city: e.target.value }) }} />
                </FormControl>

                <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">AGE</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                            </InputAdornment>
                        }
                        value={object.age}
                        onChange={e => { setobject({ ...object, age: e.target.value }) }} />
                </FormControl>

                <div>
                    <Button
                        color="secondary" variant="contained"  startIcon={<SaveIcon />}
                        onClick={object.unique_id == null ? (evt: Event) => handleSubmit(evt) : (e: Event) => handleEdit(e)} >
                        {object.unique_id == null ? "Submit" : "Update"}
                    </Button>
                </div>

            </Box>


            <Listview masterData={masterData} handleDelete={handleDelete} handleUpdate={handleUpdate} />

        </div>
    );
}

export { Form };




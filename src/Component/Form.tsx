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

import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import * as types from '../redux/types'


const Form = () => {

    const dispatch: Dispatch<any> = useDispatch();
    const {list} = useSelector((state: types.PersonState) => state);
    const Person = { unique_id: "", name: "", city: "", age: 0 }
    const [object, setobject] = useState<types.Person>(Person);
    const handleSubmit = (evt: React.MouseEvent): void => {
        evt.preventDefault();
        dispatch({
            type: "SAVE",
            object1:object
        });
        setobject(Person)

    }

    const handleDelete = (idx: String): void => {
        dispatch({
            type: "DELETE",
            idx:idx
        });
    }

    const handleUpdate = (idx: String): void => {
        let newidx = list.findIndex(obj => obj.unique_id === idx);
        setobject({ unique_id: idx, name: list[newidx].name, city: list[newidx].city, age: list[newidx].age })

    }

    const handleEdit = (e: React.MouseEvent): void => {
        e.preventDefault()
        dispatch({
            type: 'UPDATE',
            object1:object,
        });
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
                            </InputAdornment>}

                        value={object.name}
                        onChange={e => { setobject({ ...object, name: e.target.value }) }} />
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
                        color="secondary" variant="contained" startIcon={<SaveIcon />}
                        onClick={object.unique_id == "" ? (evt: React.MouseEvent) => handleSubmit(evt) : (e: Event) => handleEdit(e)} >
                        {object.unique_id == "" ? "Submit" : "Update"}
                    </Button>
                </div>
            </Box>

            <Listview handleDelete={handleDelete} handleUpdate={handleUpdate} />
        </div>
    );
}

export {Form};




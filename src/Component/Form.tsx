import React, { useState } from "react";
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Listview from './Listview'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import * as types from '../easy_peasy/types'
import { useStoreActions, useStoreState } from '../easy_peasy/store'




const Form = () => {

    const addnote = useStoreActions((actions) => actions.addnote);
    const updatenote = useStoreActions((actions) => actions.updatenote);
    const deletenote = useStoreActions((actions) => actions.deletenote);
    const list = useStoreState((state) => state.list);

    const Person = { unique_id: "", name: "", city: "", age: 0 }
    const [object, setobject] = useState<types.Person>(Person);

    const handleSubmit = (evt: React.MouseEvent): void => {
        evt.preventDefault();
        addnote(object)
        setobject(Person)
        console.log(object);
        console.log(list)

    }

    const handleDelete = (idx: String): void => {
        deletenote(idx)
    }

    const handleUpdate = (idx: String): void => {
        let newidx = list.findIndex(obj => obj.unique_id === idx);
        console.log(newidx);
        setobject({ unique_id: idx, name: list[newidx].name, city: list[newidx].city, age: list[newidx].age })

    }

    const handleEdit = (e: React.MouseEvent): void => {
        e.preventDefault()
        updatenote(object)
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

export { Form };




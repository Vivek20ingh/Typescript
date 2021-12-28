import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import * as types from "../easy_peasy/types";
import { useStoreState } from "easy-peasy";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Listview = ({ handleDelete, handleUpdate }) => {

     const list = useStoreState((state: types.PersonState) => state.list);
    return (

        <div className="split right">
            <Box sx={{ width: '100%' }}>
                {list.map((d, idx) =>
                    <Grid key={d.unique_id} container rowSpacing={1} columnSpacing={1}>
                        <Grid item xs={3}>
                            <Item>{d.name}</Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item>{d.city}</Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item>{d.age}</Item>
                        </Grid>
                        <Button onClick={() => handleUpdate(d.unique_id)} size="small">UP</Button>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <IconButton aria-label="delete" size="large">
                                <DeleteIcon fontSize="inherit" onClick={() => handleDelete(d.unique_id)} />
                            </IconButton>
                        </Stack>
                    </Grid>)}
            </Box>
        </div>
    )
}

export default Listview;






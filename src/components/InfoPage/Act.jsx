import React from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';


function Act({ act }) {
    const [changeAct, setChangeAct] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const action = { type: 'GET_ACTS' }
        dispatch(action);
    }, []);

    const deleteAct = (e) => {
        console.log(`Deleting act ${act.id}`);
        axios.delete(`/acts/${act.id}`).then((response) => {
            const action = { type: 'GET_ACTS' }
            dispatch(action)
        }).catch((error) => {
            console.log(`Error in deleteAct ${error}`);
            alert('Something went wrong.');
        })
    }
  
    const saveAct = (e) => {
        console.log(`Saving Act ${changeAct}`)
        axios.put(`/acts/save/${act.id}`, {
            act: changeAct,
        }).then((response) => {
            const action = { type: 'GET_ACTS' }
            dispatch(action);
        }).catch((error) => {
            console.log(`Error in Put ${error}`)
            alert('Something went wrong.');
        })
    }


    return (
        <Grid item xs={{ minWidth: 275 }}>
            <Card sx={{ minWidth: 700 }}>
                <CardContent>
                    <TextField fullWidth
                        defaultValue={act.acts}
                        id="outlined-basic"
                        variant="outlined"
                        onChange={(e) => setChangeAct(e.target.value)} />
                </CardContent>
                <CardActions>
                    <Button 
                        variant="outlined"
                        color="error"
                        onClick={(e) => saveAct(act.id)}
                        >
                        Save
                        </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={(e) => deleteAct(act.id)}
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Act;
import React from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import axios from 'axios';


function Act ({act}){

const dispatch = useDispatch();

useEffect(() =>{
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


    return (
        <Grid item xs={{ minWidth:275 }}>
        <Card sx={{minWidth: 275 }}>
          <CardContent>
            <Typography variant="h6">
            {act.acts}
            </Typography>
       
          </CardContent>
        <CardActions>
            <Button
            variant="outlined"
            color="error"
            // onClick
            >
                Edit
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
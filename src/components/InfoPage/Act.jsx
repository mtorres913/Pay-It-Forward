import React from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';

function Act ({act,}){
const acts = useSelector((store => store.acts));
const dispatch = useDispatch();

useEffect(() =>{
    const action = { type: 'GET_ACTS' }
    dispatch(action);
}, []);



    return (
        <Grid item xs={{ minWidth:275 }}>
        <Card sx={{minWidth: 275 }}>
          <CardContent>
            <Typography variant="h6">
            {act.acts}
            </Typography>
          </CardContent>
  
        </Card>
      </Grid>
    )
}

export default Act;
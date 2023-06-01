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
import axios from 'axios';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const act = useSelector((store) => store.act);
  const dispatch = useDispatch();
 
  useEffect(() => {
    console.log('in useEffect');
    const action = { type: 'GET_ACT' };
    dispatch(action);
  }, []);

//   const getBackgroundDecoration = () => {
//         return 'lightgreen';
// }


const shuffleAct = (e) => {
  console.log('in shuffleAct');
  const action = { type: 'GET_ACT' };
  dispatch(action);
}

completeAct = (e) => {
  console.log(`Completing act ${act.id}`)
  axios.post(`/act/`, {
    actID: act.id,
    userID: user.id,
  }).then((response) => {
    alert('You completed an act! You rock!!');
    const action = { type: 'GET_ACT' };
    dispatch(action);
  }).catch((error) => {
    console.log(`Error in completeAct ${error}`);
    alert('Something went wrong.');
  })
}

  return (
    <div className="container" id={act.id} >
      <h2>Welcome, {user.username}!</h2>
      
      <Grid item xs={12} md={4}>
        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography
              variant="h5"
            >
  {/* {JSON.stringify(act)}  */}
  {act.map(act => (
    <div id={act.id}>
      {act.acts}
    </div>
  ))}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
            variant="outlined"
            color="error"
            // onClick
            > Complete 
            </Button>
            <Button
            variant="outlined"
            color="error"
            // onClick
            >
              Favorite
            </Button>
            <Button
            variant="outlined"
            color="error"
            onClick={(e) => shuffleAct(e)}
            >
              Shuffle
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {/* <LogOutButton className="btn" /> */}
      <footer>“A single act of kindness throws out roots in all directions and the roots spring up and make new trees.” – Amelia Earhart</footer>
    </div>
    
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

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

const completeAct = (e, actId) => {
  console.log(`Completing act ${actId}`)
  axios.post(`/act/`, {
    actID: actId,
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

const favoriteAct = (e, actID) => {
  console.log(`Favoriting act ${actId}`)
  axios.post(`/act/favorite/`, {
    actID: actId,
    userID: user.id,
  }).then((response) => {
    alert(`Added (${act.act}) to Favorites`)
  }).catch((error) => {
    console.log(`Error in favoriteAct ${error}`);
    alert('Something went wrong.');
  })
}


  return (
    <div className="container" id={act.id} >
      <h2>Welcome, {user.username}!</h2>
      {act.map(act => (
      <Grid item xs={12} md={4}>
        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography
              variant="h5"
            >
  {/* {JSON.stringify(act)}  */}

        <div id={act.id}>
          {act.act}
        </div>
  
            </Typography>
          </CardContent>
          <CardActions>
            <Button
            variant="outlined"
            color="error"
            onClick={(e) => completeAct(e, act.id)}
            > Complete 
            </Button>
            <Button
            variant="outlined"
            color="error"
            onClick={(e) => favoriteAct(e, act.id)}
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
      ))}
      {/* <LogOutButton className="btn" /> */}
      <footer>“A single act of kindness throws out roots in all directions and the roots spring up and make new trees.” – Amelia Earhart</footer>
    </div>
    
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

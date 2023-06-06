import React from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import axios from 'axios';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const act = useSelector((store) => store.act);
  const [completion, setCompletion] = useState('');
  const dispatch = useDispatch();
 
  useEffect(() => {
    console.log('in useEffect');
    const action = { type: 'GET_ACT' };
    dispatch(action);
  }, []);

  useEffect(() => {
    console.log('in UseEffect');
    getCompletion();
  }, [act]);

  const getBackgroundDecoration = () => {
        if (completion && completion.length > 0){
          return 'lightgreen';
        }
}

const getButtonDecoration= () => {
  if (completion.complete === 'TRUE'){
      return 'line-through';
  } else {
      return 'none';
  }
}


const shuffleAct = (e) => {
  console.log('in shuffleAct');
  const action = { type: 'GET_ACT' };
  dispatch(action);
}

const getCompletion = (actID) => {
  console.log(`Getting completion`, act);
  if(act && act.length > 0) {
    axios.get(`/act/${user.id}/${act[0].id}`).then((response) => {
      setCompletion(response.data);
    }).catch((error) => {
      console.log(`Error in Get ${error}`)
      alert('Act may not have been completed yet.');
    })
  }

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

const favoriteAct = (e, actID, act) => {
  console.log(`Favoriting act ${actID}`)
  axios.post(`/act/favorite/`, {
    actID: actID,
    userID: user.id,
  }).then((response) => {
    alert(`Added (${act.act}) to Favorites`, act)
  }).catch((error) => {
    console.log(`Error in favoriteAct ${error}`);
    alert('Something went wrong.');
  })
}


  return (
    <div className="container" id={act.id} >
      <h2>Welcome, {user.username}!</h2>
      {/* <div>-{JSON.stringify(completion)}-</div> */}
      {act.map(act => (
      <Grid item xs={12} md={4}>
        <Card style={{backgroundColor: getBackgroundDecoration(act.id)}} 
        sx={{ minWidth: 200 }}>
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
            {
              completion && completion.length > 0 ? (
                <Button
                style={{textDecorationLine: getButtonDecoration(act.id)}}
                variant="outlined"
                color="error"
                disabled
                onClick={(e) => completeAct(e, act.id)}
                > Completed! 
                </Button>
              ) : (
                <Button
                style={{textDecorationLine: getButtonDecoration(act.id)}}
                variant="outlined"
                color="error"
                onClick={(e) => completeAct(e, act.id)}
                > Complete 
                </Button>
              )
            }
            
            <Button
            variant="outlined"
            color="error"
            onClick={(e) => favoriteAct(e, act.id, act)}
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

import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography, typography } from '@mui/material';
import Grid from '@mui/material/Grid';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <Grid item xs={12} md={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
            variant="h5"
            >
              Random Act of Kindness
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

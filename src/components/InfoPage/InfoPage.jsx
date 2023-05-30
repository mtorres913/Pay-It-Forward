import React from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import Act from './Act';
import axios from 'axios';


function InfoPage() {
  const acts = useSelector((store => store.acts));
  const dispatch = useDispatch();
  const [newAct, setNewAct] = useState('');

  useEffect(() => {
    const action = { type: 'GET_ACTS' }
    dispatch(action);
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    axios.post('/acts', {
      act: newAct,
    }).then((response) => {
      setNewAct('');
      const action = { type: 'GET_ACTS' }
      dispatch(action);
    }).catch((error) => {
      console.log(`Error in Post ${error}`)
      alert('Something went wrong.');
    })
  }
  
  return (
    <Container>
      <p> Acts of Kindness </p>
      <p> Add a new act here: </p>
      <form className="form" onSubmit={submitForm}>
        Act:<input type="text"
        value={newAct}
        onChange={(e) => setNewAct(e.target.value)} />
        <input type="submit" />
      </form>
      <br />
      <Grid container spacing={3}>
        {
          acts.map((act) => (
            <Act
            key={act.id}
            act={act}
            />
          ))
        }
      </Grid>

      <footer>“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” - Maya Angelou </footer>
    </Container>

  );
}

export default InfoPage;

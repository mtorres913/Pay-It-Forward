import React from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import Act from './Act';

function InfoPage() {
  const acts = useSelector((store => store.acts));
  const dispatch = useDispatch();

  useEffect(() => {
    const action = { type: 'GET_ACTS' }
    dispatch(action);
  }, []);

  return (
    <Container>
      <p> Acts of Kindness </p>
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

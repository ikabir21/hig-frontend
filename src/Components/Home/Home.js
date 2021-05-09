import { Container, Grid, Grow } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Posts from '../Posts/Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

function Home() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid container alignItems="stretch">
          <Posts />
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home;

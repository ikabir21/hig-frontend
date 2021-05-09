import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from '../Post/Post';
import useStyles from '../styles';

const Top3 = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const classes = useStyles();

  return (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Post post={{profile_link: "", name: "Kabir Signh", location: "Rating: 123"}} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Post post={{profile_link: "", name: "Kabir Signh", location: "Rating: 123"}} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Post post={{profile_link: "", name: "Kabir Signh", location: "Rating: 123"}} />
          </Grid>
      </Grid>
  )
}

export default Top3;

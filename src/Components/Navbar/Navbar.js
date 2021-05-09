import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import hacker from "../../images/hacker.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT'});

    history.push("/");
    setUser(null);
  }

  useEffect(() => {
    // const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">HIG</Typography>
        <img className={classes.image} src={hacker} alt="icon" height="60"/>
      </div>
      <Toolbar className={classes.toolbar}>
        {user? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.familyName} src={user.result.imageUrl}>
              {user.result.givenName.charAt(0)}{user.result.familyName.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.givenName}&nbsp;{user.result.familyName}</Typography>
            <Button color="secondary" variant="contained" className={classes.logout} onClick={logout}>Logout</Button>
          </div>
        ) : (
          <>
          <Button component={Link} to="/admin/login" variant="contained" color="secondary" style={{marginRight: "20px"}}>Admin</Button>
          <Button component={Link} to="/auth" variant="contained" color="primary">User</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

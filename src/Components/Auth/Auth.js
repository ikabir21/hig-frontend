import React, { useState } from 'react';
import { Avatar, Container, Grid, Paper, Typography, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn, signUp } from "../../actions/auth";

import Input from "./Input";
import useStyles from './styles';
import Icon from "./Icon";

const initialState = { givenName: '', familyName: '', email: '', password: '', confirmPassword: ''};

const Auth = ({ isAdmin }) => {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState(initialState);

  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSignup){
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history, isAdmin));
    }
  }
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  const switchMode = () => {
    setIsSignup(prevIsSignup => !prevIsSignup);
    setShowPassword(false);
  }

  const handleShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure = () => {
    console.log("Google Sign In was unsuccesfull. Try again later");
  }  

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name="givenName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="familyName" label="Last Name" handleChange={handleChange} half />
                </>
              )
            }
            <Input name="email" type="email" label="Email Address" handleChange={handleChange} />
            <Input name="password" type={showPassword ? "password" : "text"} label="Password" handleChange={handleChange} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/>}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignup ? "Sign Up" : "Sign In"}</Button>
          {isAdmin && (<><Typography variant="h6" align="center"> <em>email:</em> <code>info@hig.com</code></Typography>
          <Typography variant="h6" align="center"> <em>pass:</em><code>1234567</code></Typography></>)}
          {!isAdmin && (
            <GoogleLogin 
            clientId="744185697633-eev8h47ild8h5cutc2efdkhj7a445u8l.apps.googleusercontent.com" 
            render={(renderProps) => (
              <Button 
                className={classes.googleButton} color="primary" 
                fullWidth 
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled} 
                startIcon={<Icon />} 
                variant="contained"
              >
                Google Sign In
              </Button>
            )}  
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          )}
          {!isAdmin && (
            <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? "Alread have an account? Sign In" : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
          )}
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;

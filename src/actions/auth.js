import { AUTH } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const signIn = (formData, history, isAdmin) => async (dispatch) => {
  try {
    if(isAdmin) {
      const { data } = await api.adminSignIn(formData);
      dispatch({ type: AUTH, data });
      history.push("/posts/create");
    } else {
      const { data } = await api.signIn(formData);
      dispatch({ type: AUTH, data });
      history.push("/");
    }
  } catch (err) {
    console.log(err)
  }
}

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (err) {
    console.log(err)
  }
}

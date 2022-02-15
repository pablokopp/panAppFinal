import {URL_AUTH} from '../../utils/data/database';

export const SIGNUP = 'SIGNUP';

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_AUTH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    const data = await response.json();

    dispatch({
      type: SIGNUP,
      token: data.idToken,
      userId: data.localId,
    });
  };
};

export const SIGNIN = 'SIGNIN';

export const signin = {};

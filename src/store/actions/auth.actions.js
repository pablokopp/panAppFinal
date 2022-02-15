import {URL_AUTH_SIGNIN, URL_AUTH_SIGNUP} from '../../utils/data/database';

export const SIGNUP = 'SIGNUP';

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_AUTH_SIGNUP, {
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

export const signin = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_AUTH_SIGNIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const error = data.error || 'Algo salio mal';

      throw new Error(error);
    }

    dispatch({
      type: SIGNIN,
      token: data.idToken,
      userId: data.localId,
    });
  };
};

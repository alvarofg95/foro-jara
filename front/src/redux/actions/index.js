let cookiesService = null;

const loginUser = (nick, email, token) => {
  const encondedTokenString = btoa(token);
  const minutes = 2;
  let cookieExpirartionTime = new Date();
  cookieExpirartionTime.setTime(cookieExpirartionTime.getTime() + 1000 * 60 * minutes);

  try {
    cookiesService.set('tokenInfo', encondedTokenString, {
      path: '/',
      expires: cookieExpirartionTime
    });
  } catch (e) {
    console.log(e);
  }
  return (dispatch, getState) => {
    dispatch({
      type: 'LOGIN',
      payload: {
        nick,
        email,
        token
      }
    });
  };
};

const loadAppInfo = cookies => {
  return dispatch => {
    if (!cookiesService) {
      cookiesService = cookies;
    }
    const encondedTokenString = cookiesService.get('tokenInfo');
    console.log({ encondedTokenString });
    let decodedCookieString = '';
    let appInfo = {};
    if (encondedTokenString) {
      decodedCookieString = atob(encondedTokenString);
      console.log({ decodedCookieString });
      appInfo = { ...appInfo, token: decodedCookieString };
    }
    dispatch({ type: 'LOADED_APP_INFO', payload: appInfo });
  };
};

export default { loginUser, loadAppInfo };

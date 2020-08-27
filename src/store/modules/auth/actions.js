
export function signIn(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function ableAcess(bool) {
    return {
        type: '@auth/ABLEACESS',
        payload: bool
    };
}


export function signFailure(error) {
    return {
      type: '@alert/SIGN_FAILURE',
      payload: {messageAlert: error, colorMessageAlert: 2}
    };
  }

export function signOutRequest() {
  return {
    type: '@auth/SIGN_OUT_REQUEST',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}


export function clearAlert() {
    return {
        type: '@alert/CLEAR_ALERT',
    };
}

export function changeLoadingOn() {
  return {
    type: '@loading/LOADING_ON',
    payload: true
  };
}

export function changeLoadingOff() {
  return {
    type: '@loading/LOADING_OFF',
    payload: false
  };
}


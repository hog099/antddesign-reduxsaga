export function getUserDataRequest(payload) {
  return {
    type: '@user/GET_USERDATA_REQUEST',
    id: payload.id,
    token: payload.token
  };
}

export function getUserDataSuccess(data) {
    return {
      type: '@user/GET_USERDATA_SUCCESS',
      payload: data,
    };
  }


export function verifyUserNameRequest(id_user, token, username) {
    return {
      type: '@user/VERIFY_USERNAME_REQUEST',
      payload: {id_user, token, username},
    };
  }

  export function verifyUserNameSuccess(message) {
      return {
          type: '@user/VERIFY_USERNAME_SUCCESS',
          payload: message,
        };
    }

    export function verifyUserNameFailure(message) {
        return {
            type: '@user/VERIFY_USERNAME_FAILURE',
            payload: message,
        };
    }


    export function clearVerifyUserName() {
        return {
            type: '@user/CLEAR_VERIFY_USERNAME',
        };
  }



  export function userUpdateRequest(userLogged, token, data) {
      return {
        type: '@user/USER_UPDATE_REQUEST',
        payload: {token},
        userLogged,
        values: data,
      };
    }

    export function userUpdateSuccess(user) {
        return {
          type: '@auth/UPDATED_USER_SUCCESS',
          payload: { user },
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


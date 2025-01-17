import produce from 'immer';

const initialState = {
  city: '',
  userData: [],
  userNameAvaliable: false,
  MessageCheckUsername: '',
};

export default (state = initialState, { type, payload }) => {
  return produce(state, draft => {
      switch (type) {
      case '@user/SEARCH_CITY_SUCCESS': {
        draft.city = payload;
        break;
      }
      case '@user/REMOVE_CITY_STATE': {
        draft.city = '';
        break;
      }
      case '@user/GET_USERDATA_SUCCESS': {
        draft.userData = '';
        break;
      }
      case '@user/VERIFY_USERNAME_SUCCESS': {
        draft.userNameAvaliable = true;
        draft.MessageCheckUsername = payload;
        break;
      }
      case '@user/VERIFY_USERNAME_FAILURE': {
        draft.userNameAvaliable = false;
        draft.MessageCheckUsername = payload;
        break;
      }
      case '@user/CLEAR_VERIFY_USERNAME': {
        // draft.userNameAvaliable = false;
        draft.MessageCheckUsername = '';
        break;
      }
      default:
    }
  });
};

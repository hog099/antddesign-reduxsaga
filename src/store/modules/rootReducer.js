import { combineReducers } from 'redux';

import config from './config/reducer';
import alert from './components/alert/reducer';
import loading from './components/loading/reducer';
import auth from './auth/reducer';
import user from './user/reducer';

export default combineReducers({
    alert,
    config,
    loading,
    user,
    auth,
});

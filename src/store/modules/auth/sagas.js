import { call, put, all, takeLatest, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { notification } from 'antd';

import history from '../../../services/history';
import api from '../../../services/api';
import { changeLoadingOff, signInRequest, signInSuccess, ableAcess, signFailure, signOut, setCityToAcess } from './actions';

import { clearAlert } from '../components/alert/actions';


export function* signIn({ payload }) {
    const { email, password } = payload;
    
    try {
        const response = yield call(api.post, 'sessions', { email, password });
        // console.log('session', response.data)
        const { token, user } = response.data;
        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(changeLoadingOff());
        yield put(signInSuccess(token, user));
        
        history.push('/dashboard');
        // toast.success('Bem Vindo, Você está logado');        
            notification.open({
              message: 'Login',
              description: 'Bem Vindo, Você está logado.',
            });

    } catch (error) {
        yield put(changeLoadingOff());
        if (error.response && error.response.status == 500) {
            yield put(signFailure('Erro ao realizar Login, Sem Conexão com Servidor'));
            // toast.error('Erro ao realizar Login, Sem Conexão com Servidor');
            notification.error({
                message: 'Login',
                description: 'Erro ao realizar Login, Sem Conexão com Servidor.',
              });
        }else if (error.response) {
            yield put(signFailure(error.response.data.error));
            // toast.error(error.response.data.error);
            notification.error({
                message: 'Login',
                description: error.response.data.error,
              });
        }else {
            yield put(signFailure('Erro ao realizar Login, Sem Conexão com Servidor'));
            // toast.error('Erro ao realizar Login, Sem Conexão com Servidor');
            notification.error({
                message: 'Login',
                description: 'Erro ao realizar Login, Sem Conexão com Servidor.',
              });
        }
        yield delay(3000)
        yield put(clearAlert());
    }
}

export function* signOutRequest() {
    yield put(signOut());
    yield put(ableAcess(false));
    history.push('/');
}


export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }

}


export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_OUT_REQUEST', signOutRequest),
]);

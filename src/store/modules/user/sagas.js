import { call, put, all, takeLatest, delay } from 'redux-saga/effects';
// import { delay } from 'redux-saga/utils';

import api from '../../../services/api';
import { getUserDataSuccess, verifyUserNameSuccess, verifyUserNameFailure, clearVerifyUserName, userUpdateSuccess } from './actions';
import { changeLoadingOff } from '../components/loading/actions';
import { alertMessage, clearAlert } from '../components/alert/actions';


export function* userDataRequest({ id, token }) {
    const headers = {
        authorization: `Bearer ${token}`
    }
    try {
        const response = yield call(api.get, `users/${id}`, headers);
        // console.log('response', response.data)
        // yield put(changeLoadingOff());
        yield put(getUserDataSuccess(response.data));

    } catch (error) {
        // yield put(changeLoadingOff());
        if (error.response.data.error) {
            // yield put(alertMessage(error.response.data.error, 3));
            // delay(500, yield put(clearAlert()));
        } else {
            // yield put(alertMessage('Erro ao captar Dados de perfil do usuário', 3));
            // delay(500, yield put(clearAlert()));

        }

    }
}

export function* verifyUserNameRequest({ payload }) {
    const headers = {
        authorization: `Bearer ${payload.token}`
    }
    const values = {
        id_user: payload.id_user,
        username: payload.username,
    }

    try {
        const response = yield call(api.post, 'avaliableUserName', values, headers);
        yield put(verifyUserNameSuccess(response.data.message));
        // console.log('retorno', response.data.message)
        yield delay(3000)
        yield put(clearVerifyUserName());

    } catch (error) {
        if (error.response.data.error) {
            yield put(verifyUserNameFailure(error.response.data.error));
            yield delay(3000)
            yield put(clearVerifyUserName());
            // console.log('error', error.response.data.error);
        } else {
            // console.log('error');
            yield delay(3000)
            yield put(clearVerifyUserName());
        }
    }

}

export function* userUpdateRequest({ payload, values, userLogged }) {
    const headers = {
        // accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${payload.token}`,
    }


    try {
        const response = yield call(api.put, `users/${userLogged.id}`, values, headers);
        // console.log('cheguei aqui')
        // console.log('retorno', response)
        // console.log('retorno', response.data)
        yield put(userUpdateSuccess(response.data));
        yield put(changeLoadingOff());
        yield put(alertMessage('Atualizado Com Sucesso', 1));
        yield delay(3000)
        yield put(clearAlert());

    } catch (error) {
        if (error.response.data.error) {
            yield put(alertMessage(error.response.data.error, 3));
            yield put(changeLoadingOff());
            yield delay(3000)
            yield put(clearAlert());
            // console.log('error01', error.response.data.error);
        } else {
            yield put(alertMessage('Falha na Operação', 3));
            yield put(changeLoadingOff());
            yield delay(3000)
            yield put(clearAlert());
            // console.log('error03');
        }
    }

}



export default all([
    takeLatest('@user/GET_USERDATA_REQUEST', userDataRequest),
    takeLatest('@user/VERIFY_USERNAME_REQUEST', verifyUserNameRequest),
    takeLatest('@user/USER_UPDATE_REQUEST', userUpdateRequest),
]);

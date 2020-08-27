import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../../services/api';
import { searchCategorySuccess } from './actions'
import { changeLoadingOff } from '../../components/loading/actions';



export function* GetSearchCategory({ payload }) {
    // console.log('payload', payload)
    const values = {
        parbusca: payload
    };
    try {
        if (payload != undefined) {
            const response = yield call(api.post, 'categoriesparbusca', values);
            // console.log('Categorias da api',response.data)
            yield put(searchCategorySuccess(response.data));

        } else {
            const response = yield call(api.get, 'categories');
            yield put(searchCategorySuccess(response.data));
        }

    } catch (error) {
        // console.log('res erro', error.response.data.error)

    }

}



export default all([
    takeLatest('@home/SEARCH_CATEGORY_LIST_REQUEST', GetSearchCategory),
]);

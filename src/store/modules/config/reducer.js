import produce from 'immer';

const initialState = {
    env_prod: true,
};

export default (state = initialState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case '@config/CHANGE_API_URL_ENV': {
                draft.env_prod = !draft.env_prod;
                break;
            }
            default:
        }
    });
};

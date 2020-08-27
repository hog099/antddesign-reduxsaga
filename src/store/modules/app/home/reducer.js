import produce from 'immer';

const initialState = {
    categoryList: [],
};

export default (state = initialState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case '@home/SEARCH_CATEGORY_LIST_FETCHED': {
                draft.categoryList = payload;
                break;
            }
            default:
        }
    });
};

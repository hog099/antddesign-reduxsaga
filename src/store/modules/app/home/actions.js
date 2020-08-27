export function getCategoriesSearch(parbusca) {
    return {
        type: '@home/SEARCH_CATEGORY_LIST_REQUEST',
        payload: parbusca,
    };
}

export function getSponsSearch(parbusca, city) {
    return {
        type: '@home/SEARCH_SPON_LIST_REQUEST',
        payload: {parbusca, city},
    };
}


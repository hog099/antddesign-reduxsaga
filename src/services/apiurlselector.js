import axios from 'axios';

// import {env} from '../helpers/envstatus';


const api = (url) => {
    console.log('API', url);
    
    return (
        axios.create({
            baseURL: url,
        })
    );
};

export default api;




import React from 'react';
import { useSelector } from 'react-redux';

import Api from './apiurlselector';

export default function ApiUrlSelector() {
    const env_prod = useSelector(state => state.config.env_prod);

    switch (env_prod) {
        case false:
            // return 'http://192.168.0.80:3333';
            return <Api url="http://192.168.0.80:3333" />

        case true:
            // return 'http://192.168.0.80:3333';
            return <Api url="http://192.168.0.80:3333" />

        default:
            // return 'http://192.168.0.80:3333';
            return <Api url="http://192.168.0.80:3333" />
    }

}

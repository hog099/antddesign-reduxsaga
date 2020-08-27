import React from 'react';
import { useSelector } from 'react-redux';



export const env = () => {
    const env_prod = useSelector(state => state.config.env_prod);

    switch (env_prod) {
        case false:
            return 'http://achadosapp-com.umbler.net';
        case true:
            return 'http://18.217.195.216:3333';
        default:
            return 'http://achadosapp-com.umbler.net';
    }

}
// src/actions/index.js

// baseURL: 'http://localhost:3030' local development

import axios from 'axios';

export const client = axios.create({
    baseURL: 'https://morning-cove-87124.herokuapp.com',
    headers: {
        'Content-Type': 'application/json'
    }
})
export const API_URL = isInProd() ? hostname() + '/api' : hostname() + '/api';
export const WEBSITE_URL = isInProd() ? hostname() : 'http://localhost:3000';


function hostname() {
    return HOST;
}

function isInProd() {
    return PROD;
}


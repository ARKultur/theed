export const API_URL = 'https://arktest.creative-rift.com/api';
export const WEBSITE_URL = isInProd() ? hostname() : 'http://localhost:3000';


function hostname() {
    return HOST;
}

function isInProd() {
    return PROD;
}


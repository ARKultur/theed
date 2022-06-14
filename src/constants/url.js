export const API_URL = is_in_prod() ? hostname() + '/api' : 'http://localhost:4000/api';
export const WEBSITE_URL = is_in_prod() ?  hostname() : 'http://localhost:3000';

function hostname() {
    return process.env.HOSTNAME || 'https://arkultur.creative-rift.com';
}

function is_in_prod() {
    return (!process.env.NODE_ENV || process.env.NODE_ENV === 'production');
}


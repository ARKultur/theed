export const API_URL = isInProd() ? hostname() + '/api' : 'http://localhost:4000/api';
export const WEBSITE_URL = isInProd() ? hostname() : 'http://localhost:3000';

function hostname() {
  return process.env.HOSTNAME || 'https://arkultur.creative-rift.com';
}

function isInProd() {
  return (!process.env.NODE_ENV || process.env.NODE_ENV === 'production');
}


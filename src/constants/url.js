export const API_URL = is_in_dev() ? 'http://localhost:4000/api' : hostname() + '/api';
export const WEBSITE_URL = is_in_dev() ? 'http://localhost:3000' : hostname();

function hostname() {
  return process.env.HOSTNAME || 'https://arkultur.creative-rift.com';
}

function is_in_dev() {
  return (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
}


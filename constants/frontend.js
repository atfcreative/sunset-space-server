const FRONTEND_DEV_URLS = [ 'http://localhost:3000' ];

const FRONTEND_PROD_URLS = [ 
    'https://sunset-space.herokuapp.com',
    'https://sunset-space-server.herokuapp.com/',
 ];

 module.exports = FRONTEND_PROD_URLS;

//  module.exports = process.env.NODE_ENV === 'production'
//  ? FRONTEND_PROD_URLS
//  : FRONTEND_DEV_URLS;

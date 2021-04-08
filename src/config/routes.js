const express = require('express');

const middlewares =  require('../config/middlewares');
const authenticationController = require('../controllers/authentication-controller');

const enterpriseController = require(`../controllers/enterprise-controller`);

const apiVersion = process.env.API_VERSION || 'v1.0';
module.exports = function routerConfig(server){

    const router = express.Router()
    server.use(`/api/${apiVersion}`, router);

    // Sign Routes
    router.post(`/users/auth/sign_in`, authenticationController.signIn);

    // Acces control routes
    router.use(`/enterprises`, middlewares.checkAuth);

    router.get(`/enterprises`, enterpriseController.list);
    router.get(`/enterprises/:id`, enterpriseController.findByEnterpriseId);


}
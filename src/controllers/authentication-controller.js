const authenticationService = require('../services/authentication-service')

module.exports = {
    signIn: (req, res) => {
        const { email, password } = req.body;

        return authenticationService.signIn(email, password).then(response => {
            res.setHeader('access-token', response['access-token']);
            res.setHeader('client', response.client);
            res.setHeader('uid', response.uid);
            return res.json(response)
        }).catch(error => {
            if(error && error.statusCode){
                res.status(error.statusCode).json(error)
            } else {
                res.json(error);
            }
        })
    }
}
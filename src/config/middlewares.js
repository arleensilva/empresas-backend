const jwt = require('jsonwebtoken');

module.exports = {
    checkAuth: (req, res, next) => {
        const accesstoken = req.header('access-token');
        const client = req.header('client');
        const uid = req.header('uid');

        if(!accesstoken || !client || !uid) {
            throw new Error;
        }

        try{
            const accesstokenVerify = jwt.verify(accesstoken, process.env.ACCESSTOKEN_SECRET);
            const clientVerify = jwt.verify(client, process.env.CLIENT_SECRET);
            req.accesstoken = accesstokenVerify;
            req.client = clientVerify;
            req.uid = uid;

            if (accesstokenVerify.email !== uid) {
                throw new Error;
            }
        
            next();
        }catch(error){
            res.status(401).json({
                message: 'Unauthorized access!',
                statusCode: 401,
                additionalInfo: error
            })
        }
    }
}
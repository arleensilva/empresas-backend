const jwt = require('jsonwebtoken');

const userRepository = require('../repositories/user-repository');

module.exports = {
    signIn: (email, password) => {
        return userRepository.findUserByEmail(email).then(responseUser => {
            if (!responseUser) {
                throw new Error('User not found');
            }

            if (responseUser.password !== password){
                throw new Error('Invalid password');
            }
            const authUser = {
                'access-token': jwt.sign(
                    {email : responseUser.email}, 
                    process.env.ACCESSTOKEN_SECRET, 
                    { expiresIn: '6 hours' }
                ),
                'client': jwt.sign(
                    {id: responseUser.id}, 
                    process.env.CLIENT_SECRET,
                    { expiresIn: '6 hours' }
                ),
                'uid': email
            }

            return  authUser;
        }).catch(error => {
            throw(error);
        });
    }
};

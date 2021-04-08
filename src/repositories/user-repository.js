const userModel =  require('../models/user');


module.exports = {
    findUserByEmail: (email) => {
        return userModel.findOne({ email }).catch(error  => {
            throw error;
        })
    }
}
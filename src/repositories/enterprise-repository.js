const enterpriseModel =  require('../models/enterprise-model');


module.exports = {
    list: (enterpriseType, name) => {
        const filter = {
            $and: [{}]
        };

        if (enterpriseType) {
            filter.$and.push({
                type: enterpriseType
            });
        }

        if (name) {
            filter.$and.push({
                name: {
                    $regex: new RegExp(name),
                    $options: 'i'
                }
            });
        }
        return enterpriseModel.find(filter).catch(error  => {
            throw error;
        })
    },
    findByEnterpriseId: id => {
        return enterpriseModel.findOne({id}).catch(error => {
            throw error;
        })
    }
}
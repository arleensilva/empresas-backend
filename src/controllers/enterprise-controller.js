const enterpriseService = require('../services/enterprise-service');

module.exports = {
    list: (req, res) => {
        const enterpriseTypes = req.query.enterprise_types;
        const { name } = req.query;
        
        return enterpriseService.list(enterpriseTypes, name).then(response => {
            return res.json(response);
        }).catch(error => {
            if(error && error.statusCode){
                res.status(error.statusCode).json(error)
            } else {
                res.json(error);
            }
        })
    },
    findByEnterpriseId: (req, res) => {
        const { id } = req.params;

        return enterpriseService.findByEnterpriseId(id).then(response => {
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
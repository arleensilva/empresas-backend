const enterpriseRepository = require('../repositories/enterprise-repository');

module.exports = {
    list: (enterpriseTypes, name) => {
        return enterpriseRepository.list(enterpriseTypes, name);
    },
    findByEnterpriseId: id => {
        return enterpriseRepository.findByEnterpriseId(id);
    }
};


module.exports = (sequelize, DataType) => {
    const Project = sequelize.define('project', {
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                isIn: [['PedeFacil', 'Portal', 'Ecommerce', 'Allowance', 'SodexoMobile', 'PartnersBridge', 'BUS', 'Gateway']]
            }
        },
        platform: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                isIn: [['API', 'WEB', 'Mobile']]
            }
        }
    },
    {
        indexes: [
            {
                unique: true,
                fields: ['name', 'platform']
            }
        ]
    });
    return Project;
}

    
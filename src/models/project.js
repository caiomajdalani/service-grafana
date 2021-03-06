
module.exports = (sequelize, DataType) => {
    const Project = sequelize.define('project', {
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                isIn: [['PedeFacil', 'Portal', 'Ecommerce', 'Allowance', 'SodexoMobile', 'PartnersBridge', 'BUS', 'Gateway', 'Test']]
            }
        },
        platform: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                isIn: [['API', 'WEB', 'Mobile', 'Test']]
            }
        },
        active: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: true
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

    
module.exports = (sequelize, DataType) => {
    const Report = sequelize.define('report', {
        projectId: {
            type: DataType.INTEGER,
            allowNull: false,
            references: {
                model: 'projects',
                key: 'id',
            }
        },
        executionDate: {
            type: DataType.DATE,
            allowNull: false
        },
        features: {
            type: DataType.INTEGER,
            allowNull: false
        },
        featuresFailed: {
            type: DataType.INTEGER,
            allowNull: true
        },
        scenarios: {
            type: DataType.INTEGER,
            allowNull: false
        },
        scenariosFailed: {
            type: DataType.INTEGER,
            allowNull: true
        }
    },
    {
        indexes: [
            {
                unique: true,
                fields: ['project_id', 'execution_date']
            }
        ]
    });
    return Report;
}

    
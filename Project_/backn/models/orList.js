const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const OR = sequelize.define('OrList', {
        date: {
            type: DataTypes.STRING(100)
        },
        customer: {
            type: DataTypes.INTEGER(10),
        },
        total: {
            type: DataTypes.INTEGER(10),
        },
        opcab: {
            type: DataTypes.INTEGER(10),
        },
        cabg: {
            type: DataTypes.INTEGER(10),
        },
        cabgvalve: {
            type: DataTypes.INTEGER(10),
        },
        valve: {
            type: DataTypes.INTEGER(10),
        },
        tevar: {
            type: DataTypes.INTEGER(10),
        },
        tavr: {
            type: DataTypes.INTEGER(10),
        },
        vats: {
            type: DataTypes.INTEGER(10),
        },
        pericardial: {
            type: DataTypes.INTEGER(10),
        },
        reOperation: {
            type: DataTypes.INTEGER(10),
        },
        other: {
            type: DataTypes.STRING(1000),
        },
        amount: {
            type: DataTypes.INTEGER(10),
        },
    }, {
        tableName: 'or',
        timestamps: true,
    });

    OR.associate = models => {
        OR.belongsTo(models.User, { 
            foreignKey: 'recorder', 
            targetKey: 'username' });
    };

    return OR;
}
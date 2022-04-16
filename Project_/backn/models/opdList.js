const { Sequelize } = require(".");
// const User = require('./User')

module.exports = (sequelize, DataTypes) => {
    const OPD = sequelize.define('OpdList', {
        date: {
            type: DataTypes.STRING(100)
        },
        customer: {
            type: DataTypes.INTEGER(10),
            defaultValue: 0
        },
        total: {
            type: DataTypes.INTEGER(10),
            defaultValue: 0
        },
        visit: {
            type: DataTypes.INTEGER(10),
        },
        tele: {
            type: DataTypes.INTEGER(10),
        },
        admit: {
            type: DataTypes.INTEGER(10),
        },
        other: {
            type: DataTypes.STRING(1000),
        },
        amount: {
            type: DataTypes.INTEGER(10),
        },
        // recorder: {
        //     type: DataTypes.STRING(20),
        //     references: {
        //         model: User, 
        //         key: 'userId',
        //      }
        // }
    }, {
        tableName: 'opd',
        timestamps: true,
    });

    OPD.associate = models => {
        OPD.belongsTo(models.User, { 
            foreignKey: 'recorder', 
            targetKey: 'username' });
    };

    return OPD;
}
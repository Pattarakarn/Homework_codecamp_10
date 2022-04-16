const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('CathList', {
        date: {
            type: DataTypes.STRING(100)
        },
        customer: {
            type: DataTypes.INTEGER(10),
        },
        total: {
            type: DataTypes.INTEGER(10),
        },
        cardiac: {
            type: DataTypes.INTEGER(10),
            defaultValue: 0 
        },
        ep: {
            type: DataTypes.INTEGER(10),
            defaultValue: 0
        },
        neuro: {
            type: DataTypes.INTEGER(10),
            defaultValue: 0 
        },
        vascular: {
            type: DataTypes.INTEGER(10),
            defaultValue: 0
        },
        special: {
            type: DataTypes.INTEGER(10),
            defaultValue: 0
        },
        detailCardiac: {
            type: DataTypes.STRING(1000),
        },
        detailEp: {
            type: DataTypes.STRING(1000),
        },
        detailNeuro: {
            type: DataTypes.STRING(1000),
        },
        detailVascular: {
            type: DataTypes.STRING(1000),
        },
        detailSpecial: {
            type: DataTypes.STRING(1000),
        },

    }, {
        tableName: 'cath',
        timestamps: true,
    });

    model.associate = models => {
        model.belongsTo(models.User, { 
            foreignKey: 'recorder', 
            targetKey: 'username' });
    };

    return model;
}
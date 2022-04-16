const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Non = sequelize.define('NonList', {
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
        ekg: {
            type: DataTypes.INTEGER(10)
        },
        abi: {
            type: DataTypes.INTEGER(10)
        },
        holter: {
            type: DataTypes.INTEGER(10)
        },
        event: {
            type: DataTypes.INTEGER(10)
        },
        abp: {
            type: DataTypes.INTEGER(10)
        },
        echo: {
            type: DataTypes.INTEGER(10)
        },
        echo3D: {
            type: DataTypes.INTEGER(10)
        },
        tee: {
            type: DataTypes.INTEGER(10)
        },
        est: {
            type: DataTypes.INTEGER(10)
        },
        stress: {
            type: DataTypes.INTEGER(10)
        },
        dobu: {
            type: DataTypes.INTEGER(10)
        },
        bicycle: {
            type: DataTypes.INTEGER(10)
        },
        tilt: {
            type: DataTypes.INTEGER(10)
        },
        other: {
            type: DataTypes.STRING(1000)
        },
        amount: {
            type: DataTypes.INTEGER(10)
        },
        ////// default เป็น integer //////
        // user_code: {
        //     // type: Sequelize.INTEGER,
        //     model: 'users', // <<< Note, its table's name, not object name
        //     key: 'code' // <<< Note, its a column name
        // }
    }, {
        tableName: 'non',
        timestamps: true,
    });

    Non.associate = models => {
        Non.belongsTo(models.User, { 
            foreignKey: 'recorder', 
            targetKey: 'username' });
        // model.belongsToMany(models.User, {through: User, foreignKey: 'code'});
    };

    return  Non;
}
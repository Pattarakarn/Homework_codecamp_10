module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        username:{
            type: DataTypes.STRING(20),
            unique: true
        },
        password:{
            type: DataTypes.STRING(120)
        },
        code:{
            type: DataTypes.STRING(12),
        }
    });

    User.associate = models => {
        // model.hasMany(models.Summary, {
        //     foreignKey : 'code',
        //     // sourceKey: 'user_code'
        // });
        // model.belongsToMany(models.nonList, {through: User, foreignKey: 'code'});
        User.hasMany(models.NonList, {foreignKey: 'recorder', sourceKey: 'username'});
        User.hasMany(models.CathList, {foreignKey: 'recorder' , sourceKey: 'username'});
        User.hasMany(models.OrList, { foreignKey: 'recorder', sourceKey: 'username'});
        User.hasMany(models.OpdList, { foreignKey: 'recorder', sourceKey: 'username'});
        // User.hasMany(models.OpdList, { foreignKey: 'username'});
    };

    return User;
}
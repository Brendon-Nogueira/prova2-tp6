module.exports = (sequelize, DataTypes) => {
    const Customers = sequelize.define('customers', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       email: DataTypes.STRING,
       name: DataTypes.STRING

    }, {
        timestamps: false,
        freezeTableName: true
    })

    return Customers
}
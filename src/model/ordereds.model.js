module.exports = (sequelize, DataTypes) => {
    const Ordereds = sequelize.define('ordereds', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       customerId: DataTypes.INTEGER,
       productId: DataTypes.INTEGER,
       order_date: DataTypes.TIMESTAMP

    }, {
        timestamps: false,
        freezeTableName: true
    })

    return Ordereds
}
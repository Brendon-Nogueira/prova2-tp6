module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('products', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    
       name: DataTypes.STRING,
       value: DataTypes.INTEGER

    }, {
        timestamps: false,
        freezeTableName: true
    })

    return Customers
}
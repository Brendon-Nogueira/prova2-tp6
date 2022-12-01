const { products } = require('../model/index')
const { where } = require('sequelize')


const create = async data =>{
    await products.create(data)
}

const remove = async productId =>{
    return await products.destroy({
        where :{
            id: productId
        }
    })
}

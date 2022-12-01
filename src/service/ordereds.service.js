const { ordereds } = require('../model/index')
const { where } = require('sequelize')


const create = async data =>{
    await ordereds.create(data)
}

const remove = async orderedsId =>{
    return await ordereds.destroy({
        where :{
            id: orderedsId
        }
    })
}

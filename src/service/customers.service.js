const { customers } = require('../model/index')
const { where } = require('sequelize')


const create = async data =>{
    await customers.create(data)
}

const remove = async customerId =>{
    return await customers.destroy({
        where :{
            id: customerId
        }
    })
}


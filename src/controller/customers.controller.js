const {STRING} = require('sequelize')
const service = require('../service/customers.service')

const create = async (req,res) =>{
    await service.create(req.body)
    res.status(200).send('Create customer sucessfully')
}

const remove = async(req,res) =>{
    const customerId = req.params.id
    await service.remove(customerId)
    res.status(204).send('No content')
}

module.exports = {
    create,
    remove
}
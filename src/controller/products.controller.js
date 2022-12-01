const {STRING} = require('sequelize')
const service = require('../service/products.service')

const create = async (req,res) =>{
    await service.create(req.body)
    res.status(200).send('Create product sucessfully')
}

const remove = async(req,res) =>{
    const productId = req.params.id
    await service.remove(productId)
    res.status(204).send('No content')
}

module.exports = {
    create,
    remove
}
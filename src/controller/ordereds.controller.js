const {STRING} = require('sequelize')
const service = require('../service/ordereds.service')

const create = async (req,res) =>{
    await service.create(req.body)
    res.status(200).send('Create ordereds sucessfully')
}

const remove = async(req,res) =>{
    const orderedsId = req.params.id
    await service.remove(orderedsId)
    res.status(204).send('No content')
}

module.exports = {
    create,
    remove
}
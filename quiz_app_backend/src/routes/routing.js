const express = require('express')
const service = require('../model/service')
const routing = express.Router()

routing.get('/checkUser', async (req, res)=>{
    console.log('Hello User!', req.query.userEmail)
    try{
        let getUser = await service.verifyUser(req.query.userEmail)
        res.send(getUser)
    }
    catch(err){
        res.send(err)
    }
})

// routing.post('/inputUserDetails', async (req, res)=>{
//     console.log(req.body)
//     try{
//         let inputUser = await service.insertUserDetails(req.body)
//         res.send(inputUser)
//     }
//     catch(err){
//         res.send(err)
//     }
// })

routing.post('/inputUserDetails', async (req, res)=>{
    console.log(req.body)
    try{
        let inputUser = await service.insertUserDetails(req.body)
        res.send(inputUser)
    }
    catch(err){
        res.send(err)
    }
})

module.exports = routing
const connection = require('../utilities/connection')

let service = {}

service.verifyUser = async(email) => {
    let userEmail = await connection.userModel.findOne({Email:email})
    if(userEmail)
        console.log(userEmail)
    else
        console.log('No particular email found!')
    return userEmail
}

service.insertUserDetails = async(userDetails) => {
    let user = await connection.userModel.create(userDetails)
    console.log(user)
    return user
}

module.exports = service
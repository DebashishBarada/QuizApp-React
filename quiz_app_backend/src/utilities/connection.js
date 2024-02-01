const mongoose = require('mongoose')
let db = mongoose.connect('mongodb://localhost:27017/QuizApp')

if(db)
    console.log('Database connected!')

let userDetailsSchema = {
    Email:{
        type:String
    },
    Password:{
        type:String
    },
    First_Name:{
        type:String
    },
    Last_Name:{
        type:String
    },
    Organization:{
        type:String
    },
    Date_of_Birth:{
        type:String
    }
}

let userSchema = mongoose.Schema(userDetailsSchema, {collection:'Users'})

let connection = {}

connection.userModel = mongoose.model('Users', userSchema)

module.exports = connection
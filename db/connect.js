const mongoose = require('mongoose')



    // .then(() => console.log('Connected to the DB....'))
    // .catch(err => console.log(err))


const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB
 

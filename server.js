
const express = require('express');
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const dotenv = require('dotenv');
const app=express();
const notFound = require('./middleware/not-found')

dotenv.config({path: '.env'})

//routes


app.use(express.static('./public'))
app.use(express.json());

app.use('/api/v1/tasks', tasks)

app.use(notFound)

// async(req,res) => {
//     try {
//          tasks
        
//     } catch (error) {

//         console.log(`Server error: ${error}`);
//         res.status(500).json({ msg: error.message });
        
//     }
// } 

const PORT = 3000

const start = async () =>{
    try {
        connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`server is listening on port ${PORT}`));


        
    } catch (error) {

        console.log(`server error: ${error}`)
        
    }
}

start()


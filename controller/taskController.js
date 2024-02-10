const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
// @desc Get all transactions
// @route GET /api/v1/tasks
// @access Public
const getAllTasks = asyncWrapper( async (req,res) => {

            
        const task = await Task.find({});

        res.status(201).json( {task} )

 
    }

    
)

// @desc Create transaction
// @route POST /api/v1/tasks
// @access Public
const createTask = async (req,res) => {

    try {

        const task = await Task.create(req.body)

        res.status(201).json({ task })
        
    } catch (error) {

        res.status(500).json({msg:error})
        
    }

    
} 


// @desc Get transaction
// @route GET /api/v1/tasks/:id
// @access Public
const getTask = async (req,res) => {

    try {

        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}` })
        } 

        res.status(201).json({ task })

        //const task = await Task.findById(req.params.id)
        
        
    } catch (error) {
        res.status(500).json({msg:error})
        
    }

}

// @desc Update transaction
// @route PATCH /api/v1/tasks/:id
// @access Public
const updateTask = async (req,res) => {   
    
    try {

        const {id:taskID} = req.params

        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true,
            runValidators:true,
        })

        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}` })
        } 

        res.status(201).json({ task })
        
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

// @desc Delete transaction
// @route DELETE /api/v1/tasks/:id
// @access Public
const deleteTask = async (req,res) => {

    try {

        const {id:taskID} = req.params

        const task = await Task.findOneAndDelete({_id:taskID})

        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}` })
        } 
        
        res.status(201).json({ task })
        
        
    } catch (error) {

        res.status(500).json({msg:error})

    }

    
}


module.exports = {
    getAllTasks, 
    createTask, 
    updateTask, 
    deleteTask, 
    getTask, 
}




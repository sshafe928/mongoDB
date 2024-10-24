const express = require('express');
const router = express.Router();

const { 
    getAllTasks,
    createTask, 
    getTask, 
    updateTask, 
    deleteTask,
    } = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).delete(deleteTask).patch(updateTask)
// router.route('/api/v1/tasks/:id')    


module.exports = router;
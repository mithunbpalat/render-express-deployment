const express = require('express');
const router = express.Router();
const todolistController = require('../controllers/todolistController');


// Get all todolist
router.get('/', todolistController.getTodosList);

// Get all trash todolist
router.get('/trash', todolistController.getTrashTodosList);

// Get all taskdone todolist
router.get('/taskdone', todolistController.getDoneTodosList);

// Get all important todolist
router.get('/important', todolistController.getImportantTodosList);

// Add a new todolist
router.post('/', todolistController.addTodolist);

// Get todolist by ID
router.get('/:id', todolistController.getTodolistById);

// Update a todolist by ID
router.put('/:id', todolistController.updateTodolist);


// Delete a todolist by ID
router.delete('/:id', todolistController.deleteTodolist);

//Mark a Todo as Important
router.put('/markimportant/:id', todolistController.updateImportanttodolist);

//Mark Todo as Task done
router.put('/taskdone/:id', todolistController.updateTaskdonetodolist);

//Mark Todo as Not Task done 
router.put('/taskdoneremove/:id', todolistController.updateTaskdoneRemovetodolist);

// Revive a todolist by ID
router.put('/revive/:id', todolistController.reviveTodolist);

// Permanent Delete a todolist by ID
router.delete('/permanentdelete/:id', todolistController.permanentdeleteTodolist);

// Create priority for a todolist by ID
router.put('/priority/:id', todolistController.priorityTodolist);

module.exports = router;
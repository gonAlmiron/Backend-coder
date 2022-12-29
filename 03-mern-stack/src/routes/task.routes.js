import { Router } from "express";

const router = Router();

// Task Model
import { TaskModel } from '../models/task'

// GET all Tasks
router.get('/', async (req, res) => {
  try {
  const tasks = await TaskModel.find();
  res.json(tasks);
  }
  catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    })

  }
});

router.get('/:id', async (req, res) => {
  try{
    const { id } = req.params
    const tasks = await TaskModel.findById(id);
    res.json(tasks);
   }
  catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    })}
});



router.post('/', async (req, res) => {

  try {
    const { title, description } = req.body;
  
    const newTask = await TaskModel.create({
      title,
      description
    })
    res.json({data: newTask});
  }

  catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack
    
    })
  }
});

// UPDATE a new task
// router.put('/:id', async (req, res) => {
//   const { title, description } = req.body;
//   const newTask = {title, description};
//   await Task.findByIdAndUpdate(req.params.id, newTask);
//   res.json({status: 'Task Updated'});
// });

// router.delete('/:id', async (req, res) => {
//   await Task.findByIdAndRemove(req.params.id);
//   res.json({status: 'Task Deleted'});
// });

export default router
import express from 'express'
import Workout from '../modals/Workout.js'
import createWorkout from '../controllers/createWorkout.js'
import getWorkout from '../controllers/getWorkout.js'
import getSingleWorkout from '../controllers/getSingleWorkout.js'
import deleteWorkout from '../controllers/deleteWorkout.js'
import updateWorkout from '../controllers/updateWorkout.js'
const router = express.Router()

// GET all workouts
router.get('/', getWorkout)

// // GET a single workout
router.get('/:id', getSingleWorkout)

// POST a new workout
router.post('/', createWorkout)


router.delete('/:id', deleteWorkout)

// // UPDATE a workout
router.patch('/:id', updateWorkout)
export default router
import Workout from "../modals/Workout.js";


const createWorkout = async (req , res) => {
    const {title , load , reps} = req.body


    try {
        const workout = await Workout.create({title , load, reps})
        res.status(200).json(workout)
        

    }catch(err){
        console.log(err)
    }
    

}
export default createWorkout


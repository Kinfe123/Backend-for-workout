import Workout from "../modals/Workout.js";


const getWorkout = async (req , res) => {
    

    try {
        const workout = await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(workout)
        

    }catch(err){
        console.log(err)
    }
    

}
export default getWorkout


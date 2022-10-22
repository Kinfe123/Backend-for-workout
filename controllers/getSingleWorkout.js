import Workout from "../modals/Workout.js";

import mongoose from "mongoose";
const getSingleWorkout = async (req , res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
      }

    try {
        const workout = await Workout.findById(id)
        
        if (!workout) {
            return res.status(404).json({error: 'No such workout'})
          }
                
        res.status(200).json(workout)
        

    }catch(err){
        console.log(err)
    }
    

}
export default getSingleWorkout


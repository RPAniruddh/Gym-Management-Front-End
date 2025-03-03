import React from 'react'
import Excercise from './Excercise'
import AddWorkout from './AddWorkout'
import AllWorkouts from './AllWorkouts'
import { ExerciseWorkout } from './ExerciseWorkout'
import NavBar from './NavBar'
import Footer from './Footer'

const Fitness = () => {
    return (
        <>
            <NavBar />
            <Excercise />
            <AddWorkout />
            <AllWorkouts />
            <ExerciseWorkout />
            <Footer />
        </>
    )
}


export default Fitness;
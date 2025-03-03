import React from "react";
import axiosInstance from "../AxiosInstance";

const AddWorkout = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const workoutName = event.target.workoutName.value;
        const memberId = localStorage.getItem('memberId') ? parseInt(localStorage.getItem('memberId'), 10) : null;
        if (!memberId) {
            alert('Member ID is not set in localStorage');
            return;
        }

        try {
            const response = await axiosInstance.post('/fitness/workouts', null, {
                params: {
                    memberId,
                    workoutName
                }
            });
            console.log(response.data);
            alert('Workout added successfully!');
        } catch (error) {
            console.error('There was an error adding the workout!', error);
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="workoutName" className="form-label">Add the workout you want to do</label>
                    <input type="text" className="form-control" id="workoutName" name="workoutName" placeholder="Enter workout name" />
                </div>
                <button type="submit" className="btn btn-primary">Add Workout</button>
            </form>
        </div>
    );
};

export default AddWorkout;

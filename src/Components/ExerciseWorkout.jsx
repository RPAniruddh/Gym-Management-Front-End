import React from 'react';
import axiosInstance from '../AxiosInstance';

export const ExerciseWorkout = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const workoutId = formData.get('workoutId');
    const exerciseId = formData.get('exerciseId');
    const sets = formData.get('sets');
    const reps = formData.get('reps');
    const weight = formData.get('weight');
    const url = `/fitness/workouts/${workoutId}/exercises?exerciseId=${exerciseId}&sets=${sets}&reps=${reps}&weight=${weight}`;

    try {
      const response = await axiosInstance.post(url, null);

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="container mt-4" style={{ border: '1px solid black', padding: '10px' }}>
      <div>ExerciseWorkout</div>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="workoutId" className="form-label">Workout ID:</label>
            <input type="text" className="form-control" id="workoutId" name="workoutId" />
          </div>
          <div className="col-md-6">
            <label htmlFor="exerciseId" className="form-label">Exercise ID:</label>
            <input type="text" className="form-control" id="exerciseId" name="exerciseId" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="sets" className="form-label">Sets:</label>
            <input type="number" className="form-control" id="sets" name="sets" />
          </div>
          <div className="col-md-4">
            <label htmlFor="reps" className="form-label">Reps:</label>
            <input type="number" className="form-control" id="reps" name="reps" />
          </div>
          <div className="col-md-4">
            <label htmlFor="weight" className="form-label">Weight:</label>
            <input type="number" className="form-control" id="weight" name="weight" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

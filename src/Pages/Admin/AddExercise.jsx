import {React, useState} from 'react'
import axios from 'axios';

const AddExercise = () => {
    const [exercise, setExercise] = useState({
        name: '',
        category: '',
        muscleGroup: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExercise({
            ...exercise,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('jwtToken');
        try {
            await axios.post('http://localhost:1235/fitness/exercises', exercise, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
            });
            alert('Exercise added successfully');
            window.history.back();
        } catch (error) {
            console.error('There was an error adding the exercise!', error);
        }
    };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center my-4">
                <div className="col">
                    <div className="card mb-4">
                        <div className="card-header py-3">
                            <h5 className="mb-0">Add Exercise</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Exercise Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={exercise.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="category">Category</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="category"
                                        name="category"
                                        value={exercise.category}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="muscleGroup">Muscle Group</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="muscleGroup"
                                        name="muscleGroup"
                                        value={exercise.muscleGroup}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary mt-5">Add Exercise</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddExercise;
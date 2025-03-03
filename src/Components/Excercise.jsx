import React, { useEffect, useState } from 'react';
import axiosInstance from '../AxiosInstance';

const Excercise = () => {
    const [exercises, setExercises] = useState([]);
    const role = localStorage.getItem('role');


    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await axiosInstance.get('/fitness/exercises');
                setExercises(response.data);
            } catch (error) {
                console.error('There was an error fetching the exercises!', error);
            }
        };

        fetchExercises();
    }, []);

    if (exercises.length === 0) {
        return (
            <div className="container mt-5" style={{ border: '2px solid red', textAlign: 'center', padding: '20px' }}>
                <h4>No Exercises are present</h4>
            </div>
        );
    }

    const handleDelete = async (id) => {
        try {
            await axiosInstance.delete(`/fitness/exercises/${id}`);
            setExercises(exercises.filter(exercise => exercise.id !== id));
        } catch (error) {
            console.error('There was an error deleting the exercise!', error);
        }
    }

    return (
        <div className="container mt-5">
            <h3>Exercise Available</h3>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Muscle Group</th>
                        <th>Created At</th>
                        {role === 'Admin' && (
                            <th colSpan="2">Action</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {exercises.map(exercise => (
                        <tr key={exercise.id}>
                            <td>{exercise.id}</td>
                            <td>{exercise.name}</td>
                            <td>{exercise.category}</td>
                            <td>{exercise.muscleGroup}</td>
                            <td>{new Date(exercise.createdAt).toLocaleString()}</td>
                            {role === 'Admin' && (
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(exercise.id)}>Delete</button>
                            </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default Excercise;

import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../AxiosInstance';

const AllWorkouts = () => {
    const [workouts, setWorkouts] = useState([]);
    const navigate = useNavigate();
    const memberId = localStorage.getItem('memberId');

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await axiosInstance.get(`/fitness/workouts/member/${memberId}`);
                setWorkouts(response.data);
            } catch (error) {
                console.error('There was an error fetching the workouts!', error);
            }
        };

        fetchWorkouts();
    }, [memberId]);

    if (workouts.length === 0) {
        return (
            <div className="container mt-5" style={{ border: '2px solid red', textAlign: 'center', padding: '20px' }}>
                <h4>No Workouts are present</h4>
            </div>
        );
    }

    const handleDelete = async (memberId, id) => {
        try {
            await axiosInstance.delete(`/fitness/workouts/member/${memberId}`);
            setWorkouts(workouts.filter(workout => workout.id !== id));
        } catch (error) {
            console.error('There was an error deleting the workout!', error);
        }
    }

    const handleShowWorkout = (id) => {
        navigate(`/userWorkout?id=${id}`);
    }

    return (
        <div className="container mt-5">
            <h3>All Member Workouts</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Workout Name</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {workouts.map(workout => (
                        <tr key={workout.id}>
                            <td>{workout.id}</td>
                            <td>{workout.workoutName}</td>
                            <td>
                                <button className="btn btn-sm btn-success" onClick={() => handleShowWorkout(workout.id)}>Show Details</button>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(workout.memberId, workout.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllWorkouts;

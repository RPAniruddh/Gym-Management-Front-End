import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../AxiosInstance'; // Adjust the path as necessary

const ShowMembers = () => {
    const [members, setMembers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axiosInstance.get('/members');
                setMembers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchMembers();
    }, []);

    if (members.length === 0) {
        return (
            <div className="container mt-5" style={{ border: '2px solid red', textAlign: 'center', padding: '20px' }}>
                <h4>No Members are present at this time</h4>
            </div>
        )
    }

    const handleProfile = (memberId) => {
        localStorage.setItem('memberId', memberId);
        navigate(`/user`);
    };

    const handleDelete = async (memberId) => {
        try {
            await axiosInstance.delete(`/members/delete/${memberId}`);
            setMembers(members.filter(member => member.id !== memberId));
        } catch (error) {
            console.error('Error deleting member:', error);
        }
    };

    return (
        <div style={{ marginTop: '30px' }}>
            <h3>Gym Members</h3>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                        <tr key={member.id}>
                            <td>{member.id}</td>
                            <td>{member.firstName}</td>
                            <td>{member.lastName}</td>
                            <td>{member.phoneNumber}</td>
                            <td>{member.email}</td>
                            <td>{new Date(member.dateOfBirth).toLocaleDateString()}</td>
                            <td>
                                <button className="btn btn-sm btn-success" onClick={() => handleProfile(member.id)}>Show Profile</button>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(member.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowMembers;

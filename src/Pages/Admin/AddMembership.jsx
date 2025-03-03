import React, { useState } from 'react';
import axios from 'axios';

export const AddMembership = ({ memberId }) => {
    const [error, setError] = useState(null);
    const addMembership = () => {
        const selectedType = document.getElementById('membershipType').value;
        const token = localStorage.getItem('jwtToken');
        axios.post(`http://localhost:1235/memberships/${memberId}`, null, {
            params: { type: selectedType },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                alert("Membership added successfully!");
                console.log("Membership ID:", response.data.id);
                window.location.reload();
                setError(null);
            })
            .catch(error => {
                setError("There was an error adding the membership!");
                console.error(error);
            });
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <select id="membershipType" style={{ marginRight: '10px' }}>
                <option value="BASIC">BASIC</option>
                <option value="PREMIUM">PREMIUM</option>
            </select>
            <button className="btn btn-sm btn-primary" onClick={addMembership} style={{ padding: '5px 10px', fontSize: '14px' }}>Add Membership</button>
        </div>
    )
}

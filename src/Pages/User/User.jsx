import React from 'react'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import MemberInfo from '../../Components/memberInfo'
import MembershipInfo from '../../Components/MembershipInfo/MembershipInfo'

export default function User() {
    return (
        <>
            <NavBar />
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <MemberInfo />
                <MembershipInfo />
            </div>
            <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }}>
                <p>Want to go to Fitness Center?</p>
                <button onClick={() => window.location.href = '/fitnessCenter'}>Go</button>
            </div>
            <Footer />
        </>
    )
}

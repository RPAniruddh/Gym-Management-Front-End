import React from 'react'
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar/NavBar';


const About = () => {
    return (
        <>
            <NavBar />
            <div className="container my-3 py-3">
                <h1 className="text-center display-4">About Us</h1>
                <hr className="my-4" />
                <div style={{ textAlign: 'center' }}>
                    <p className="lead">
                        <strong>Welcome to <span className="text-primary">Apex Fitness</span>!</strong><br /><br />
                        At <span className="text-primary">Apex Fitness</span>, we are committed to helping you achieve your fitness goals in a supportive and motivating environment. Our mission is to empower you to live a healthier, happier life.<br /><br />
                        <strong>Who We Are:</strong> We are a team of fitness enthusiasts dedicated to providing top-notch facilities and expert trainers to guide you on your fitness journey.<br /><br />
                        <strong>What We Offer:</strong><br />
                        <ul style={{ listStylePosition: 'inside', display: 'inline-block', textAlign: 'left' }}>
                            <li><strong>Personal Training:</strong> Customized workout plans and one-on-one sessions with our certified trainers.</li>
                            <li><strong>Nutrition Counseling:</strong> Personalized nutrition plans to complement your fitness routine.</li>
                            <li><strong>State-of-the-Art Equipment:</strong> Access to the latest fitness equipment and technology.</li>
                            <li><strong>Wellness Programs:</strong> Holistic programs to improve your overall well-being.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};


export default About
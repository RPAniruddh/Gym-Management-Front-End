import React from 'react'

const Hero = () => {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-6 fw-bold text-body-emphasis">Your journey to a healthier life starts here.</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Join us at FitLife Gym and transform your fitness routine with our state-of-the-art facilities, expert trainers, and supportive community. Whether you're a beginner or a seasoned athlete, we have everything you need to achieve your fitness goals.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
          </div>
        </div>
        <div className="overflow-hidden" style={{maxHeight: "30vh"}}>
          <div className="container px-5">
            <img src="../../public/Assets/Home.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Aesthetic gym image" width="1080" height="920" loading="lazy" />
          </div>
        </div>
      </div>
  )
}

export default Hero
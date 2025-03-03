import React from 'react'

export const Features = () => {
    return (
        <div className="container px-2 py-3" id="custom-cards">
            <h2 className="pb-2 border-bottom">Why Choose Apex Fitness?</h2>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-3 py-3">
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "../../public/Assets/Equipment.png" }}>
                        <div className="d-flex flex-column h-100 p-3 pb-2 text-white text-shadow-1">
                            <h3 className="pt-3 mt-3 mb-3 display-6 lh-1 fw-bold">Modern Equipment</h3>
                            <p className="mb-3">Our gym is equipped with the latest and most advanced fitness machines to help you achieve your workout goals efficiently and effectively.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}>
                        <div className="d-flex flex-column h-100 p-3 pb-2 text-white text-shadow-1">
                            <h3 className="pt-3 mt-3 mb-3 display-6 lh-1 fw-bold">Flexible Memberships</h3>
                            <p className="mb-3">Choose from a variety of membership plans that fit your lifestyle and schedule, making it easy to stay committed to your fitness journey.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}>
                        <div className="d-flex flex-column h-100 p-3 pb-2 text-white text-shadow-1">
                            <h3 className="pt-3 mt-3 mb-3 display-6 lh-1 fw-bold">Community Support</h3>
                            <p className="mb-3">Join a supportive and motivating community that encourages you to reach your fitness goals and celebrates your achievements.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

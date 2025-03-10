import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer';
import { toast } from 'react-toastify';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      ...formData,
      roles: 'User',
    };

    console.log(JSON.stringify(data));

    try {
      const response = await axios.post('http://localhost:9194/auth/new', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        const result = await response.json();
        console.log('Success:', result);
      } else {
        console.error('Error: Response is not JSON');
      }
      const message = await response.text();
      alert(message);

      if (data.roles === 'User') {
        localStorage.setItem('email', data.email);
        toast.success("You have been registered !!");
        navigate('/signIn');
      } else {
        navigate('/signIn');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Join Our Gym</h1>
            <p className="col-lg-10 fs-4">Whether you're starting out or leveling up, we're here to inspire and guide you. Join us today and become the best version of yourself!</p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingName"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="floatingName">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="floatingEmail">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      roles: formData.get('role'),
    };

    console.log(JSON.stringify(data));

    try {
      const response = await fetch('http://localhost:9194/auth/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
        navigate('/signIn');
      } else {
        navigate('/signIn');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
          <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingName" name="name" placeholder="John Doe" />
              <label htmlFor="floatingName">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingEmail" name="email" placeholder="name@example.com" />
              <label htmlFor="floatingEmail">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <select className="form-control" id="floatingSelect" name="role" aria-label="Role">
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
              <label htmlFor="floatingSelect">Role</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="text-primary">Get Educated</h1>
            <p className="text-secondary">Welcome to our website!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src="https://example.com/your-image.jpg" alt="Example" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="text-info">Services</h2>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle-fill text-success"></i> Monthly courses</li>
              <li><i className="bi bi-check-circle-fill text-success"></i> Yearly Subscriptions</li>
              <li><i className="bi bi-check-circle-fill text-success"></i> Tutorials</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
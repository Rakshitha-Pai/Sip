import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-primary">About</h1>

      <div className="row">
        <div className="col-md-6">
          <h3 className="text-info">Our Mission</h3>
          <p>
            Our mission is to provide high-quality education accessible to everyone, 
            empowering individuals to achieve their full potential and pursue their dreams. 
            We strive to deliver innovative and engaging learning experiences that foster 
            intellectual growth, critical thinking, and lifelong learning skills.
          </p>
        </div>

        <div className="col-md-6">
          <h3 className="text-info">Our Vision</h3>
          <p>
            Our vision is to create a world where education knows no boundaries. 
            We envision a future where anyone, regardless of their background or geographical location,
            can access education at their convenience, unlocking endless opportunities for personal 
            and professional growth. We aim to be a global leader in online education, continuously 
            pushing the boundaries of learning innovation and making education accessible to all.
          </p>
        </div>
      </div>

      {/* <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        More Details
      </button>

      <div className="collapse mt-3" id="collapseDetails">
        <div className="card card-body bg-light">
          <h3 className="text-info">Additional Details</h3>
          <p>
            Our commitment to excellence drives us to collaborate with top educators and industry experts,
            ensuring that our courses are relevant, up-to-date, and aligned with the needs of learners and 
            the demands of the job market. We believe in fostering a supportive and inclusive learning 
            community, where students can connect, collaborate, and grow together. Through cutting-edge 
            technology and innovative pedagogy, we aim to transform education and empower learners to 
            thrive in a rapidly changing world.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
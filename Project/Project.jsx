
import React, { useState } from "react";
import "./Project.css";
import demoVideo from "../assets/Video/food-demo.mp4";

const Project = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="project-container">
      <h1 className="section-title">My Projects</h1>

      <div className="project-list">
        <div className="project-card">

          <h3 className="project-title">Food Ordering Web App</h3>

          <p className="project-description">
            A full-stack food ordering application with user authentication,
            shopping cart, order tracking, and Stripe payment integration.
          </p>

          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">Stripe</span>
          </div>

          <button
            className="project-btn"
            onClick={() => setShowVideo(!showVideo)}
          >
            {showVideo ? "Hide Demo" : "Watch Demo"}
          </button>

          {showVideo && (
            <video className="project-video" controls>
              <source src={demoVideo} type="video/mp4" />
            </video>
          )}

        </div>
      </div>
    </div>
  );
};

export default Project;
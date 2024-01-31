import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vedansh Gupta</h1>
        <p>Code enthusiast by day, code detective by night – solving digital mysteries with a touch of magic!</p>
      </header>

      <section className="Projects">
        <h2>Projects</h2>
        <div className="Project">
          <h3>Smart Document Scanner</h3>
          <p>A Mobile App developed for uploading documents directly to UIDAI portal</p>
        </div>
        <div className="Project">
          <h3>Project Manager</h3>
          <p>Project Management using Log Book is a ReactJS-based system facilitating efficient task tracking, team
collaboration, and progress monitoring with an intuitive, user-friendly interface for seamless project coordination.</p>
        </div>
        <div>
          <h3>Sports Analysis using Deep Learning and Annotation</h3>
          <p>By combining YOLOv8 tracking and CVAT annotation, the project facilitated in-depth sports analysis, delivering comprehensive statistics and visualizations to aid coaches, players, and enthusiasts in better understanding Badminton performance.</p>
        </div>
      </section>
      <section className="Contact">
        <h2>Contact</h2>
        <p>Email: vedansh2002.gupta@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/vedanshgupta/</p>
        <p>GitHub: https://github.com/guptavedansh2002</p>
      </section>
    </div>
  );
}

export default App;

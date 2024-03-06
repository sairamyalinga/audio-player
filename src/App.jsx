import React, { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import PlayerControls from "./components/PlayerControls"; // Import PlayerControls component

function App() {
  const [currentTime, setCurrentTime] = useState('00:00');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const handleTogglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const handleSpeedChange = () => {
    setPlaybackSpeed(prev=> prev >= 3? 1: prev+1);
  };
  return (
    <div className="main-body">
      <div className="row">
        <div className="d-flex justify-content-center align-items-start">
          <p className="text-center main-text">CAMB.AI</p>
        </div>
      </div>
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        {/* Render the PlayerControls component */}
        <PlayerControls
          currentTime={currentTime}
          isPlaying={isPlaying}
          playbackSpeed={playbackSpeed}
          onTogglePlayPause={handleTogglePlayPause}
          onSpeedChange={handleSpeedChange}
        />
      </div>
    </div>
  );
}

export default App;

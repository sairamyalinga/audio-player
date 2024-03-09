import { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import PlayerControls from "./components/PlayerControls"; 
import Timeline from './components/Timeline';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function App() {
  const [selectedInstruments, setSelectedInstruments] = useState([]);

  const handleInstrumentSelect = (instrument, instrumentSound) => {
    console.log("Handled", instrument)
    setSelectedInstruments(prevSelected => [...prevSelected, instrument]);
  };

  const [currentTime, setCurrentTime] = useState('00:00');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  // const [selectedInstrument, setSelectedInstrument] = useState(null);

  const handleTogglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const handleSpeedChange = () => {
    setPlaybackSpeed(prev=> prev >= 3? 1: prev+1);
  };

  // const handleInstrumentSelect = (instrument) => {
  //   setSelectedInstrument(instrument); 
  // };

  return (
    <div className="main-body">
      <div className="row">
        <div className="d-flex justify-content-center align-items-start">
          <p className="text-center main-text">Audio-Player</p>
        </div>
      </div>
      <div className="row">
        <Navbar onInstrumentSelect={handleInstrumentSelect} />
      </div>
      <div className="row">
        <PlayerControls
          currentTime={currentTime}
          isPlaying={isPlaying}
          playbackSpeed={playbackSpeed}
          onTogglePlayPause={handleTogglePlayPause}
          onSpeedChange={handleSpeedChange}
        />
      </div>

      <div className='row'>
        <Slider min={0} max={20} className="mx-4" reverse defaultValue={20} />
        <Timeline selectedInstruments={selectedInstruments} />
        
      </div>
    </div>
  );
}

export default App;

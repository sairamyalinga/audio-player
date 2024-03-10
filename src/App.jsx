import { useState, useEffect } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import PlayerControls from "./components/PlayerControls"; 
import Timeline from './components/Timeline';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

var timerFn;

function App() {
  const [selectedInstruments, setSelectedInstruments] = useState([]);

  useEffect(() => {
    const slider = document.getElementsByClassName("rc-slider-handle")
    const instrumentElementHeight = document.getElementById("instruments").clientHeight;
    console.log(instrumentElementHeight, slider[0].clientHeight)
    if(instrumentElementHeight > slider[0].clientHeight) {
      slider[0].style = `height: ${instrumentElementHeight}px !important; right: 100%; transform: translateX(50%);`;
    }
  }, [selectedInstruments])

  const handleInstrumentSelect = (instrument, instrumentSound) => {
    
    setSelectedInstruments(prevSelected => [...prevSelected, instrument]);
  };

  const [currentTime, setCurrentTime] = useState('00:00');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [handleValue, setHandleValue] = useState(30);

  // const [selectedInstrument, setSelectedInstrument] = useState(null);
  

  const handleTogglePlayPause = () => {
    console.log("hiuefas");
    console.log(isPlaying);
    let currState  = isPlaying;
    currState = !currState;
    setIsPlaying(currState);

    if (currState) {
      let value = 30;
      console.log("TimerId set")
      timerFn = setInterval(
        function () {
            value = value - 0.2
            if (value >= 0) {
              setHandleValue(value);
            } else {
              setIsPlaying(false);
              console.log("id:", timerFn)
              clearInterval(timerFn);
            }
        }, 200)
    } else {
      console.log("else")
      console.log(timerFn);
      clearInterval(timerFn);
    }

  };
  const handleSpeedChange = () => {
    setPlaybackSpeed(prev=> prev >= 3? 1: prev+1);
  };

  

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

      <div className='col col-11 mx-5'>
        <Slider min={0} max={30} className="" reverse defaultValue={30} value={handleValue} step={0.02} />
        <Timeline selectedInstruments={selectedInstruments} />
      </div>
    </div>
  );
}

export default App;

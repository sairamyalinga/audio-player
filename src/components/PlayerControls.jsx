import PropTypes from 'prop-types';
import {
    IoIosPlay,
    IoIosPause,
  } from 'react-icons/io';
  
function PlayerControls({ currentTime, isPlaying, playbackSpeed, onTogglePlayPause, onSpeedChange }) {
    const speed = playbackSpeed > 3? 1 :playbackSpeed
  return (
    <div className="d-flex justify-content-between align-items-center" style={{ padding: '30px', color:'white'}}>
      <div >Time: {currentTime}/30:00 </div>
        <button onClick={onTogglePlayPause}>
          {isPlaying ? <IoIosPause /> : <IoIosPlay />}
        </button>
      <div onClick={onSpeedChange}>Speed: {speed}x</div>
    </div>
  );
}

PlayerControls.propTypes = {
  currentTime: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  playbackSpeed: PropTypes.number.isRequired,
  onTogglePlayPause: PropTypes.func.isRequired,
  onSpeedChange: PropTypes.func.isRequired
};

export default PlayerControls;

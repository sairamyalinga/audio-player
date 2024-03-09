import PropTypes from 'prop-types';

function Instrument({ instrumentName, audioFile, onSelect }) {
  // Mapping between instrument names and corresponding class names
  const instrumentClasses = {
    Piano: 'btn-outline-primary',
    Drums: 'btn-outline-secondary',
    Guitar: 'btn-outline-success',
    Trumpet: 'btn-outline-warning'
  };

  const handleButtonClick = () => {
    audioFile();
    onSelect();
  };

  
  const instrumentClassName = instrumentClasses[instrumentName] || 'btn-outline-primary';

  return (
    <div className="col">
      <button type="button" onClick={handleButtonClick} className={`btn ${instrumentClassName} btn-lg text-center w-100`} style={{ padding: '10px' }}>
        {instrumentName}
      </button>
    </div>
  );
}

Instrument.propTypes = {
  instrumentName: PropTypes.string.isRequired,
  audioFile: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Instrument;
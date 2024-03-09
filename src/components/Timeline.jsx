import PropTypes from 'prop-types';

function Timeline({ selectedInstruments }) {
    const instrumentColors = {
        Piano: 'bg-primary text-white', 
        Drum: 'bg-secondary text-white', 
        Guitar: 'bg-success text-white', 
        Trumpet:'bg-warning text-dark' 
      };
      
    return (
        <div>
            {selectedInstruments.map((value, index) => {
                
                return (
                    <div key={index} className={`rounded text-center ${instrumentColors[value]} my-3 mx-3`}>{value}</div>
                );
            })}
        </div>
    );
}

Timeline.propTypes = {
    selectedInstruments: PropTypes.array.isRequired
}

export default Timeline;

import PropTypes from 'prop-types';
import getAudioDuration from './Audioduration';
function Timeline({ selectedInstruments }) {
    const instrumentColors = {
        Piano: 'bg-primary text-white', 
        Drum: 'bg-secondary text-white', 
        Guitar: 'bg-success text-white', 
        Trumpet:'bg-warning text-dark' 
      };
      const audioDurations = {
        Piano : getAudioDuration('/ragtime-logo-standard-version-116100.mp3'),
        Drums : getAudioDuration('/amen-break-no-copyright-remake-120bpm-25924.mp3'),
        Guitar : getAudioDuration('/acoustic-guitar-loop-f-91bpm-132687.mp3'),
        Trumpet : getAudioDuration('/trumpet-89281.mp3')
      }
      
    return (
        <div id="instruments">
            {selectedInstruments.map((value, index) => {
                const width = (audioDurations[value] / 30) * 100 + '%';
                console.log(audioDurations[value]);
                return (
                    <div key={index} className={`rounded text-center ${instrumentColors[value]} my-3 mx-3`}style={{ width }}>{value}</div>
                );
            })}
        </div>
    );
}

Timeline.propTypes = {
    selectedInstruments: PropTypes.array.isRequired
}

export default Timeline;

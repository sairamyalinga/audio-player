import PropTypes from 'prop-types';
import getAudioDuration from './Audioduration';
import { useState, useEffect } from 'react';
function Timeline({ selectedInstruments }) {
    const [instrumentDuration, setInstrumentDuration] = useState({
        Piano: 0.0, 
        Drums: 0.0,
        Guitar: 0.0,
        Trumpet: 0.0
    })
    // const [pianoDuration, setPianoDuration] = useState(0.0)
    // const [drumsDuration, setDrumsDuration] = useState(0.0)
    // const [guitarDuration, setGuitarDuration] = useState(0.0)
    // const [trumpetDuration, setTrumpetDuration] = useState(0.0)

    const instrumentColors = {
        Piano: 'bg-primary text-white', 
        Drum: 'bg-secondary text-white', 
        Guitar: 'bg-success text-white', 
        Trumpet:'bg-warning text-dark' 
      };
    //   const audioDurations = {
    //     Piano : getAudioDuration('/ragtime-logo-standard-version-116100.mp3'),
    //     Drums : getAudioDuration('/amen-break-no-copyright-remake-120bpm-25924.mp3'),
    //     Guitar : getAudioDuration('/acoustic-guitar-loop-f-91bpm-132687.mp3'),
    //     Trumpet : getAudioDuration('/trumpet-89281.mp3')
    //   }

    useEffect(() => {
        const updateDuration = async () => {
            const pianoDuration = await getAudioDuration('/ragtime-logo-standard-version-116100.mp3');
            const drumsDuration = await getAudioDuration('/amen-break-no-copyright-remake-120bpm-25924.mp3');
            const guitarDuration = await getAudioDuration('/acoustic-guitar-loop-f-91bpm-132687.mp3');
            const trumpetDuration = await getAudioDuration('/trumpet-89281.mp3');

            console.log(drumsDuration);

            setInstrumentDuration({
                Piano: pianoDuration, 
                Drum: drumsDuration,
                Guitar: guitarDuration,
                Trumpet: trumpetDuration
            });
        };

        updateDuration();
    }, []);
      
    return (
        <div id="instruments">
            {selectedInstruments.map((value, index) => {
                const width = (instrumentDuration[value] / 30) * 100 + '%';
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

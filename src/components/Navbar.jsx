import Instrument from "./Instruments";
import PropTypes from 'prop-types';

import useSound from 'use-sound';

import piano from "/ragtime-logo-standard-version-116100.mp3"
import drums from "/amen-break-no-copyright-remake-120bpm-25924.mp3"
import guitar from "/acoustic-guitar-loop-f-91bpm-132687.mp3"
import trumpet from "/trumpet-89281.mp3"

function Navbar({ onInstrumentSelect }) {
  const [drumSound]    = useSound(drums)
  const [pianoSound]   = useSound(piano)
  const [guitarSound]  = useSound(guitar)
  const [trumpetSound] = useSound(trumpet)
    return (<div className="row">
    <div className="col">
      <Instrument instrumentName="Piano" audioFile={pianoSound} onSelect={() => onInstrumentSelect("Piano", pianoSound)}/>
    </div>
    <div className="col">
      <Instrument instrumentName="Drums" audioFile={drumSound} onSelect={() => onInstrumentSelect("Drum", drumSound)}/>
    </div>
    <div className="col">
      <Instrument instrumentName="Guitar" audioFile={guitarSound} onSelect={() => onInstrumentSelect("Guitar")}/>
    </div>
    <div className="col">
      <Instrument instrumentName="Trumpet" audioFile={trumpetSound} onSelect={() => onInstrumentSelect("Trumpet")}/>
    </div>
  </div>)
}

Navbar.propTypes = {
  onInstrumentSelect: PropTypes.func.isRequired,
};

export default Navbar;
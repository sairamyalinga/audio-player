import Instrument from "./Instruments";

import useSound from 'use-sound';

import piano from "../../public/ragtime-logo-standard-version-116100.mp3"
import drums from "../../public/amen-break-no-copyright-remake-120bpm-25924.mp3"
import guitar from "../../public/acoustic-guitar-loop-f-91bpm-132687.mp3"
import trumpet from "../../public/trumpet-89281.mp3"

function Navbar() {
  const [drumSound]    = useSound(drums)
  const [pianoSound]   = useSound(piano)
  const [guitarSound]  = useSound(guitar)
  const [trumpetSound] = useSound(trumpet)
    return (<div className="row">
    <div className="col">
      <Instrument instrumentName="Piano" audioFile={pianoSound}/>
    </div>
    <div className="col">
      <Instrument instrumentName="Drums" audioFile={drumSound}/>
    </div>
    <div className="col">
      <Instrument instrumentName="Guitar" audioFile={guitarSound}/>
    </div>
    <div className="col">
      <Instrument instrumentName="Trumpet" audioFile={trumpetSound}/>
    </div>
  </div>)
}
export default Navbar;
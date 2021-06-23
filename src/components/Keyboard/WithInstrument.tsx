import { useEffect } from "react";
import { useInstrument } from "../../state/Instrument/Context";
import { useAudioContext } from "../AudioContextProvider/AudioContextProvider";
import { useSoundfont } from "../../adapters/Soundfont/useSoundfont";
import { useMount } from "../../utils/useMount";
import { Keyboard } from "./Keyboard";
import { SoundfontProvider } from "../../adapters/Soundfont/SoundfontProvider";
import { withInstrument } from "../../adapters/Soundfont/withInstrument";

const WrappedKeyboard = withInstrument(Keyboard)

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
 
  return (
    <WrappedKeyboard
      AudioContext={AudioContext}
      instrument={instrument}
    />
  );
};

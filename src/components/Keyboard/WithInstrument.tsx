import { useEffect } from "react";
import { useInstrument } from "../../state/Instrument/Context";
import { useAudioContext } from "../AudioContextProvider/AudioContextProvider";
import { useSoundfont } from "../../adapters/Soundfont/useSoundfont";
import { useMount } from "../../utils/useMount";
import { Keyboard } from "./Keyboard";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
	const {instrument} = useInstrument()
  const { loading, play, stop, load, current } = useSoundfont({ AudioContext });

  useEffect(() => {
		if(!loading && instrument !== current) load(instrument)
	},[current, instrument, load, loading])

  return <Keyboard loading={loading} play={play} stop={stop} />;
};

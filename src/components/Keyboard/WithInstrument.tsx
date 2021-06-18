import { useAudioContext } from "../AudioContextProvider/AudioContextProvider"
import { useSoundfont } from "../../adapters/Soundfont/useSoundfont"
import { useMount } from "../../utils/useMount"
import { Keyboard } from "./Keyboard";

export const KeyboardWithInstrument = () => {
	const AudioContext = useAudioContext()!
	
	const {loading, play, stop, load} = useSoundfont({AudioContext})
	
	// @ts-ignore
	useMount(load)
	
	return (
		<Keyboard
			loading={loading}
			play={play}
			stop={stop}
		/>
	)
}

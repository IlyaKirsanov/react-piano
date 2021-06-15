import {useState, useRef} from 'react';
import Soundfont, {InstrumentName, Player} from 'soundfont-player';
import {MidiValue} from '../../domain/notes';
import {Optional} from '../../domain/types';
import {
	AudioNodesRegistry,
	DEFAULT_INSTRUMENT
} from  '../../domain/sound';

type Settings = {
	AudioContext: AudioContextType;
}

interface Adapted {
	loading: boolean;
	current: Optional<InstrumentName>;
	
	load(instrument?: InstrumentName): Promise<void>;
	play(note: MidiValue): Promise<void>;
	stop(note: MidiValue): Promise<void>;
}

export function useSoundfont({AudioContext}: Settings): Adapted{
	let activeNode: AudioNodesRegistry = {};
	
	const [current, setCurrent] = useState<Optional<InstrumentName>>(null)
	const [loading, setLoading] = useState<Optional<Player>>(null);
	const [player, setPlayer] = useState<Optional<Player>>(null);
	const audio = useRef(new AudioContext())
	
	return {} as Adapted;
}
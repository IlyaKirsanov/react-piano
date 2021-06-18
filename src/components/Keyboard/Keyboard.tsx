import React from "react";
import { selectKey } from "../../domain/keyboard";
import { notes, MidiValue } from "../../domain/notes";
import { Key } from '../Key/Key';
import styles from "./Keyboard.module.css"

export type KeyboardProps = {
	loading: boolean;
	play: (note: MidiValue) => Promise<void>;
	stop: (note: MidiValue) => Promise<void>;
}

export const Keyboard: React.FC<KeyboardProps> = ({loading, play, stop}) => {
	return <div className={styles.keyboard}>
		{notes.map(({midi, type, index, octave}) => {
			const label = selectKey(octave, index)
			return (
				<Key
					key={midi}
					type={type}
					label={label}
					disabled={loading}
					onDown={()=>play(midi)}
					onUp={()=>stop(midi)}
				/>)
		})}
	</div>
}

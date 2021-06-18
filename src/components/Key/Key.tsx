import React from "react";
import clsx from "clsx";
import { NoteType } from '../../domain/notes';
import styles from './Key.module.css'

type PressCallback = () => void

type KeyProps = {
	type: NoteType,
	label: string,
	disabled?: boolean,
	onUp: PressCallback,
	onDown: PressCallback
}

export const Key: React.FC<KeyProps> = (props) => {
	const {type, label, onUp, onDown, ...rest} = props;
	
	return (
		<button
			className={clsx(styles.key, styles[type])}
			type="button"
			onMouseDown={onDown}
			onMouseUp={onUp}
			{...rest}
		>
			{label}
		</button>
	)
}

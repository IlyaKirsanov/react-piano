import React from "react";
import clsx from "clsx";
import { NoteType } from '../../domain/notes';
import styles from './Key.module.css'
import { usePressObserver } from '../PressObserver/usePressObserver'

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
	
	const pressed = usePressObserver({
		watchKey: label,
		onStartPress: onDown,
		onFinishPress: onUp
	})
	
	return (
		<button
			className={clsx(styles.key, styles[type], pressed && "is-pressed")}
			type="button"
			onMouseDown={onDown}
			onMouseUp={onUp}
			{...rest}
		>
			{label}
		</button>
	)
}

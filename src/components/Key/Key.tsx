import {FunctionComponent} from "react";
import clsx from "clsx";
import {NoteType} from '../../domain/notes';
import styles from './Key.module.css'

type KeyProps = {
	type: NoteType,
	label: string,
	disabled?: boolean
}

export const Key: FunctionComponent<KeyProps> = (props) => {
	const {type, label, ...rest} = props;
	
	return (
		<button
			className={clsx(styles.key, styles[type])}
			type="button"
			{...rest}
		>
			{label}
		</button>
	)
}
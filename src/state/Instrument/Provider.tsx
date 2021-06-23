import { FunctionComponent, useState } from "react";
import { DEFAULT_INSTRUMENT } from "../../domain/sound";
import { InstrumnetContext } from './Context';

export const InstrumnetContextProvider: FunctionComponent = ({
	children
}) => {
	const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT)

	return(
		<InstrumnetContext.Provider value={{instrument, setInstrument}}>
			{children}
		</InstrumnetContext.Provider>
	)
}
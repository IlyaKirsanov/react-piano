import { InstrumnetContextProvider } from "../../state/Instrument/Provider";
import { InstrumentSelector } from "../InstrumentSelector/InstrumentSelector";
import { KeyboardWithInstrument } from "../Keyboard/WithInstrument";

export const Playground = () =>{
	return (
		<InstrumnetContextProvider>
			<div className="playground">
				<KeyboardWithInstrument/>
				<InstrumentSelector/>
			</div>
		</InstrumnetContextProvider>
	)
}
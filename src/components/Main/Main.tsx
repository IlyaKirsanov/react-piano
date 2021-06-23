import React from "react";
import NoAudioMessage from "../NoAudioMessage/NoAudioMessage";
import {useAudioContext} from "../AudioContextProvider/AudioContextProvider";
import { Playground } from "../Playground/Playground";

export const Main = () =>{
	const AudioContext = useAudioContext();
	return !!AudioContext ? <Playground/> : <NoAudioMessage/>
}

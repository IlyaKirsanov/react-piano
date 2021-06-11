import React from "react";
import Keyboard from "../Keyboard/Keyboard";
import NoAudioMessage from "../NoAudioMessage/NoAudioMessage";
import {useAudioContext} from "../AudioContextProvider/AudioContextProvider";

export const Main = () =>{
	const AudioContext = useAudioContext();
	return !!AudioContext ? <Keyboard/> : <NoAudioMessage/>
}
import React from 'react';
import styles from './App.module.css';
import {Logo} from "./components/Logo/Logo";
import {Footer} from "./components/Footer/Footers";

function App() {
	return (
		<div className={styles.app}>
			<Logo/>
			<main className={styles.content}>
				Main content
			</main>
			<Footer/>
		</div>
	);
}

export default App;

import React, { useState, createContext } from 'react';

// import Button from './components/Button';
// import Input from './components/Input';

export default function App() {
	const meuContexto = createContext();
	meuContexto.displayName = 'MeuContexto';
	meuContexto.test = 1;
	const [count, setCount] = useState(0)

	return (
	<>
		{ meuContexto.displayName }
	</>
	)
}

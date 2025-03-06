import React from "react";

const MonsterStatblockContext = React.createContext();

function useState() {
	const [name, setName] = React.useState("");
	const [className, setClassName] = React.useState("");

	return { name, setName, className, setClassName };
}

export function useMonsterStatblockContext() {
	const state = useState();
	return state;
}

export function MonsterStatBlockContextProvider({ children }) {
	const state = useState();
	return (
		<MonsterStatblockContext.Provider value={state}>
			{children}
		</MonsterStatblockContext.Provider>
	);
}

import React from "react";

const MonsterStatblockContext = React.createContext();

/**
 * @typedef {Object} MonsterStatBlockState
 * @param {String} name Name of the monster
 * @param {String} size Size of the monster
 * @param {String} type Type of monster
 * @param {Number} level Monster Level
 * @param {String} category Category of monster
 * @param {Boolean} apex Is the monster an apex?
 * @param {Number} hp Hit points of the monster
 * @param {Number} mig Might of the monster
 * @param {Number} agl Agility of the monster
 * @param {Number} cha Charisma of the monster
 * @param {Number} int Intellect of the monster
 * @param {Boolean} migprof Proficient in Might?
 * @param {Boolean} aglprof Proficient in Agility?
 * @param {Boolean} chaprof Proficient in Charisma?
 * @param {Boolean} intprof Proficient in Intellect?
 * @param {Object.<string, string>} resistances Monster Resistances
 */

/**
 * useState hook for managing monster stat block state
 * @returns {MonsterStatBlockState}
 */
function useState() {
	//basics page
	const [name, setName] = React.useState("");
	const [size, setSize] = React.useState("Medium");
	const [type, setType] = React.useState("Humanoid");
	const [level, setLevel] = React.useState(0);
	const [category, setCategory] = React.useState("Minion");
	const [apex, setApex] = React.useState(false);
	//stats page
	const [hp, setHp] = React.useState("");
	const [mig, setMig] = React.useState(0);
	const [agl, setAgl] = React.useState(0);
	const [cha, setCha] = React.useState(0);
	const [int, setInt] = React.useState(0);
	const [migprof, setMigprof] = React.useState(false);
	const [aglprof, setAglprof] = React.useState(false);
	const [chaprof, setChaprof] = React.useState(false);
	const [intprof, setIntprof] = React.useState(false);
	const [AD, setAD] = React.useState(10);
	const [ADbonus, setADbonus] = React.useState(0);
	const [PD, setPD] = React.useState(10);
	const [PDbonus, setPDbonus] = React.useState(0);
	const [PDR, setPDR] = React.useState(0); //physical damage reduction
	const [EDR, setEDR] = React.useState(0); //elemental damage reduction
	const [MDR, setMDR] = React.useState(0); //mystical damage reduction
	//info page
	const [resistances, setResistances] = React.useState({
		bludgeoning: "0",
		piercing: "0",
		slashing: "0",
		fire: "0",
		cold: "0",
		lightning: "0",
		poison: "0",
		corrosion: "0",
		radiant: "0",
		umbral: "0",
		sonic: "0",
		psychic: "0",
	});
	const [vulnerabilities, setVulnerabilities] = React.useState({
		bludgeoning: "0",
		piercing: "0",
		slashing: "0",
		fire: "0",
		cold: "0",
		lightning: "0",
		poison: "0",
		corrosion: "0",
		radiant: "0",
		umbral: "0",
		sonic: "0",
		psychic: "0",
	});
	const [immunities, setImmunities] = React.useState([]); //array of strings
	const [conditionImmunities, setConditionImmunities] = React.useState([]); //array of strings
	const [skills, setSkills] = React.useState([]);
	/* Expected objects to be pushed: {
	skill: "",
	value: 0,
  }*/
	const [senses, setSenses] = React.useState([]);
	/* Expected objects to be pushed: {
	sense: "",
	value: 0,
  }*/
	const [languages, setLanguages] = React.useState([]); //array of strings
	const [otherSpeeds, setOtherSpeeds] = React.useState([]);
	/* Expected objects to be pushed: {
	type:"",
	distance:0,
  }*/
	//features page
	const [features, setFeatures] = React.useState([]);
	/* Expected objects to be pushed: {
 	feature:"",
	description:"", 
  }

  */

	return {
		name,
		setName,
		size,
		setSize,
		type,
		setType,
		level,
		setLevel,
		category,
		setCategory,
		apex,
		setApex,
		hp,
		setHp,
		mig,
		setMig,
		agl,
		setAgl,
		cha,
		setCha,
		int,
		setInt,
		migprof,
		setMigprof,
		aglprof,
		setAglprof,
		chaprof,
		setChaprof,
		intprof,
		setIntprof,
		resistances,
		setResistances,
	};
}

/**
 * Returns the state object
 * @returns {MonsterStatBlockState} Monster Stat Block State Object
 */
export function useMonsterStatblockContext() {
	const state = React.useContext(MonsterStatblockContext);
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

import React from "react";

const MonsterStatblockContext = React.createContext();

/**
 * @typedef {Object} MonsterStatBlockState
 * @property {String} name Name of the monster
 * @property {String} size Size of the monster
 * @property {String} type Type of monster
 * @property {Number} level Monster Level
 * @property {String} category Category of monster
 * @property {Boolean} apex Is the monster an apex?
 * @property {Number} hp Hit points of the monster
 * @property {Number} mig Might of the monster
 * @property {Number} agl Agility of the monster
 * @property {Number} cha Charisma of the monster
 * @property {Number} int Intellect of the monster
 * @property {Number} cm Combat Mastery of the monster (level/2 rounded up)
 * @property {Number} prime Prime of the monster (highest of mig, agl, cha, & int)
 * @property {Boolean} migprof Proficient in Might Saves?
 * @property {Boolean} aglprof Proficient in Agility Saves?
 * @property {Boolean} chaprof Proficient in Charisma Saves?
 * @property {Boolean} intprof Proficient in Intellect Saves?
 * @property {Number} ad Area Defense
 * @property {Number} adBonus Area Defense Bonus
 * @property {Number} pd Precision Defense
 * @property {Number} pdBonus Precision Defense Bonus
 * @property {Number} pdr Physical Damage Reduction
 * @property {Number} edr Elemental Damage Reduction
 * @property {Number} mdr Mystical Damage Reduction
 * @property {Object.<string, string>} resistances Monster Resistances
 * @property {Object.<string, string>} vulnerabilities Monster Vulnerabilities
 * @property {Array.<string>} immunities Monster Immunities
 * @property {Array.<string>} conditionImmunities Monster Condition Immunities
 * @property {Array.<string>} conditionResistances Monster Condition Resistances
 * @property {Array.<string>} conditionVulnerabilities Monster Condition Vulnerabilities
 * @property {Array} skills Monster Skills
 * @property {Array} senses Monster Senses
 * @property {Array.<string>} languages Monster Languages
 * @property {Array} otherSpeeds Monster Other Speeds
 * @property {Array} features Monster Features
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
  const [cm, setCm] = React.useState(Math.ceil(level / 2));
  const [prime, setPrime] = React.useState(Math.max(mig, agl, cha, int));
  const [migprof, setMigprof] = React.useState(false);
  const [aglprof, setAglprof] = React.useState(false);
  const [chaprof, setChaprof] = React.useState(false);
  const [intprof, setIntprof] = React.useState(false);
  const [ad, setAd] = React.useState(10); //area defense (8 + 1/2 level + MIG + CHA + bonus)
  const [adBonus, setAdBonus] = React.useState(0);
  const [pd, setPd] = React.useState(10); //precision defense (8 + 1/2 level + AGL + INT + bonus)
  const [pdBonus, setPdBonus] = React.useState(0);
  const [pdr, setPdr] = React.useState(false); //physical damage reduction
  const [edr, setEdr] = React.useState(false); //elemental damage reduction
  const [mdr, setMdr] = React.useState(false); //mystical damage reduction

  React.useEffect(() => {
    setPd(8 + parseInt(cm) + parseInt(agl) + parseInt(int) + parseInt(adBonus));
  }, [cm, agl, int, adBonus]);
  React.useEffect(() => {
    setAd(8 + parseInt(cm) + parseInt(mig) + parseInt(cha) + parseInt(pdBonus));
  }, [cm, mig, cha, pdBonus]);
  React.useEffect(() => {
    setCm(Math.ceil(level / 2));
  }, [level]);
  React.useEffect(() => {
    setPrime(Math.max(mig, agl, int, cha));
  }, [mig, agl, int, cha]);
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
  const [conditionResistances, setConditionResistances] = React.useState([]); //array of strings
  const [conditionImmunities, setConditionImmunities] = React.useState([]); //array of strings
  const [conditionVulnerabilities, setConditionVulnerabilities] =
    React.useState([]); //array of strings
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
    cm,
    setCm,
    migprof,
    setMigprof,
    aglprof,
    setAglprof,
    chaprof,
    setChaprof,
    intprof,
    setIntprof,
    ad,
    setAd,
    adBonus,
    setAdBonus,
    pd,
    setPd,
    pdBonus,
    setPdBonus,
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

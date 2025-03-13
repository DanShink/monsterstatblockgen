import React from "react";

const MonsterStatblockContext = React.createContext();

function useState() {
  const [name, setName] = React.useState("");
  const [size, setSize] = React.useState("Medium");
  const [type, setType] = React.useState("Humanoid");
  const [level, setLevel] = React.useState(0);
  const [category, setCategory] = React.useState("Minion");
  const [apex, setApex] = React.useState(false);
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
  const [PDR, setPDR] = React.useState(0);
  const [EDR, setEDR] = React.useState(0);
  const [MDR, setMDR] = React.useState(0);
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

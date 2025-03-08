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

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
  const [mig, setMig] = React.useState("");
  const [agl, setAgl] = React.useState("");
  const [cha, setCha] = React.useState("");
  const [int, setInt] = React.useState("");
  const [migprof, setMigprof] = React.useState("");
  const [aglprof, setAglprof] = React.useState("");
  const [chaprof, setChaprof] = React.useState("");
  const [intprof, setIntprof] = React.useState("");

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

import React from "react";
import { useMonsterStatblockContext } from "../MonsterStatblockContext";

export default function Info() {
	const { resistances, setResistances } = useMonsterStatblockContext();
	/*
  setResistances((prev) => ({
    ...prev,
    piercing: '1',
  }));
  */
	return <div>Feature Tab</div>;
}

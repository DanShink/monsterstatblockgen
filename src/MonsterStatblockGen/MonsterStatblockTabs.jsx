import React from "react";
import { Tabs, Tab } from "@mui/material";

export default function MonsterStatblockTabs() {
	const [step, setStep] = React.useState(0);

  const handleChange = (event, newValue) => {
    setStep(newValue);
  }

  return (
    <Tabs value={step} onChange={handleChange}
  );
}

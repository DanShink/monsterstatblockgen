import React from "react";
import { Tabs, Tab } from "@mui/material";
import Basics from "./MonsterStatblockTabs/Basics";

function MonsterStatBlockTabLogic({ step }) {
	switch (step) {
		case "Basics":
			return <Basics />;
		default:
			return <div>Unrecognized Tab</div>;
	}
}

const tabs = [
	{ label: "Basics" },
	{ label: "Stats" },
	{ label: "Info" },
	{ label: "Feature" },
	{ label: "Actions" },
	{ label: "Reactions" },
	{ label: "Import/Export" },
];

export default function MonsterStatblockTabs() {
	const [step, setStep] = React.useState("Basics");

	const handleChange = (event, newValue) => {
		setStep(newValue);
	};

	return (
		<React.Fragment>
			<Tabs
				value={step}
				onChange={handleChange}
				aria-label="monster statblock tabs"
			>
				{tabs.map((tab) => (
					<Tab label={tab.label} key={tab.label} value={tab.label} />
				))}
			</Tabs>
			<MonsterStatBlockTabLogic step={step} />
		</React.Fragment>
	);
}

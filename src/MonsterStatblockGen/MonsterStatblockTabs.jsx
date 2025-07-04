import React from "react";
import { Tabs, Tab } from "@mui/material";
import Basics from "./MonsterStatblockTabs/Basics";
import Stats from "./MonsterStatblockTabs/Stats";
import Info from "./MonsterStatblockTabs/Info/Info";
import Skills from "./MonsterStatblockTabs/Skills/Skills";
import Features from "./MonsterStatblockTabs/Features";
import ImportAndExport from "./MonsterStatblockTabs/ImportExport";

function MonsterStatBlockTabLogic({ step }) {
	switch (step) {
		case "Basics":
			return <Basics />;
		case "Stats":
			return <Stats />;
		case "Info":
			return <Info />;
		case "Skills and Senses":
			return <Skills />;
		case "Features":
			return <Features />;
		case "Import/Export":
			return <ImportAndExport />;
		default:
			return <div>Unrecognized Tab</div>;
	}
}

const tabs = [
	{ label: "Basics" },
	{ label: "Stats" },
	{ label: "Info" },
	{ label: "Skills and Senses" },
	{ label: "Features" },
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

import React from "react";
import Typography from "@mui/material/Typography";
import ProTip from "../ProTip";
import {
	useMonsterStatblockContext,
	MonsterStatBlockContextProvider,
} from "./MonsterStatblockContext";

function MonsterStatblockGenWithContext() {
	const values = useMonsterStatblockContext();
	const { name } = values;
	console.log(values);
	return (
		<React.Fragment>
			<Typography
				variant="h4"
				component="h1"
				sx={{ mb: 2 }}
				style={{ display: "flex", textAlign: "center" }}
			>
				Monster Statblock Generator for DC20
			</Typography>
			<div>CONTENT</div>
			<div>Name: {name}</div>
			<ProTip />
		</React.Fragment>
	);
}

export default function MonsterStatblockGen() {
	return (
		<MonsterStatBlockContextProvider>
			<MonsterStatblockGenWithContext />
		</MonsterStatBlockContextProvider>
	);
}

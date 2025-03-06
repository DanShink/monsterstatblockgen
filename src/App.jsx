import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import MonsterStatblockGen from "./MonsterStatblockGen/MonsterStatblockGen";

export default function App() {
	return (
		<Container maxWidth="md">
			<Box
				sx={{ my: 4 }}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<MonsterStatblockGen />
			</Box>
		</Container>
	);
}

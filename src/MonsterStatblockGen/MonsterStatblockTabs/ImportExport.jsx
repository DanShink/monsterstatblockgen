import React from "react";
import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	PDFDownloadLink,
	PDFViewer,
	Font,
} from "@react-pdf/renderer";
import { useMonsterStatblockContext } from "../MonsterStatblockContext";
import { damageTypes, skillTypes, speedTypes } from "../constants";

const styles = StyleSheet.create({
	page: {
		padding: 20,
		// fontFamily: "Highland",
		fontSize: 10,
		color: "#111",
	},
	title: {
		fontSize: 20,
		// fontFamily: "Highland",
		textAlign: "center",
		textTransform: "uppercase",
		marginBottom: 4,
	},
	subtitle: {
		fontSize: 10,
		textAlign: "center",
		fontStyle: "italic",
		marginBottom: 10,
	},
	section: {
		marginBottom: 10,
		padding: 6,
		border: "1px solid #ccc",
		backgroundColor: "#f5f3fa",
	},
	heading: {
		fontSize: 11,
		fontWeight: "bold",
		textTransform: "uppercase",
		borderBottom: "1px solid #333",
		marginBottom: 4,
	},
	statLine: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginBottom: 4,
	},
	statItem: {
		width: "25%",
		fontWeight: "bold",
	},
	listItem: {
		marginBottom: 2,
	},
	bold: {
		fontWeight: "bold",
	},
	italic: {
		fontStyle: "italic",
	},
	boxed: {
		padding: 4,
		border: "1px solid #aaa",
		marginBottom: 4,
		backgroundColor: "#eae6f3",
	},
});

export default function ImportAndExport() {
	const {
		name,
		size,
		type,
		level,
		category,
		monsterStatus,
		hp,
		mig,
		agl,
		cha,
		int,
		cm,
		prime,
		migprof,
		aglprof,
		chaprof,
		intprof,
		ad,
		adBonus,
		pd,
		pdBonus,
		pdr,
		edr,
		mdr,
		resistances,
		vulnerabilities,
		immunities,
		conditionImmunities,
		conditionResistances,
		conditionVulnerabilities,
		skills,
		senses,
		languages,
		speeds,
		features,
		ap,
		legendaryAp,
		defaultSpeed,
		check,
		saveDC,
		actions,
		reactions,
	} = useMonsterStatblockContext();

	const TestBlockPDF = () => (
		<Document>
			<Page size="A4" style={styles.page}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.subtitle}>
					{size} | Level {level} {monsterStatus} {type}
				</Text>

				<View style={styles.section}>
					<Text style={styles.heading}>HP: {hp}</Text>
					<View style={styles.statLine}>
						<Text style={styles.statItem}>
							PD: {pd}/{pd + 5}/{pd + 10}
						</Text>
						<Text style={styles.statItem}>
							AD: {ad}/{ad + 5}/{ad + 10}
						</Text>
						<Text style={styles.statItem}>MIG: {mig}</Text>
						<Text style={styles.statItem}>AGL: {agl}</Text>
						<Text style={styles.statItem}>CHA: {cha}</Text>
						<Text style={styles.statItem}>INT: {int}</Text>
					</View>
					<Text>
						Resistances:{" "}
						{Object.entries(resistances).map(
							([resistance, value]) =>
								value !== 0 && `${damageTypes[resistance]} (${value}), `
						)}
					</Text>
					<Text>
						Vulnerabilities:{" "}
						{Object.entries(vulnerabilities).map(
							([vulnerability, value]) =>
								value !== 0 && `${damageTypes[vulnerability]} (${value}), `
						)}
					</Text>
					<Text>
						Skills:{" "}
						{Object.entries(skills).map(
							([skill, value]) =>
								value !== 0 && `${skillTypes[skill]} ${value}, `
						)}
					</Text>
					<Text>
						Other Speeds:{" "}
						{Object.entries(speeds).map(
							([speed, value]) =>
								value !== 0 && `${speedTypes[speed]} ${value}, `
						)}
					</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.heading}>Features</Text>
					{features.map((feature) => (
						<Text style={styles.listItem}>
							<Text style={styles.bold}>{feature.name}: </Text>
							{feature.description}
						</Text>
					))}
				</View>

				<View style={styles.section}>
					<Text style={styles.heading}>
						Actions (Number) | Legendary (Number)
					</Text>
					<Text style={styles.listItem}>
						<Text style={styles.bold}>(1) Action 1:</Text> Action 1 Info.
					</Text>
					<Text style={styles.listItem}>
						<Text style={styles.bold}>(1) Action 2:</Text> Action 2 Info.
					</Text>
					<Text style={styles.listItem}>
						<Text style={styles.bold}>(2) Action 3:</Text> Action 3 Info.
					</Text>
					<Text style={styles.listItem}>
						<Text style={styles.bold}>(2) Action 4:</Text> Action 4 Info.
					</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.heading}>Reactions</Text>
					<Text style={styles.listItem}>
						<Text style={styles.bold}>(1) Reaction 1:</Text> Reaction 1 Info
					</Text>
					<Text style={styles.listItem}>
						<Text style={styles.bold}>(1) Reactoin 2:</Text> React 2 Info
					</Text>
				</View>

				<View style={styles.boxed}>
					<Text style={styles.heading}>Apex Actions</Text>
					<Text style={styles.listItem}>
						<Text style={styles.bold}>Round 1: Action Name</Text>
					</Text>
					<Text style={styles.listItem}>
						Save Action Info. <Text style={styles.italic}>Failure:</Text>{" "}
						<Text style={styles.bold}>Failure Status</Text> for some time.
					</Text>

					<Text style={styles.listItem}>
						<Text style={styles.bold}>Rounds 2–4: Action Name</Text>
					</Text>
					<Text>Action Details</Text>

					<Text style={styles.listItem}>
						<Text style={styles.bold}>Round 5: Action Name</Text>
					</Text>
					<Text>Action Details</Text>
				</View>
			</Page>
		</Document>
	);
	return (
		<React.Fragment>
			<div>Import/Export Statblocks</div>
			<PDFViewer
				style={{
					height: "100vh",
					width: "100%",
				}}
			>
				<TestBlockPDF />
			</PDFViewer>
			<PDFDownloadLink
				document={<TestBlockPDF />}
				fileName={`${name || "monster"}-statblock.pdf`}
			>
				{({ loading }) =>
					loading ? "Generating PDF..." : "Download Monster PDF"
				}
			</PDFDownloadLink>
		</React.Fragment>
	);
}

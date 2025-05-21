import React from "react";
import { useMonsterStatblockContext } from "../../MonsterStatblockContext";
import { damageTypes, senses, languages, half, double } from "../../constants";

import {
  Box,
  Menu,
  TextField,
  Select,
  MenuItem,
  Slider,
  Typography,
  Input,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import VulnerabilitiesGenerator from "./VulnerabilitiesGenerator";
import ResistancesGenerator from "./ResistancesGenerator";
import ImmunitiesGenerator from "./ImmunitiesGenerator";
import ConditionsGenerator from "./ConditionsGenerator";

function DamageReduction() {
  const { pdr, setPdr, edr, setEdr, mdr, setMdr } =
    useMonsterStatblockContext();
  return (
    <React.Fragment>
      <Typography id="info-damage-reduction-title" fontWeight="bold">
        Damage Reduction
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <Checkbox
          checked={pdr}
          onChange={(e) => setPdr(e.target.checked)}
          inputProps={{ "aria-label": "info-pdr" }}
          label="PDR"
        />
        <Typography id="info-pdr-title">Physical Damage Reduction?</Typography>

        <Checkbox
          checked={edr}
          onChange={(e) => setEdr(e.target.checked)}
          inputProps={{ "aria-label": "info-edr" }}
          label="EDR"
        />
        <Typography id="info-edr-title">Elemental Damage Reduction?</Typography>

        <Checkbox
          checked={mdr}
          onChange={(e) => setMdr(e.target.checked)}
          inputProps={{ "aria-label": "info-mdr" }}
          label="MDR"
        />
        <Typography id="info-mdr-title">Mystical Damage Reduction?</Typography>
      </Box>
    </React.Fragment>
  );
}

export default function Info() {
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        margin: "10px",
        width: 1000,
      }}
    >
      <DamageReduction />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ResistancesGenerator />
        <VulnerabilitiesGenerator />
      </Box>
      <ImmunitiesGenerator />
      <ConditionsGenerator />
    </Box>
  );
}

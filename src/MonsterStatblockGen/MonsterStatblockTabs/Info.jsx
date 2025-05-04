import React from "react";
import { useMonsterStatblockContext } from "../MonsterStatblockContext";
import {
  damageTypes,
  conditions,
  skills,
  senses,
  languages,
  half,
} from "../constants";

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

function ResistancesGenerator() {
  const { resistances, setResistances } = useMonsterStatblockContext();
  console.log(resistances);

  /**
   * setResistances((prev) => ({
   *  ...prev,
   *
   * }))
   */

  return (
    <React.Fragment>
      {Object.keys(damageTypes).map((resistance, index) => (
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Typography
            id={`info-resistances-${resistance}`}
            sx={{ width: "120px" }}
          >
            {damageTypes[resistance]}
          </Typography>
          <TextField
            value={resistances[resistance]}
            size="small"
            placeholder={resistances[resistance] === half ? "Half" : null}
            onChange={(e) =>
              setResistances((prev) => {
                const updatedResistances = {
                  ...prev,
                };
                updatedResistances[resistance] = parseInt(event.target.value);
                return updatedResistances;
              })
            }
            inputProps={{
              step: 1,
              min: 0,
              max: 999,
              type: "number",
              "aria-labelledby": "resistance",
            }}
            sx={{ margin: "0px 10px", width: "75px" }}
            disabled={resistances[resistance] === half}
          />
          <Typography id="basics-intprof-title">
            Set resistance to "Half"?
          </Typography>
          <Checkbox
            checked={resistances[resistance] === half}
            onChange={() =>
              setResistances((prev) => {
                const updatedResistances = {
                  ...prev,
                };
                updatedResistances[resistance] =
                  prev[resistance] === half ? 0 : half;
                return updatedResistances;
              })
            }
            inputProps={{ "aria-label": "stats-resistance" }}
            label="resistance"
          />
        </Box>
      ))}
    </React.Fragment>
  );
}

export default function Info() {
  const { resistances, setResistances, pdr, setPdr, edr, setEdr, mdr, setMdr } =
    useMonsterStatblockContext();
  /*
  setResistances((prev) => ({
    ...prev,
    piercing: '1',
  }));
  */
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        margin: "10px",
        width: 600,
      }}
    >
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
        <Typography id="info-pdr-title">Physical Damage Reduction?</Typography>
        <Checkbox
          checked={pdr}
          onChange={(e) => setPdr(e.target.checked)}
          inputProps={{ "aria-label": "info-pdr" }}
          label="PDR"
        />
        <Typography id="info-edr-title">Elemental Damage Reduction?</Typography>
        <Checkbox
          checked={edr}
          onChange={(e) => setEdr(e.target.checked)}
          inputProps={{ "aria-label": "info-edr" }}
          label="EDR"
        />
        <Typography id="info-mdr-title">Mystical Damage Reduction?</Typography>
        <Checkbox
          checked={mdr}
          onChange={(e) => setMdr(e.target.checked)}
          inputProps={{ "aria-label": "info-mdr" }}
          label="MDR"
        />
      </Box>
      <Typography id="info-resistances-title" fontWeight="bold">
        Resistances
      </Typography>
      <ResistancesGenerator />
      <div>Vulnerabilities</div>
      <div>Immunities</div>
    </Box>
  );
}

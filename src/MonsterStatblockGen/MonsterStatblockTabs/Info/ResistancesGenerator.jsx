import React from "react";
import { useMonsterStatblockContext } from "../../MonsterStatblockContext";
import { damageTypes, half } from "../../constants";

import { Box, TextField, Typography, Checkbox } from "@mui/material";

export default function ResistancesGenerator() {
  const {
    resistances,
    setResistances,
    vulnerabilities,
    setVulnerabilities,
    immunities,
    setImmunities,
  } = useMonsterStatblockContext();
  console.log(resistances);

  /**
   * setResistances((prev) => ({
   *  ...prev,
   *
   * }))
   */

  return (
    <Box>
      <Typography id="info-resistances-title" fontWeight="bold">
        Resistances
      </Typography>
      {Object.keys(damageTypes).map((resistance, index) => (
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
          key={index}
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
            onChange={(e) => {
              vulnerabilities[resistance] = 0;
              setImmunities(
                immunities.filter((immunity) => immunity !== resistance)
              );
              setResistances((prev) => {
                const updatedResistances = {
                  ...prev,
                };
                updatedResistances[resistance] = parseInt(event.target.value);
                return updatedResistances;
              });
            }}
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
            onChange={() => {
              vulnerabilities[resistance] = 0;
              setImmunities(
                immunities.filter((immunity) => immunity !== resistance)
              );
              setResistances((prev) => {
                const updatedResistances = {
                  ...prev,
                };
                updatedResistances[resistance] =
                  prev[resistance] === half ? 0 : half;
                return updatedResistances;
              });
            }}
            inputProps={{ "aria-label": "stats-resistance" }}
            label="resistance"
          />
        </Box>
      ))}
    </Box>
  );
}

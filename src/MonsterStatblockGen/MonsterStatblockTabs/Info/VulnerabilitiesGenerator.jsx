import React from "react";
import { useMonsterStatblockContext } from "../../MonsterStatblockContext";
import { damageTypes, double } from "../../constants";
import { Box, TextField, Typography, Checkbox } from "@mui/material";

export default function VulnerabilitiesGenerator() {
  const {
    resistances,
    setResistances,
    vulnerabilities,
    setVulnerabilities,
    immunities,
    setImmunities,
  } = useMonsterStatblockContext();
  console.log(vulnerabilities);

  return (
    <Box>
      <Typography id="info-vulnerabilities-title" fontWeight="bold">
        Vulnerabilities
      </Typography>
      {Object.keys(damageTypes).map((vulnerability, index) => (
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
            id={`info-vulnerabilities-${vulnerability}`}
            sx={{ width: "120px" }}
          >
            {damageTypes[vulnerability]}
          </Typography>
          <TextField
            value={vulnerabilities[vulnerability]}
            size="small"
            placeholder={
              vulnerabilities[vulnerability] === double ? "Double" : null
            }
            onChange={(e) => {
              resistances[vulnerability] = 0;
              setImmunities(
                immunities.filter((immunity) => immunity !== vulnerability)
              );

              setVulnerabilities((prev) => {
                const updatedvulnerabilities = {
                  ...prev,
                };
                updatedvulnerabilities[vulnerability] = parseInt(
                  event.target.value
                );
                return updatedvulnerabilities;
              });
            }}
            inputProps={{
              step: 1,
              min: 0,
              max: 999,
              type: "number",
              "aria-labelledby": "vulnerability",
            }}
            sx={{ margin: "0px 10px", width: "75px" }}
            disabled={vulnerabilities[vulnerability] === double}
          />
          <Typography id="basics-intprof-title">
            Set vulnerability to "Double"?
          </Typography>
          <Checkbox
            checked={vulnerabilities[vulnerability] === double}
            onChange={() => {
              resistances[vulnerability] = 0;
              setImmunities(
                immunities.filter((immunity) => immunity !== vulnerability)
              );
              setVulnerabilities((prev) => {
                const updatedVulnerabilities = {
                  ...prev,
                };
                updatedVulnerabilities[vulnerability] =
                  prev[vulnerability] === double ? 0 : double;
                return updatedVulnerabilities;
              });
            }}
            inputProps={{ "aria-label": "stats-vulnerability" }}
            label="vulnerability"
          />
        </Box>
      ))}
    </Box>
  );
}

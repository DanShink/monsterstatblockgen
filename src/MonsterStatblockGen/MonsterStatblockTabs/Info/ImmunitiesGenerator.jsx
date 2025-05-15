import React from "react";
import { useMonsterStatblockContext } from "../../MonsterStatblockContext";
import { damageTypes } from "../../constants";

import { Box, Typography, Checkbox } from "@mui/material";

export default function ImmunitiesGenerator() {
  const {
    resistances,
    setResistances,
    vulnerabilities,
    setVulnerabilities,
    immunities,
    setImmunities,
  } = useMonsterStatblockContext();
  console.log(immunities);
  return (
    <Box>
      <Typography id="info-immunities-title" fontWeight="bold">
        Immunities
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(damageTypes).map((immunity, index) => (
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
            key={index}
          >
            <Checkbox
              checked={immunities.includes(immunity)}
              onChange={() => {
                if (immunities.includes(immunity)) {
                  setImmunities(
                    immunities.filter(
                      (singleImmunity) => singleImmunity !== immunity
                    )
                  );
                } else {
                  setImmunities((prev) => [...prev, immunity]);
                  resistances[immunity] = 0;
                  vulnerabilities[immunity] = 0;
                }
                return;
              }}
              inputProps={{ "aria-label": "immunity-" }}
              label="Immunity"
            ></Checkbox>
            <Typography
              id={`info-immunities-${immunity}`}
              sx={{ width: "120px" }}
            >
              {damageTypes[immunity]}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

/*
immunities.includes(immunity)
    ? setImmunities(
        immunities.filter(
        (singleImmunity) => singleImmunity !== immunity
        )
    )
    : setImmunities((prev) => [...prev, immunity])
*/

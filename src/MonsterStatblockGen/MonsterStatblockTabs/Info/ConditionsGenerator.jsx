import React from "react";
import { useMonsterStatblockContext } from "../../MonsterStatblockContext";
import { damageTypes, half, conditions } from "../../constants";

import {
  Box,
  TextField,
  Typography,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";

const condition_list = ["Resistance", "Vulnerability", "Immunity"];

export default function ConditionsGenerator() {
  const {
    conditionResistances,
    setConditionResistances,
    conditionImmunities,
    setConditionImmunities,
    conditionVulnerabilities,
    setConditionVulnerabilities,
  } = useMonsterStatblockContext();
  console.log(conditionResistances);
  console.log(conditionVulnerabilities);
  console.log(conditionImmunities);
  return (
    <Box>
      <Typography id="info-immunities-title" fontWeight="bold">
        Conditions
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(conditions).map((condition, index) => (
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              minWidth: 250,
            }}
            key={index}
          >
            <Typography
              id={`info-condition-${condition}`}
              sx={{ minWidth: 110 }}
            >
              {conditions[condition]}
            </Typography>
            <Select
              labelId={`${condition}-dropdown`}
              id={`${condition}-type`}
              label={`${condition}`}
              value={condition_list}
              onChange={(e) => {}}
            >
              {condition_list.map((option) => (
                <MenuItem value={option} key={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

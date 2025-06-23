import React from "react";
import { useMonsterStatblockContext } from "../../MonsterStatblockContext";
import { damageTypes, half, conditionTypes } from "../../constants";

import {
  Box,
  TextField,
  Typography,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";

const condition_list = ["None", "Resistance", "Vulnerability", "Immunity"];

export default function ConditionsGenerator() {
  const { conditions, setConditions } = useMonsterStatblockContext();
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
        {Object.keys(conditionTypes).map((condition, index) => (
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
              {conditionTypes[condition]}
            </Typography>
            <Select
              labelId={`${condition}-dropdown`}
              id={`${condition}-type`}
              label={`${condition}`}
              value={conditions[condition]}
              onChange={(e) => {
                setConditions((prevConditions) => {
                  const newConditions = { ...prevConditions };
                  newConditions[condition] = e.target.value;
                  return newConditions;
                });
              }}
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

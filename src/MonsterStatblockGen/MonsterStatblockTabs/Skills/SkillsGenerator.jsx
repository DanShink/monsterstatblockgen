import React from "react";
import {
  Box,
  TextField,
  Typography,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useMonsterStatblockContext } from "../../MonsterStatblockContext";
import { skillTypes, masteryTypes, masteryLevels } from "../../constants";
import Skills from "./Skills";

export default function SkillsGenerator({}) {
  const { skills, setSkills } = useMonsterStatblockContext();
  return (
    <Box>
      <Typography id="info-skills-title" fontWeight="bold">
        Skills
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(skillTypes).map((skill, index) => (
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              minWidth: 350,
              margin: "5px 0px",
            }}
            key={index}
          >
            <Typography id={`info-skills-${skill}`} sx={{ width: "120px" }}>
              {skillTypes[skill]}
            </Typography>
            <Select
              labelId={`${skill}-dropdown`}
              id={`${skill}-type`}
              label={`${skill}`}
              value={skills[skill]}
              onChange={(e) => {
                setSkills((prevSkills) => {
                  const newSkills = { ...prevSkills };
                  newSkills[skill] = e.target.value;
                  return newSkills;
                });
              }}
            >
              {Object.keys(masteryTypes).map((option) => (
                <MenuItem value={masteryLevels[option]} key={option}>
                  {masteryTypes[option]}
                </MenuItem>
              ))}
            </Select>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

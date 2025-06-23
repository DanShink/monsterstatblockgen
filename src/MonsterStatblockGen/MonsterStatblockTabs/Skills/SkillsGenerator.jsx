import React from "react";
import {
  Box,
  TextField,
  Typography,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";
import { useMonsterStatblockContext } from "../../MonsterStatblockContext";
import {
  skillTypes,
  masteryTypes,
  masteryLevels,
  speedTypes,
  senseTypes,
} from "../../constants";
import Skills from "./Skills";

export default function SkillsGenerator({}) {
  const { skills, setSkills, senses, setSenses, speeds, setSpeeds } =
    useMonsterStatblockContext();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        maxWidth: "1000px",
      }}
    >
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
              justifyContent: "flex-start",
              alignItems: "center",
              minWidth: 300,
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
              sx={{
                minWidth: "150px",
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
      <Box>
        <Typography id="info-speeds-title" fontWeight="bold">
          Speeds
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          maxWidth: "1000px",
        }}
      >
        {Object.keys(speedTypes).map((speed, index) => (
          <Box
            component="div"
            key={index}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              minWidth: 300,
              margin: "5px 0px",
            }}
          >
            <Typography
              id={`info-speeds-${speed}-label`}
              sx={{ width: "120px" }}
            >
              {speedTypes[speed]}
            </Typography>
            <TextField
              id={`info-speeds-${speed}-value`}
              type="number"
              inputProps={{ min: 0, max: 100 }}
              value={speeds[speed]}
              onChange={(e) => {
                if (e.target.value > 100 || e.target.value < 0) return;
                setSpeeds((prev) => {
                  const newSpeeds = { ...speeds };
                  newSpeeds[speed] = e.target.value;
                  return newSpeeds;
                });
              }}
            />
          </Box>
        ))}
      </Box>

      <Typography id="info-senses-title" fontWeight="bold">
        Senses
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          maxWidth: "1000px",
        }}
      >
        {Object.keys(senseTypes).map((sense, index) => (
          <Box
            component="div"
            key={index}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              minWidth: 300,
              margin: "5px 0px",
            }}
          >
            <Typography
              id={`info-senses-${sense}-label`}
              sx={{ width: "120px" }}
            >
              {senseTypes[sense]}
            </Typography>
            <TextField
              id={`info-senses-${sense}-value`}
              type="number"
              inputProps={{ min: 0, max: 100 }}
              value={senses[sense]}
              onChange={(e) => {
                if (e.target.value > 100 || e.target.value < 0) return;
                setSenses((prev) => {
                  const newSenses = { ...senses };
                  newSenses[sense] = e.target.value;
                  return newSenses;
                });
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

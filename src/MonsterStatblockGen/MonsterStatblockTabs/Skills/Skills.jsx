import React from "react";
import {
  Box,
  MenuItem,
  Typography,
  Select,
  Checkbox,
  InputLabel,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useMonsterStatblockContext } from "../../MonsterStatblockContext";
import { skillTypes, masteryTypes, languageTypes } from "../../constants";
import SkillsGenerator from "./SkillsGenerator";

export default function Skills({}) {
  const { senses, setSenses, languages, setLanguages, speeds, setSpeeds } =
    useMonsterStatblockContext();
  return (
    <Box>
      <Typography id="info-Senses-title" fontWeight="bold">
        Languages Known
      </Typography>
      <Select
        id="languages"
        multiple
        value={languages}
        displayEmpty={true}
        onChange={(e) => {
          const {
            target: { value },
          } = e;
          setLanguages(typeof value === "string" ? value.split(",") : value);
        }}
      >
        {Object.keys(languageTypes).map((option) => (
          <MenuItem value={option} key={option}>
            {languageTypes[option]}
          </MenuItem>
        ))}
      </Select>
      <SkillsGenerator />
    </Box>
  );
}

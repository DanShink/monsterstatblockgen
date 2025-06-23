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
    <Box
      sx={{
        maxWidth: "1000px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "10px",
          maxWidth: "1000px",
        }}
      >
        <Typography
          id="info-Senses-title"
          fontWeight="bold"
          sx={{ marginRight: "10px" }}
        >
          Languages Known
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "10px",
          maxWidth: "1000px",
        }}
      >
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
          sx={{
            minWidth: "150px",
            maxWidth: "500px",
            marginBottom: "10px",
          }}
        >
          {Object.keys(languageTypes).map((option) => (
            <MenuItem value={option} key={option}>
              {languageTypes[option]}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <SkillsGenerator />
    </Box>
  );
}

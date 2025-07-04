import React from "react";
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
import { useMonsterStatblockContext } from "../MonsterStatblockContext";

import { monsterTypes } from "../constants";

const size_options = [
  "Micro",
  "Tiny",
  "Small",
  "Medium",
  "Large",
  "Huge",
  "Gargntuan",
  "Colossal",
  "Titanic",
];
const type_options = [
  "Abberation",
  "Beast",
  "Celestial",
  "Construct",
  "Dragon",
  "Elemental",
  "Fey",
  "Fiend",
  "Giant",
  "Humanoid",
  "Monstrosity",
  "Ooze",
  "Plant",
  "Undead",
];
const creature_cat = [
  "Brute",
  "Lurker",
  "Skirmisher",
  "Defender",
  "Minion",
  "Leader",
  "Controller",
  "Artillerist",
  "Support",
];

export default function Basics() {
  const {
    name,
    setName,
    size,
    setSize,
    type,
    setType,
    level,
    setLevel,
    category,
    setCategory,
    monsterStatus,
    setMonsterStatus,
    hp,
    setHp,
  } = useMonsterStatblockContext();

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        margin: "10px",
        width: 600,
      }}
    >
      <Box
        sx={{
          width: 600,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          id="basics-name"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          labelId="basics-creature-size-label"
          id="basics-creature-size"
          label="Creature Size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          {size_options.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <Select
          labelId="basics-creature-type-label"
          id="basics-creature-type"
          label="Creature Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {type_options.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box
        sx={{
          width: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography id="basics-slider-title" sx={{ margin: "15px" }}>
          Level
        </Typography>
        <Slider
          aria-label="basics-level"
          value={level}
          marks
          min={0}
          max={20}
          onChange={(e) => setLevel(e.target.value)}
        />
        <Input
          value={level}
          size="small"
          onChange={(e) => setLevel(e.target.value)}
          inputProps={{
            step: 1,
            min: 0,
            max: 20,
            type: "number",
            "aria-labelledby": "basics-level",
          }}
          sx={{ margin: "15px" }}
        />
      </Box>
      <Select
        labelId="basics-creature-strategy-label"
        id="basics-creature-strategy"
        label="Creature Classification"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {creature_cat.map((option) => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <Box
        sx={{
          width: 450,
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <Typography id="basics-status-title">Monster Status</Typography>
        <Select
          labelId="basics-status-label"
          id="basics-status"
          label="Creature Status"
          value={monsterStatus}
          onChange={(e) => setMonsterStatus(e.target.value)}
          sx={{ margin: "0px 20px" }}
        >
          {Object.keys(monsterTypes).map((monsterType, index) => (
            <MenuItem
              value={monsterTypes[monsterType]}
              key={monsterTypes[monsterType]}
            >
              {monsterTypes[monsterType]}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Input
        value={hp}
        size="small"
        placeholder="Enter Monster's HP"
        onChange={(e) => setHp(e.target.value)}
        inputProps={{
          step: 1,
          min: 0,
          type: "number",
          "aria-labelledby": "basics-hp",
        }}
      />
    </Box>
  );
}

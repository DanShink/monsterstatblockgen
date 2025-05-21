import React from "react";
import { Box, TextField, Typography, Checkbox } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useMonsterStatblockContext } from "../MonsterStatblockContext";
import { skillTypes, masteryLevels } from "../constants";

export default function Skills({}) {
  const {
    mig,
    agl,
    cha,
    int,
    prime,
    skills,
    setSkills,
    senses,
    setSenses,
    languages,
    setLanguages,
    otherSpeeds,
    setOtherSpeeds,
  } = useMonsterStatblockContext();
  return <div>Skills and such</div>;
}

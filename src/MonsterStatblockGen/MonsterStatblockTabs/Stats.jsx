import React from "react";
import {
  Box,
  Menu,
  TextField,
  Select,
  Slider,
  Checkbox,
  Typography,
  Input,
} from "@mui/material";
import { useMonsterStatblockContext } from "../MonsterStatblockContext";

export default function Stats() {
  const {
    mig,
    setMig,
    agl,
    setAgl,
    cha,
    setCha,
    int,
    setInt,
    migprof,
    setMigprof,
    aglprof,
    setAglprof,
    chaprof,
    setChaprof,
    intprof,
    setIntprof,
  } = useMonsterStatblockContext();
  return (
    <Box component="form" autoComplete="off" sx={{ width: 600 }}>
      <Box
        sx={{
          width: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography id="basics-slider-title" sx={{ margin: "15px" }}>
          MIG
        </Typography>
        <Slider
          aria-label="stats-mig"
          value={mig}
          marks
          min={-3}
          max={7}
          onChange={(e) => setMig(e.target.value)}
        />
        <Input
          value={mig}
          size="small"
          onChange={(e) => setMig(e.target.value)}
          inputProps={{
            step: 1,
            min: -3,
            max: 7,
            type: "number",
            "aria-labelledby": "stats-mig",
          }}
          sx={{ margin: "15px" }}
        />
        <Typography id="basics-migprof-title">
          Proficient in MIG saves?
        </Typography>
        <Checkbox
          checked={migprof}
          onChange={(e) => setMigprof(e.target.checked)}
          inputProps={{ "aria-label": "stats-migprof" }}
          label="MIGprof"
        />
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
          AGL
        </Typography>
        <Slider
          aria-label="stats-agl"
          value={agl}
          marks
          min={-3}
          max={7}
          onChange={(e) => setAgl(e.target.value)}
        />
        <Input
          value={agl}
          size="small"
          onChange={(e) => setAgl(e.target.value)}
          inputProps={{
            step: 1,
            min: -3,
            max: 7,
            type: "number",
            "aria-labelledby": "stats-agl",
          }}
          sx={{ margin: "15px" }}
        />
        <Typography id="basics-aglprof-title">
          Proficient in AGL saves?
        </Typography>
        <Checkbox
          checked={aglprof}
          onChange={(e) => setAglprof(e.target.checked)}
          inputProps={{ "aria-label": "stats-aglprof" }}
          label="AGLprof"
        />
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
          CHA
        </Typography>
        <Slider
          aria-label="stats-cha"
          value={cha}
          marks
          min={-3}
          max={7}
          onChange={(e) => setCha(e.target.value)}
        />
        <Input
          value={cha}
          size="small"
          onChange={(e) => setCha(e.target.value)}
          inputProps={{
            step: 1,
            min: -3,
            max: 7,
            type: "number",
            "aria-labelledby": "stats-agl",
          }}
          sx={{ margin: "15px" }}
        />
        <Typography id="basics-chaprof-title">
          Proficient in CHA saves?
        </Typography>
        <Checkbox
          checked={chaprof}
          onChange={(e) => setChaprof(e.target.checked)}
          inputProps={{ "aria-label": "stats-chaprof" }}
          label="CHAprof"
        />
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
          INT
        </Typography>
        <Slider
          aria-label="stats-int"
          value={int}
          marks
          min={-3}
          max={7}
          onChange={(e) => setInt(e.target.value)}
        />
        <Input
          value={int}
          size="small"
          onChange={(e) => setInt(e.target.value)}
          inputProps={{
            step: 1,
            min: -3,
            max: 7,
            type: "number",
            "aria-labelledby": "stats-agl",
          }}
          sx={{ margin: "15px" }}
        />
        <Typography id="basics-intprof-title">
          Proficient in INT saves?
        </Typography>
        <Checkbox
          checked={intprof}
          onChange={(e) => setIntprof(e.target.checked)}
          inputProps={{ "aria-label": "stats-intprof" }}
          label="INTprof"
        />
      </Box>
    </Box>
  );
}

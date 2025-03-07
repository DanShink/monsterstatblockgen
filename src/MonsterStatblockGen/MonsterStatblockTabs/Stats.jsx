import React from "react";
import { Box, Menu, TextField, Select, Slider, Checkbox } from "@mui/material";
import { useMonsterStatblockContext } from "../MonsterStatblockContext";

export default function Stats(){
  return(
    <Box
      component="form"
      autoComplete="off"
      sx = {{width:300}}
    >  
    MIG
      <Slider 
        aria-label="Temperature" 
        defaultValue={0} 
        shiftStep={1}
        valueLabelDisplay="auto"
        step={1} 
        marks 
        min={-3} 
        max={7}  
      />
      <Checkbox></Checkbox>
      AGL
      <Slider 
        aria-label="Temperature" 
        defaultValue={0} 
        shiftStep={1}
        valueLabelDisplay="auto"
        step={1} 
        marks 
        min={-3} 
        max={7}  
      />
      CHA
      <Slider 
        aria-label="Temperature" 
        defaultValue={0} 
        shiftStep={1}
        valueLabelDisplay="auto"
        step={1} 
        marks 
        min={-3} 
        max={7}  
      />
      INT
      <Slider 
        aria-label="Temperature" 
        defaultValue={0} 
        shiftStep={1}
        valueLabelDisplay="auto"
        step={1} 
        marks 
        min={-3} 
        max={7}  
      />
    </Box>
  );
}
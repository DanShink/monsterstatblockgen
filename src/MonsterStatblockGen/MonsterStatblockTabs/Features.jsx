import React from "react";
import { useMonsterStatblockContext } from "../MonsterStatblockContext";
import {
  Box,
  MenuItem,
  Typography,
  Select,
  Checkbox,
  InputLabel,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function Features() {
  const { features, setFeatures } = useMonsterStatblockContext();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1000px",
      }}
    >
      <Box
        sx={{
          marginLeft: "35px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Typography fontWeight="bold">Features</Typography>
      </Box>

      <Box>
        {features.map((feature, index) => {
          return (
            <Box
              sx={{
                display: "flex",
                margin: "10px",
              }}
              key={feature.id}
            >
              <DeleteIcon
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setFeatures((prevFeatures) => {
                    let newFeatures = [...prevFeatures];
                    newFeatures.splice(index, 1);
                    return newFeatures;
                  });
                }}
              />
              <Box>
                <TextField
                  label="Name"
                  value={feature.name}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setFeatures((prevFeatures) => {
                      const newFeatures = [...prevFeatures];
                      newFeatures[index].name = newValue;
                      return newFeatures;
                    });
                  }}
                  sx={{ marginRight: "10px" }}
                />
                <TextField
                  label="Description"
                  value={feature.description}
                  multiline
                  rows={4}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setFeatures((prevFeatures) => {
                      const newFeatures = [...prevFeatures];
                      newFeatures[index].description = newValue;
                      return newFeatures;
                    });
                  }}
                  sx={{
                    minWidth: "500px",
                  }}
                />
              </Box>
            </Box>
          );
        })}
        <AddIcon
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setFeatures((prevFeatures) => {
              const newFeatures = [...prevFeatures];
              newFeatures.push({
                id: Math.random(),
                name: "Feature Name",
                description: "Feature Description",
              });
              return newFeatures;
            });
          }}
        />
      </Box>
    </Box>
  );
}

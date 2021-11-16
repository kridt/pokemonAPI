import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function PokeCard({ name, pokemonId }) {
  const [pokeInfo, setPokeInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => setPokeInfo(response.data));
  }, [setPokeInfo]);

  return (
    <div>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "200px",
          width: "350px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {pokeInfo?.types?.map((types) => {
                console.log(types);
                return <p>{types.type?.name}</p>;
              })}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={pokeInfo.sprites?.front_default}
          alt={name}
        />
      </Card>
    </div>
  );
}

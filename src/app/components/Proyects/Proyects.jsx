import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Proyects() {
  const proyects = [
    {
      name: "Simple Note App",
      link: "",
      coverImage: "",
      description: "",
    },
    {
      name: "App de Clima",
      link: "",
      coverImage: "",
      description: "",
    },
    {
      name: "Landing Page Rock Festival",
      link: "",
      coverImage: "",
      description: "",
    },
    {
      name: "Blog De Cafe",
      link: "",
      coverImage: "",
      description: "",
    },
    {
      name: "Simple Pagina de Ropa",
      link: "",
      coverImage: "",
      description: "",
    },
    {
      name: "Lading Page Bienes Raices",
      link: "",
      coverImage: "",
      description: "",
    },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {proyects.map((proyect, index) => (
            <Card sx={{ maxWidth: 345 }} key={index}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://picsum.photos/id/237/200/300"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {proyect.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Box>
    </>
  );
}

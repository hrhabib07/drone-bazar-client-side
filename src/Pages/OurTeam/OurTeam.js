import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
const OurTeam = () => {
  return (
    <Box>
      <Container sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: 600, color: "tomato", mt: 5 }}
        >
          Drone Bazar
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: 600, color: "darkblue", mb: 5 }}
        >
          Our Dedicated Team
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            {/* grid coding started from here  */}

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic1-2.jpg"
                alt="Paella dish"
              />
              <CardContent sx={{ textAlign: "left", my: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, color: "darkblue" }}
                >
                  Photographer
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "tomato" }}
                >
                  Stephan Humbert
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  stephanhumbert@gamil.com
                </Typography>
              </CardContent>
            </Card>

            {/* grid coding ended here  */}
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic2-2.jpg"
                alt="Paella dish"
              />
              <CardContent sx={{ textAlign: "left", my: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, color: "darkblue" }}
                >
                  Creative Director
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "tomato" }}
                >
                  Leo Simon
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  leosimon@gamil.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            {/* grid coding started from here  */}

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="https://gridvalley.net/wp/dronza/wp-content/uploads/2020/12/pic3-1.jpg"
                alt="Paella dish"
              />
              <CardContent sx={{ textAlign: "left", my: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, color: "darkblue" }}
                >
                  Photographer
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "tomato" }}
                >
                  John Casey
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  jhoncasey@gamil.com
                </Typography>
              </CardContent>
            </Card>

            {/* grid coding ended here  */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurTeam;

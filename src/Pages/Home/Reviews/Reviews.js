import { Container, Grid, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const Reviews = () => {
  const comments = [
    {
      displayName: "Jamil Ahmed",
      review: "It's the best one I have ever seen.",
      rating: 3.1,
    },
    {
      displayName: "Jonayed Ahmed",
      review: "It's the best one It's supper cool.",

      rating: 4.2,
    },
    {
      displayName: "Habib Ahmed",
      review: "Products quality are quite impressive comparing with price.",

      rating: 4.7,
    },
  ];
  return (
    <Container sx={{ my: 4 }}>
      <Box>
        <Typography variant="h4" gutterBottom component="div">
          Users Reviews
        </Typography>
        <Grid container spacing={2}>
          {comments.map((comment) => (
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom component="div">
                  {comment.displayName}
                </Typography>
                <Typography variant="subtitle" gutterBottom component="div">
                  {comment.review}
                </Typography>
                <Rating
                  name="text-feedback"
                  value={comment.rating}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Reviews;

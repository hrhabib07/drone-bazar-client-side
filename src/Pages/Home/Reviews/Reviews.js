import {
  CircularProgress,
  Container,
  Grid,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";

const Reviews = () => {
  const [comments, setComments] = useState();

  useEffect(() => {
    fetch("https://nameless-ridge-59413.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <Container sx={{ my: 4 }}>
      <Box>
        <Typography variant="h4" gutterBottom component="div">
          Users Reviews
        </Typography>
        {comments?.length ? (
          <Grid container spacing={2}>
            {comments?.map((comment) => (
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
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Container>
  );
};

export default Reviews;

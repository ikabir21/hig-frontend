import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import useStyles from './styles';

import Button from "@material-ui/core/Button";


const Post = ({ post }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.profile_link  || "https://images-na.ssl-images-amazon.com/images/I/91hFxTjgTSL._SL1500_.jpg"}
      />
      <CardContent className={classes.content}>
        <Typography variant={"h6"} gutterBottom >
          {post.name}
        </Typography>
        <Typography>
          {post.location}
        </Typography>
        <Divider className={classes.divider} light />
        <Button variant="contained" color="primary">
          More Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default Post;

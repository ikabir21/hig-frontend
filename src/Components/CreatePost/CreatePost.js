import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createPost } from "../../actions/posts";

const initialState = {
  name: "",
  profile_link: "",
  location: "",
  education: "",
  challenges_solved: 0,
  solutions_submitted: 0,
  solutions_accepted: 0,
  followers: 0,
  following: 0,
  competetive_profile: {
    data_structures: 0,
    algorithm: 0,
    cpp: 0,
    java: 0,
    python: 0,
    html: 0,
    javascript: 0,
  },
  vote_count: 0,
  device_type: "",
};

const CreatePost = () => {
  const [postData, setPostData] = useState(initialState);
  const [cpData, setCpData] = useState({
    data_structures: 0,
    algorithm: 0,
    cpp: 0,
    java: 0,
    python: 0,
    html: 0,
    javascript: 0,
  });
  // const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const classes = useStyles();

  // useEffect(() => {
  //   if (post) setPostData(post);
  // }, [post]);
  // (e) =>  setPostData({ ...postData, competetive_profile: {...cpData, javascript: e.target.value} })}
  // const handleChange = (e) => {
  //   setCpData({...cpData, javascript: e.target.value});
  //   setPostData({...postData, competetive_profile: cpData});
  // }
  const clear = () => {
    setPostData(initialState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    console.log(postData);
    clear();
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Creating new Hacker</Typography>
        <TextField
          name="Name"
          variant="outlined"
          label="Name"
          fullWidth
          value={postData.name}
          onChange={(e) => setPostData({ ...postData, name: e.target.value })}
        />
        <TextField
          name="Profile Link"
          variant="outlined"
          label="Profile Link"
          fullWidth
          value={postData.profile_link}
          onChange={(e) =>
            setPostData({ ...postData, profile_link: e.target.value })
          }
        />
        <TextField
          name="Education"
          variant="outlined"
          label="Education"
          fullWidth
          value={postData.education}
          onChange={(e) =>
            setPostData({ ...postData, education: e.target.value })
          }
        />
        <TextField
          name="Location"
          variant="outlined"
          label="Location"
          fullWidth
          value={postData.location}
          onChange={(e) =>
            setPostData({ ...postData, location: e.target.value })
          }
        />
        <Container style={{ padding: "0 10px" }}>
          <TextField
            value={postData.challenges_solved}
            name="challenges_solved"
            id="filled-number"
            label="Challenges Solved"
            type="number"
            variant="filled"
            onChange={(e) =>
              setPostData({ ...postData, challenges_solved: e.target.value })
            }
          />
          <TextField
            value={postData.solutions_submitted}
            name="solutions_submitted"
            id="filled-number"
            label="Solutions Submitted"
            type="number"
            variant="filled"
            onChange={(e) =>
              setPostData({ ...postData, solutions_submitted: e.target.value })
            }
          />
          <TextField
            value={postData.solutions_accepted}
            name="solutions_accepted"
            id="filled-number"
            label="Solutions Accepted"
            type="number"
            variant="filled"
            onChange={(e) =>
              setPostData({ ...postData, solutions_accepted: e.target.value })
            }
          />
          <TextField
            value={postData.followers}
            name="followers"
            id="filled-number"
            label="Follwers"
            type="number"
            variant="filled"
            onChange={(e) =>
              setPostData({ ...postData, followers: e.target.value })
            }
          />
          <TextField
            value={postData.following}
            name="following"
            id="filled-number"
            label="Follwing"
            type="number"
            variant="filled"
            onChange={(e) =>
              setPostData({ ...postData, following: e.target.value })
            }
          />
        </Container>
        <Typography variant="h5" style={{ margin: "2rem 0" }}>
          Competetive Profile(%)
        </Typography>
        <Container style={{ padding: "0 10px" }}>
          <TextField
            value={postData["competetive_profile"]["data_structures"]}
            name="data_structures"
            id="filled-number"
            label="Data Structures"
            type="number"
            variant="filled"
            onChange={(e) => {
              setCpData({ ...cpData, data_structures: e.target.value });
              setPostData({ ...postData, competetive_profile: cpData });
            }}
          />
          <TextField
            value={postData["competetive_profile"]["algorithm"]}
            name="algorithm"
            id="filled-number"
            label="Algorithm"
            type="number"
            variant="filled"
            onChange={(e) => {
              setCpData({ ...cpData, algorithm: e.target.value });
              setPostData({ ...postData, competetive_profile: cpData });
            }}
          />
          <TextField
            value={postData["competetive_profile"]["cpp"]}
            name="cpp"
            id="filled-number"
            label="C++"
            type="number"
            variant="filled"
            onChange={(e) => {
              setCpData({ ...cpData, cpp: e.target.value });
              setPostData({ ...postData, competetive_profile: cpData });
            }}
          />
          <TextField
            value={postData["competetive_profile"]["java"]}
            name="java"
            id="filled-number"
            label="Java"
            type="number"
            variant="filled"
            onChange={(e) => {
              setCpData({ ...cpData, java: e.target.value });
              setPostData({ ...postData, competetive_profile: cpData });
            }}
          />
          <TextField
            value={postData["competetive_profile"]["python"]}
            name="python"
            id="filled-number"
            label="Python"
            type="number"
            variant="filled"
            onChange={(e) => {
              setCpData({ ...cpData, python: e.target.value });
              setPostData({ ...postData, competetive_profile: cpData });
            }}
          />
          <TextField
            value={postData["competetive_profile"]["html"]}
            name="html"
            id="filled-number"
            label="Html"
            type="number"
            variant="filled"
            onChange={(e) => {
              setCpData({ ...cpData, html: e.target.value });
              setPostData({ ...postData, competetive_profile: cpData });
            }}
          />
          <TextField
            value={postData["competetive_profile"]["javascript"]}
            name="javascript"
            id="filled-number"
            label="Javascript"
            type="number"
            variant="filled"
            onChange={(e) => {
              setCpData({ ...cpData, javascript: e.target.value });
              setPostData({ ...postData, competetive_profile: cpData });
            }}
          />
        </Container>
        <Container style={{ padding: "0 10px" }}>
          <TextField
            value={postData.vote_count}
            name="vote_count"
            id="filled-number"
            label="No Of Votes"
            type="number"
            variant="filled"
            onChange={(e) =>
              setPostData({ ...postData, vote_count: e.target.value })
            }
          />
          <TextField
            value={postData.device_type}
            name="device_type"
            id="filled-number"
            label="Device type"
            type="text"
            variant="filled"
            onChange={(e) =>
              setPostData({ ...postData, device_type: e.target.value })
            }
          />
        </Container>
        {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div> */}
        <Container style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            style={{ width: "30%" }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={clear}
            style={{ width: "30%" }}
          >
            Clear
          </Button>
        </Container>
      </form>
    </Paper>
  );
};

export default CreatePost;

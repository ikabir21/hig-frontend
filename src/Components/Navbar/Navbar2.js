import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <>
    <Button component={Link} style={{marginBottom: "1rem"}} to="/posts/top3" variant="contained" color="primary">Show Top 3 Hackers</Button>
    <Button style={{marginBottom: "1rem", marginLeft: "0.5rem"}} component={Link} to="/" variant="contained" color="secondary">Posts</Button>
    </>
  )
}

export default Navbar2

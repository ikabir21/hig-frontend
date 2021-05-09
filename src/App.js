import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Navbar2 from './Components/Navbar/Navbar2';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import CreatePost from './Components/CreatePost/CreatePost';
import Top3 from './Components/Posts/Top3/Top3';
import SortedPosts from './Components/Posts/SortedPosts/SortedPosts';

const App = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Navbar2 />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/auth" component={() => <Auth isAdmin={false} />} exact />
          <Route path="/admin/login" component={() => <Auth isAdmin={true} />} exact />
          <Route path="/posts/create" component={CreatePost} exact />
          <Route path="/posts/top3" component={Top3} exact />
          <Route path="/posts/sort" component={SortedPosts} exact />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
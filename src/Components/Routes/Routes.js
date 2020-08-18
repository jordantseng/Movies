import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../../Pages/Home/Home';
import Popular from '../../Pages/Popular/Popular';
import UpComing from '../../Pages/UpComing/UpComing';
import NowPlaying from '../../Pages/NowPlaying/NowPlaying';
import TopRated from '../../Pages/TopRated/TopRated';
import NotFound from '../NotFound/NotFound';
import MovieDetail from '../../Pages/MovieDetail/MovieDetail';

const Routes = () => {
  return (
    <Switch>
      <Route path="/top-rated" component={TopRated} />
      <Route path="/now-playing" component={NowPlaying} />
      <Route path="/up-coming" component={UpComing} />
      <Route path="/popular" component={Popular} />
      <Route path="/movies/:id" component={MovieDetail} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/" exact component={Home} />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;

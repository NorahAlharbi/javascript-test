import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './index';
import New from './New';
import Edit from './Edit';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/music" component={Index}/>
      <Route exact path="/music/new" component={New}/>
      <Route exact path="/music/edit/:id" component={Edit}/>
    </Switch>
  );
}
 
export default Routes;
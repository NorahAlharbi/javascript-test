import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './index';
import New from './New';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route exact path="/new" component={New}/>
    </Switch>
  );
}
 
export default Routes;
import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import User from './user/user';

export default function Pages() {
  return (
    <Fragment>
      
        <Router primary={false} component={Fragment}>

        	<User path="user/:id" />
         
        </Router>
    </Fragment>
  );
}

import React from 'react';
import { connect } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
})=>(
<Route {...rest} component={(props)=>(
isAuthenticated ? (
<div>
   <Header history={history} />
  <Component { ...props} />
  </div>

)
: (<Redirect to="/"/>)
)}/>
)

const mapStateToProps = (state)=>({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)

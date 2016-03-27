var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var SalesContainer = require('../containers/SalesContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');



var routes =(
  <Router history={hashHistory}>
    <Route path = '/' component={Home}>
    // <IndexRoute component={Home}/>
    <Route path='sales' header= 'Sales Report' component={SalesContainer}/>
      <Route path='playerOne' header= 'Player One' component={PromptContainer}/>
      <Route path='playerTwo/:playerOne' header = 'Player Two' component={PromptContainer}/>
      <Route path='battle' header = 'Battle Ground' component={ConfirmBattleContainer}/>
    </Route>
  </Router>
);

module.exports = routes;

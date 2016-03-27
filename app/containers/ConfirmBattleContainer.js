var React = require('react');
var ReactDOM = require('react-dom');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utlils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    console.log("Get Initial State");
    return {
      isLoading:true,
      playersInfo:[]
    }
  },
  componentWillMount: function(){
    console.log("Component Will Mount");
  },
  componentDidMount:function(){
      var query = this.props.location.query;
      githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players){
      this.setState({
          isLoading:false,
            playersInfo: [players[0],players[1]]
              })
      }.bind(this))
  },
  componentWillReceiveProps: function(){
    console.log("componentWillReceiveProps");
  },
  componentWillUnmount: function(){
    console.log("componentWillUnMount");
  },
    render: function(){
        return(<div>
                <ConfirmBattle
                    isLoading={this.state.isLoading}
                    playersInfo = {this.state.playersInfo}/>
            </div>
            )
    }

});

module.exports = ConfirmBattleContainer;

var React = require('react');

function puke(object){
return  <pre>{JSON.stringify(object, null, 2)}</pre>;
}


function ConfirmBattle(props){
        return props.isLoading === true
        ? <p> LOADING! </p>
        : <div> CONFIRM BATTLE!: {puke(props)} </div>
}

module.exports = ConfirmBattle;

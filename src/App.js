var React = require('react');
var PlayersTableContainer = require('./containers/PlayersTableContainer');
var MainHeaderContainer = require('./containers/MainHeaderContainer');
var constant = require('./Constants');

import './App.css';

var totalScore = "11:12";

var App = React.createClass({
    render: function() {
        return <div className="app-wrap">
			<MainHeaderContainer totalScore={totalScore}/>
			<PlayersTableContainer name={"you"} modelKey={constant.YOU}/>
			<PlayersTableContainer name={"we"} modelKey={constant.WE}/>
			<div className="clearfix"/>
		</div>
    }
});

module.exports = App;

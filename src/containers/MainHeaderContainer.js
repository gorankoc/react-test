var React = require('react');
var MainMenuContainer = require('../containers/MainMenuContainer');

var MainHeaderContainer = React.createClass({
    render: function() {
        return (
            <div className="main-header">
            	<MainMenuContainer/>
            	<div>{this.props.totalScore}</div>
            </div>
        )
    }
});

module.exports = MainHeaderContainer;

var React = require('react');

var PlayersHeader = React.createClass({
    render: function() {
        return (
            <div className="players-header">{this.props.name}</div>
        )
    }
});

module.exports = PlayersHeader;

var React = require('react');
var ModelStore = require('../ModelStore');

var Total = React.createClass({
    getInitialState: function() {
        return {
            totalScore: ModelStore.getTotal()[this.props.modelKey]
        }
    },
    totalChanged: function() {
        this.setState({
            totalScore: ModelStore.getTotal()[this.props.modelKey]
        });
    },
    componentWillMount: function() {
        ModelStore.subscribeTotalChanged(this.totalChanged);
    },

    componentWillUnmount: function() {
        ModelStore.unsubscribeTotalChanged(this.totalChanged);
    },
    render: function() {
        return (
            <div className="player-total-score">
                <div>{this.state.totalScore}</div>
            </div>
        )
    }
});

module.exports = Total;

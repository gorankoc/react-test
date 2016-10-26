var React = require('react');
var ModelStore = require('../ModelStore');

var AddScore = React.createClass({
    getInitialState: function() {
        return {
            newScore: ''
        }
    },
    handleOnClick: function(e) {
        e.preventDefault();
        ModelStore.newScore(this.state.newScore, this.props.modelKey);
        this.props.onScoreAdded.call();
    },
    onAddScoreInputChange: function(e) {
        this.setState({
            newScore: e.target.value
        });
    },
    render: function() {
        return (
            <div className="score-add-popup green-box">
                <input type="text" onChange={this.onAddScoreInputChange}/>
                <button onClick={this.handleOnClick}>Dodaj</button>
            </div>
        )
    }
});

module.exports = AddScore;

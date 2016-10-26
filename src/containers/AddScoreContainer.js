var React = require('react');
var OpenAddScorePopup = require('../components/OpenAddScorePopup');
var AddScore = require('../components/AddScore');

var AddScoreContainer = React.createClass({
    getInitialState: function() {
        return {
            newScore: 0,
            showAddScore: false
        }
    },

    onAddScoreInputChange: function(e) {
        this.setState({
            newScore: e.target.value
        });
    },

    handleOpenAddScore: function() {
        this.setState({ showAddScore: true });
    },

    handlePointAdded: function(e) {
        this.setState({ showAddScore: false });
    },

    render: function() {
        return (
            <div>
                <OpenAddScorePopup onOpenAddScore={this.handleOpenAddScore}/>
                {
                    this.state.showAddScore ? <AddScore modelKey={this.props.modelKey} onScoreAdded={this.handlePointAdded}/> : null 
                }
            </div>
        )
    }
});

module.exports = AddScoreContainer;

var React = require('react');
var Score = require('../components/Score');
var AddScoreContainer = require('../containers/AddScoreContainer');
var PlayersHeader = require('../components/PlayersHeader');
var Total = require('../components/Total');
var ModelStore = require('../ModelStore');

function mapObject(object, callback) {
    return Object.keys(object).map(function(key) {
        return callback(key, object[key]);
    });
}

var PlayersTableContainer = React.createClass({
    getInitialState: function() {
        return {
            scores: ModelStore.getScores(),
            showAddScoreContainer: ModelStore.getButtonState()[this.props.modelKey]
        }
    },

    updateScores: function() {
        this.setState({
            scores: ModelStore.getScores()
        });
    },

    updateShowAddButton: function() {
        this.setState({
            showAddScoreContainer: ModelStore.getButtonState()[this.props.modelKey]
        });
    },

    componentWillMount: function() {
        ModelStore.subscribe(this.updateScores);
        ModelStore.subscribeHide(this.updateShowAddButton);
    },

    componentWillUnmount: function() {
        ModelStore.unsubscribe(this.updateScores);
        ModelStore.unsubscribeHide(this.updateShowAddButton);
    },

    render: function() {
        var we = this.props.modelKey;
        return (
            <div className="players-table">                 
                <PlayersHeader name={this.props.name}/>                
                {mapObject(this.state.scores, function (key, value) {
                    if(value[we] !== undefined){
                        return <Score score={value[we]} key={key}/>;                        
                    }
                })}        
                {
                    this.state.showAddScoreContainer ? <AddScoreContainer modelKey={this.props.modelKey}/> : null 
                }
                <Total modelKey={this.props.modelKey}/>
            </div>
        )
    }
});

module.exports = PlayersTableContainer;

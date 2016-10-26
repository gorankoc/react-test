var React = require('react');

var OpenAddScorePopup = React.createClass({
    test: function(e) {
        console.log("tets");
    },
    render: function() {
        return (
            <div className="add-button" onClick={this.props.onOpenAddScore}>+</div>
        )
    }
});

module.exports = OpenAddScorePopup;

var appModel = require('./appModel');
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var constant = require('./Constants');

var gamesById = appModel.gamesById;
var len = Object.keys(gamesById).length;

var buttonState = {
    [constant.WE]: true,
    [constant.YOU]: true
};

var totalPoints = {
    [constant.WE]: 0,
    [constant.YOU]: 0
}

updateTotal();

function hideBtn(modelKey) {
    buttonState[modelKey] = false;
    emitter.emit('updateButtonVisibility');
}

function showBtns() {
    buttonState[constant.WE] = true;
    buttonState[constant.YOU] = true;
    emitter.emit('updateButtonVisibility');
}

function newObj(score, modelKey) {
    len = Object.keys(gamesById).length;

    if (gamesById[constant.ABC + len][constant.WE] && gamesById[constant.ABC + len][constant.YOU] !== undefined) {
        var newRow = {};
        newRow[modelKey] = parseInt(score, 10);
        //newRow['total'] = 0;
        len++;
        gamesById[constant.ABC + len] = newRow;
        hideBtn(modelKey);
    } else {
        gamesById[constant.ABC + len][modelKey] = parseInt(score, 10);
    }

    if (gamesById[constant.ABC + len][constant.WE] && gamesById[constant.ABC + len][constant.YOU] !== undefined) {
        showBtns();
    }

    updateTotal();

    emitter.emit('totalChanged');
}

function updateTotal() {
    var totalWe = 0;
    var totalYou = 0;

    for (var i = 1; i <= Object.keys(gamesById).length; i++) {
        if (!checkEmpty(gamesById[constant.ABC + i][constant.WE])) {
            totalWe += gamesById[constant.ABC + i][constant.WE];
        }
        if (!checkEmpty(gamesById[constant.ABC + i][constant.YOU])) {
            totalYou += gamesById[constant.ABC + i][constant.YOU];
        }
    }
    totalPoints[constant.WE] = totalWe;
    totalPoints[constant.YOU] = totalYou;
}

function checkEmpty(o) {
    return (o === undefined || isNaN(o)) ? true : false;
}

var emitObject = {
    getScores: function() {
        return appModel.gamesById;
    },

    getButtonState: function() {
        return buttonState;
    },

    getTotal: function() {
        return totalPoints;
    },
    subscribeTotalChanged: function(callback) {
        emitter.on('totalChanged', callback);
    },
    unsubscribeTotalChanged: function(callback) {
        emitter.off('totalChanged', callback);
    },
    subscribe: function(callback) {
        emitter.on('update', callback);
    },

    subscribeHide: function(callback) {
        emitter.on('updateButtonVisibility', callback);
    },

    unsubscribeHide: function(callback) {
        emitter.off('updateButtonVisibility', callback);
    },

    unsubscribe: function(callback) {
        emitter.off('update', callback);
    },

    onHide: function() {
        emitter.emit('updateButtonVisibility');
    },

    newScore: function(score, modelKey) {
        newObj(score, modelKey);
        emitter.emit('update');
    },

    newTotal: function() {
        emitter.emit('totalChanged');
    }
};

module.exports = emitObject;

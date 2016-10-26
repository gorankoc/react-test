var appModel = {
    weAre: 'Mi',
    youAre: 'Vi',
    gamesById: {
        abc1: {
            we: 42,
            you: 140,
            total: 0
        },
        abc2: {
            we: 92,
            you: 110,
            total: 0
        },
    },
    setsById: {
        def1: {
            games: ['abc1', 'abc2'],
            winner: false / 'we' / 'you',
            we: 134,
            you: 250,
        }
    },
    sets: ['def1'],
    weScore: 0,
    youScore: 0,
    settings: {
        lang: 'en'
    }
}

module.exports = appModel;

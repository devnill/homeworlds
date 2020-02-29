const sacrificeInProgress = {
    state: {
        'bank': {
            'red': [3, 3, 3],
            'yellow': [3, 3, 3],
            'green': [3, 3, 3],
            'blue': [3, 3, 3]
        },
        'board': [],
        'players': ['player1', 'player2'],
        'activePlayer': 0,
        'history': [],
        'turn': {
            sacrifice: {
                color: 'blue',
                count: 3
            }
        }
    }
};

module.exports = { sacrificeInProgress };

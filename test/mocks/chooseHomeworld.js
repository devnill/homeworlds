
const valid = {
  action: {
    player: 'player1',
    stars: [{
      size: 3,
      color: 'blue'
    }, {
      size: 2,
      color: 'yellow'
    }],
    ships: [{
      size: 3,
      color: 'green',
      owner: 'player1'
    }]
  },
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
    'history': []
  },
  result: {
    'bank': {
      'red': [3, 3, 3],
      'blue': [3, 3, 2],
      'green': [3, 3, 2],
      'yellow': [3, 2, 3]
    },
    'board': [
      {
        'name': 'player1',
        'isHomeworld': true,
        'stars': [
          {
            'size': 3,
            'color': 'blue'
          },
          {
            'size': 2,
            'color': 'yellow'
          }
        ],
        'ships': [
          {
            'size': 3,
            'color': 'green',
            'owner': 'player1'
          }
        ]
      }
    ],
    'players': [
      'player1',
      'player2'
    ],
    'activePlayer': 0,
    'history': [
      /*{
        'action': 'chooseHomeworld',
        'args': {
          'player': 'player1',
          'stars': [
            {
              'size': 3,
              'color': 'blue'
            },
            {
              'size': 2,
              'color': 'yellow'
            }
          ],
          'ships': [
            {
              'size': 3,
              'color': 'green'
            }
          ]
        }
      }*/
    ]
  }
};

const insufficentPieces = {
  action: {
    player: 'player1',
    stars: [{
      size: 3,
      color: 'blue'
    }, {
      size: 2,
      color: 'blue'
    }],
    ships: [{
      size: 3,
      color: 'blue'
    }]
  },
  state: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [3, 3, 3],
      'green': [3, 3, 3],
      'blue': [0, 0, 0]
    },
    'board': [],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'history': []
  }
};

module.exports = { valid, insufficentPieces };




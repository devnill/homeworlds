const historyMock = [{
  'action': 'move',
  'args': {
    'player': 'player1',
    'from': {
      'id': 2
    },
    'to': {
      'id': 1
    },
    'ship': {
      'id': 4
    }
  },
  'patch': [
    {
      'op': 'replace',
      'path': '/bank/yellow/1',
      'value': 0
    },
    {
      'op': 'replace',
      'path': '/board/0/id',
      'value': 2
    },
    {
      'op': 'replace',
      'path': '/board/0/name',
      'value': 'Sol'
    },
    {
      'op': 'replace',
      'path': '/board/0/stars/0/color',
      'value': 'yellow'
    },
    {
      'op': 'replace',
      'path': '/board/0/stars/0/size',
      'value': 2
    },
    {
      'op': 'remove',
      'path': '/board/0/ships/0'
    },
    {
      'op': 'add',
      'path': '/board/0',
      'value': {
        'id': 1,
        'name': 'Andoria',
        'stars': [
          {
            'color': 'blue',
            'size': 1
          }
        ],
        'ships': [
          {
            'id': 5,
            'color': 'yellow',
            'size': 1,
            'owner': 'player2'
          }
        ]
      }
    }
  ]
}];
module.exports = historyMock;
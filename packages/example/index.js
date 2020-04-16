const homeworlds = require('homeworlds');
const blessed = require('blessed');
// console.log(homeworlds)
// console.log())

const inquirer = require('inquirer');

const views = {
  homescreen: function () {
    inquirer.prompt([{
      type: 'list',
      name: 'menu',
      message: '(homescreen)',
      choices: ['createGame', 'loadGame', 'exit']
    }]).then(val => {
      if (val.menu === 'createGame') {

        views.createGame()
      }
      if (val.menu === 'loadGame') {
        // todo
        process.exit(0)
      }
      if (val.menu === 'exit') {
        return process.exit(0)
      }
    }).catch((e) => {
      console.log(arguments, e)
    });
  },
  createGame: function () {
    console.log('yeee')
    inquirer.prompt([{
      type: 'input',
      name: 'player1',
      message: "Player 1 name"
    }, {
      type: 'input',
      name: 'player2',
      message: "Player 2 name"
    }, {
      type: 'list',
      name: 'action',
      choices: ['start', 'back']
    }]).then(answer => {
      if (answer.action === 'back') {
        return displayMenu('homescreen');
      }
      return views.game([answer.player1, answer.player2]);
    }).catch((e) => {
      console.log(arguments, e)
    });
  },
  game: function (players) {
    console.log(`starting game with ${players.join(' and ')}`);
    const state = homeworlds.create.state(players);
    // Create a screen object.
    var screen = blessed.screen({
      smartCSR: true
    });

    screen.title = 'my window title';

    // Create a box perfectly centered horizontally and vertically.
    var box = blessed.box({
      top: 'center',
      left: 'center',
      width: '50%',
      height: '50%',
      content: 'Hello {bold}world{/bold}!',
      tags: true,
      border: {
        type: 'line'
      },
      style: {
        fg: 'white',
        bg: 'magenta',
        border: {
          fg: '#f0f0f0'
        },
        hover: {
          bg: 'green'
        }
      }
    });

    // Append our box to the screen.
    screen.append(box);

    // Add a png icon to the box
    var icon = blessed.image({
      parent: box,
      top: 0,
      left: 0,
      type: 'overlay',
      width: 'shrink',
      height: 'shrink',
      file: __dirname + '/my-program-icon.png',
      search: false
    });

    // If our box is clicked, change the content.
    box.on('click', function (data) {
      box.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
      screen.render();
    });

    // If box is focused, handle `enter`/`return` and give us some more content.
    box.key('enter', function (ch, key) {
      box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
      box.setLine(1, 'bar');
      box.insertLine(1, 'foo');
      screen.render();
    });

    // Quit on Escape, q, or Control-C.
    screen.key(['escape', 'q', 'C-c'], function (ch, key) {
      return process.exit(0);
    });

    // Focus our element.
    box.focus();

    // Render the screen.
    screen.render();
  }
}

views.homescreen();
// const homeworlds = require('homeworlds');
// const blessed = require('blessed');
// console.log(homeworlds)
// console.log(homeworlds.create.state(['jim', 'bob']))

const inquirer = require('inquirer');

const views = {
  homescreen: function(){
    inquirer.prompt([{
      type: 'list',
      name: 'menu',
      message: '(homescreen)',
      choices: ['createGame', 'loadGame', 'exit']
    }]).then(val => {
      if(val.menu === 'createGame'){
      
          views.createGame()
        }
        if(val.menu === 'loadGame'){
          // todo
          process.exit(0)
        }
        if(val.menu === 'exit'){
          return process.exit(0)
        }       
    }).catch((e)=>{
      console.log(arguments, e)
    });
  },
  createGame: function(){
    console.log('yeee')
    inquirer.prompt([{
      type: 'input',
      name: 'player1',
      message: "Player 1 name"
    },{
      type: 'input',
      name: 'player2',
      message: "Player 2 name"
    },{
      type: 'list',
      name: 'action',
      choices: ['start', 'back']
    }]).then(answer => {
      if(answer.action==='back'){
        return displayMenu('homescreen');
      }
      return views.game([answer.player1, answer.player2]);
    }).catch((e)=>{
      console.log(arguments, e)
    });
  },
  game: function(players){
    console.log(`starting game with ${players.join(' and ')}`);
  }
}

views.homescreen();



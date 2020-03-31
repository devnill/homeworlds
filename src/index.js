const {normalize} = require('./util/');

const action = {
  getAvailable,
  perform
} = util.action;

const create = {
  ship(args){
    return normalize.ship(args);
  },
  star(args){
    return normalize.star(args);
  },
  system(args){
    return normalize.system(args);
  },
  state(args){
    return normalize.state(args);
  }
};

module.export = {
  action,
  create
};
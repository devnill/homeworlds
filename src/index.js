const util = require('./util/');

const action = {
  getAvailable,
  perform
} = util.action;

const create = {
  ship({color, size, owner}){},
  star({color, size}){},
  system({name, stars, ships, isHomeworld}){},
  state({players}){}
};

module.export = {
  action,
  create
};
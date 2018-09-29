
//todo
function getId(){return 1;};

class Pyramid {
    constructor(opts){
        this.size  = opts.size;//0|1|2
        this.type  = opts.type,//ship|star
        this.color = opts.color,//blue|green|red|yellow,
        this.sid   = opts.sid
    }
};

class Ship extends Pyramid{
    constructor(opts){
        super(opts);
        this.uid = opts.uid;
    }
};

class Star extends Pyramid{
    constructor(opts){
        super(opts);
    }
}

class System{
    constructor(opts){
        this.name = _getName();
        this.sid  = getId('system');
        this.star = Array.isArray(opts.star)?opts.star:[opts.star];
        this.ships = {};
        function _getName(){
            return 'sol';
        }
    }
    isOverpopulated(color){

    }
    hasShip(player, color){}
}

class Homeworld extends System{
    constructor(opts){
        super(opts);
        this.owner = opts.owner;
    }
}

class Player
{
    constructor(opts){
        //catastrophy
        this.name= opts.name;
        this.uid = getId('player'),
        this.homeworld = new Homeworld(opts.homeworld);
        Object.assign(this, actions);
    }    
}

class Bank{
    constructor(opts){
        this._red    = {};
        this._yellow = {};
        this._green  = {};
        this._blue   = {};
    }
    getSmallestPyramid(color){

    }
    getPyramid(color, size){

    }
    givePyramid(color, size){

    }
    has(color, size){

    }
}

const actions = {
    grow({system, color}){},
    move(system, target, destination){},
    attack(system, target){},
    transform(system, target, color){},
    sacrifice(ship){},
}




export default {
    Player,
    Homeworld,
    Ship
}


/*
class turn
{
    sid: Player:sid
    actions: [string...];
}

class Bank{}

*/




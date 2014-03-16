// Generated by LiveScript 1.2.0
(function(){
  var MyRobot, tr;
  importScripts('../base-robot.js');
  MyRobot = (function(superclass){
    var prototype = extend$((import$(MyRobot, superclass).displayName = 'MyRobot', MyRobot), superclass).prototype, constructor = MyRobot;
    prototype.onIdle = function(){
      this.move_forwards(50);
      this.turn_turret_left(10);
      this.turn_right(90);
    };
    prototype.onWallCollide = function(){
      this.move_opposide(10);
      this.turn_left(90);
    };
    prototype.onHit = function(){
      this.yell("Oops!a");
    };
    prototype.onEnemySpot = function(){
      this.yell("Fire!");
      this.shoot();
    };
    function MyRobot(){
      MyRobot.superclass.apply(this, arguments);
    }
    return MyRobot;
  }(BaseRobot));
  tr = new MyRobot("MyRobot");
  function extend$(sub, sup){
    function fun(){} fun.prototype = (sub.superclass = sup).prototype;
    (sub.prototype = new fun).constructor = sub;
    if (typeof sup.extended == 'function') sup.extended(sub);
    return sub;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);

/*  experimental idea */
window.PlayerCharacter = function(name) {
  if (v.gameObjects.has(name)) {
    alert("Name already taken");
    return;
  } else {
    this.ID = name;
    this.XP = 0;
    this.HP = 6;
    this.Level = 1;
    v.gameObjects.add(name);
    return this;
  }
};

/*  main code */
window.PlayerCharacter = function() {
  this.XP = 0;
  this.HP = 6;
  this.Level = 1;
};

PlayerCharacter.prototype.markXP = function() {
  if (this.XP < 5) {
    this.XP += 1;
    if (this.XP == 5) {
      this.Level = 2;
    }
  }
};

PlayerCharacter.prototype._init = function(obj) {
  Object.keys(obj).forEach(function (pn) {
    this[pn] = clone(obj[pn]);
  }, this);
  return this;
};

PlayerCharacter.prototype.clone = function () {
  return (new PlayerCharacter())._init(this);
};

PlayerCharacter.prototype.toJSON = function () {
  var newPC = {};
  Object.keys(this).forEach(function (pn) {
    newPC[pn] = clone(this[pn]);
  }, this);
  return JSON.reviveWrapper('(new PlayerCharacter())._init($ReviveData$)', newPC);
};

<<set $jimmy = new PlayerCharacter()>>
/* Jimmy's been cursed */
<<script>>
  Story.variables.jimmy.markXP = function() {
    if (this.HP > 2) {
      this.HP -= 1;
    }
  }
<</script>>
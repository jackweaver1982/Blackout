/*  creates a variable `varName` which is a clone of `ClassName`, then sets its
    id to `varName` and adds it to the set of game objects, `gameObjects` */
setup.make = function(varName, ClassName) {
  if (v.gameObjects.has(varName)) {
    alert("setup.make() is trying to create `" + varName +"`, which already exists");
    return;
  } else {
    v[varName] = clone(v[ClassName]);
    v[varName].id = varName;
    v.gameObjects.add(varName);
    return;
  }
}

/*  check type */
setup.checkType = function(obj, type) {
  do {
    if (v[obj].type == type || v[obj].parent == type) {
      return true;
    } else {
      obj = v[obj].parent;
    }
  } while (obj !== "none");
  return false;
}

/*  getters */

  /*  update the array of what the player has discovered */
  setup.getDiscovered = function() {
    v.hasDiscovered.clear();
    function checkDiscovered(val1, val2, set) {
      if (setup.checkType(val1, "Thing") && v[val1].discovered == true) {
        v.hasDiscovered.add(val1);
      }
    }
    v.gameObjects.forEach(checkDiscovered);
    return;
  }

  /*  update the array of what the player has handled */
  setup.getHandled = function() {
    v.hasHandled.clear();
    function checkHandled(val1, val2, set) {
      if (setup.checkType(val1, "Thing") && v[val1].handled == true) {
        v.hasHandled.add(val1);
      }
    }
    v.gameObjects.forEach(checkHandled);
    return;
  }

/*  setters */

  /*  mark XP */
  setup.markXP = function() {
    /*  return codes: 0 = no follow-up needed, 1 = leveled up */
    let ret = 0;
    if (v.player.XP < 5) {
      v.player.XP++;
      if (v.player.XP == 5) {
        ret = 1;
        v.player.Level = 2;
        if (!v.injuries.delete("headache")) {
          alert("leveled up without a headache");
        }
        v.player.DEX += 1;
      }
    }
    return ret;
  }

  /*  manually add 1 XP, looping back to 0 after 5 and adjusting level as
      needed */
  setup.addXP = function() {
    v.player.XP = (v.player.XP + 1) % 6;
    if (v.player.XP == 5) {
      v.player.Level = 2;
      v.injuries.delete("headache");
    } else if (v.player.XP == 0) {
      v.player.Level = 1;
      v.injuries.add("headache");
    }
    Engine.show();
    return;
  }

  /*  add injury and take damage */
  setup.addInjury = function(injury) {
    /*  return codes: 0 = no follow-up needed, 1 = died, 2 = warn */
    let ret = 0;
    if (v.injuries.has(injury)) {
      alert("setup.addInjury() tried adding a duplicate injury");
    } else {
      v.injuries.add(injury);
      v.player.HP -= v[injury].damage;
      if (v.player.HP == 1) {
        ret = 2;
      }
      if (v.player.HP <= 0) {
        ret = 1;
      }
    }
    return ret;
  }

  /*  manually remove 1 HP, looping back to 5 after 1 */
  setup.removeHP = function() {
    v.player.HP -= 1;
    if (v.player.HP < 1) {
      v.player.HP = 5;
    }
    Engine.show();
    return;
  }

  /*  mark thing as discovered */
  setup.discoverThing = function(thing) {
    if (!setup.checkType(thing, "Thing")) {
      alert("setup.discoverThing() tried marking an object which was not a Thing");
    } else {
      if (!v[thing].discovered) {
        v[thing].discovered = true;
        v[thing].discoveredWhen = turns();
        setup.getDiscovered();
      }
    }
    return;
  }

  /*  mark thing as handle */
  setup.handleThing = function(thing) {
    if (!setup.checkType(thing, "Thing")) {
      alert("setup.handleThing() tried marking an object which was not a Thing");
    } else {
      v[thing].handled = true;
      setup.getHandled();
    }
    return;
  }

  /*  put thing in inventory */
  setup.takeThing = function(thing) {
    if (v.inventory.has(thing)) {
      alert("setup.takeThing() tried taking a thing already in inventory");
    } else {
      setup.discoverThing(thing);
      setup.handleThing(thing);
      v.inventory.add(thing);
    }
    return;
  }

  /*  move everything but clothes from inventory to inventoryLost */
  setup.takeInventory = function() {
    for (var thing of v.inventory) {
      if (thing !== "clothes") {
        v.inventory.delete(thing);
        v.inventoryLost.add(thing);
      }
    }
    return;
  }

  /*  adjusts the player's REL stat with `NPC` by n */
  setup.adjustREL = function(NPC, n) {
    if (!Object.keys(v.player.REL).includes(NPC)) {
      v.player.REL[NPC] = 0;
    }
    v.player.REL[NPC] = (v.player.REL[NPC] + n).clamp(-1,3);
    return;
  }
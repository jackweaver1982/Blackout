/*  the dice rolling function */
setup.roll = function() {
  v.rollCount++;
  if (!settings.debug || v.diceMethod == "random") {
    let die1 = Math.floor(6*Math.random()) + 1;
    let die2 = Math.floor(6*Math.random()) + 1;
    return die1 + die2;
  } else {
    return v.diceMethod;
  }
}

/*  rolls the dice with the given modifier, conditioned not to have the given
    outcome (0 = fail, 1 = mixed, 2 = success) */
setup.rollSpecial = function(mod, omit) {
  let counts = [0, 0, 0];
  let ret = 0;
  for (let i = 2; i <= 12; i++) {
    if (i + mod <= 6) {
      counts[0] += 6 - Math.abs(i - 7);
    } else if (i + mod <= 9) {
      counts[1] += 6 - Math.abs(i - 7);
    } else {
      counts[2] += 6 - Math.abs(i - 7);
    }
  }
  counts[omit] = 0;
  let total = counts[0] + counts[1] + counts[2];
  let x = Math.floor(total*Math.random()) + 1
  if (x <= counts[0]) {
    ret = 0;
  } else if (x <= counts[0] + counts[1]) {
    ret = 1;
  } else {
    ret = 2;
  }
  return ret;
}

/*  replaces the HTML element with the given `id` (default is "end") by
    `objDescription` */
setup.examine = function(objDescription, id) {
  let txt = jQuery("#" + (id || "end")).html();
  jQuery(".description").empty()
  jQuery("#" + (id || "end")).wiki(objDescription);
  if (txt == jQuery("#" + (id || "end")).html()) {
    jQuery("#" + (id || "end")).empty();
  }
  return;
}

/*  entering menus in the right pattern will activate debug mode. This
    function checks for it every time you enter a menu screen. */
setup.visitMenu = function(psgName) {
  if (turns() != v.lastMenuTurn) {
    v.cheatCode = [1, 1, 1, 1, 1, 1, 1];
    v.lastMenuTurn = turns();
  }
  v.cheatCode.push(psgName == "help" ? 0 : 1);
  v.cheatCode.shift();
  if (JSON.stringify(v.cheatCode) == "[0,0,1,0,1,0,0]") {
    settings.debug = !settings.debug;
    Setting.save();
    if (settings.debug) {
      UIBar.unstow().show();
    } else {
      UIBar.hide().stow();
    }
    Engine.play(psgName, true);
  }
  return;
}

/*  save game */
setup.saveGame = function() {
  if (!Save.slots.has(0)) {
    if (confirm("Save bookmark? You are allowed only one.\n\n(If you just want to quit and resume later, you should not need to save. See the help section for details.)")) {
      Save.slots.save(0);
    }
  } else {
    alert("Bookmark used already. Restart to delete current bookmark.")
  }
  return;
}

/*  load game */
setup.loadGame = function() {
  if (!Save.slots.has(0)) {
    alert("No bookmark to load.");
  } else {
    if (confirm("Load bookmark?")) {
      Save.slots.load(0);
    }
  }
  return;
}
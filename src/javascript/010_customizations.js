setup.lastEdited = "2019-01-20-1000";
setup.versionNumber = 103;

setup.calcVersion = function(num) {
  let main = Math.floor(num/100);
  let sub = num % 100;
  return main + '.' + sub;
}

setup.version = setup.calcVersion(setup.versionNumber);

/*  make "v" a shortcut for "State.variables",
 *  which is equivalent to "variables()" */
Object.defineProperty(window, "v", {
  get: function() {
    return State.variables;
  }
});

/*  make "t" a shortcut for "State.temporary",
 *  which is equivalent to "temporary()" */
Object.defineProperty(window, "t", {
  get: function() {
    return State.temporary;
  }
});

/*  make "s" a shortcut for "setup" */
Object.defineProperty(window, "s", {
  get: function() {
    return setup;
  }
});

/*  sets all passages to `nobr` */
Config.passages.nobr = true;

/*  add debug mode to settings */
Setting.addToggle("debug", {
  label: "debug mode"
});

/*  add beta mode to settings */
Setting.addToggle("beta", {
  label: "beta mode",
  default: true
});

/*  enable autosaves and autoloading */
Config.saves.autosave = true;
Config.saves.autoload = function () {
  return settings.debug;
};

/*  disallow saves on the starting and intro passages */
Config.saves.isAllowed = function() {
  if (passage() == "Start" || passage() == "intro") {
    return false;
  } else {
    return true;
  }
}

/*  use passage titles for save files */
Config.passages.descriptions = true;

/*  sets a maximum of one save slot */
/*  Config.saves.slots = 1; */

/*  add custom save naming to settings */
Setting.addToggle("nameSaves", {
  label   : "custom save names",
  default : true
});

/*  enable custom naming of saves */
Config.saves.onSave = function(save) {
  if (Dialog.isOpen("saves") && settings.nameSaves) {
    save.title = prompt("Name of this save file:", passage());
  }
  return;
}

/*  set version number of saves */
Config.saves.version = setup.versionNumber;

/*  check compatibility of save file */
s.checkSave = function(save) {
  return (save.version == setup.versionNumber);
}
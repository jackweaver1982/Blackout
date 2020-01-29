// the JS related to the bookmark system and the autosave system
//
// requires `debug` and `version`

/*  enable autosaves and autoloading */
Config.saves.autosave = true;
Config.saves.autoload = function () {
  return ss.debug;
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

/*  add custom save naming to settings */
Setting.addToggle("nameSaves", {
  label   : "custom save names",
  default : true
});

/*  enable custom naming of saves */
Config.saves.onSave = function(save) {
  if (Dialog.isOpen("saves") && ss.nameSaves) {
    save.title = prompt("Name of this save file:", passage());
  }
  return;
}

/*  save game */
s.saveGame = function() {
  if (!Save.slots.has(0)) {
    if (confirm("Save bookmark? You are allowed only one.\n\n(If you just want to quit and resume later, you should not need to save. See the info screen for details.)")) {
      Save.slots.save(0);
    }
  } else {
    alert("Bookmark used already. Restart to delete current bookmark.")
  }
  return;
}

/*  load game */
s.loadGame = function() {
  if (!Save.slots.has(0)) {
    alert("No bookmark to load.");
  } else {
    if (confirm("Load bookmark?")) {
      Save.slots.load(0);
    }
  }
  return;
}

/*  set version number of saves */
Config.saves.version = s.versionNumber;

/*  check compatibility of save file */
s.checkSave = function(save) {
  return (save.version == s.versionNumber);
}

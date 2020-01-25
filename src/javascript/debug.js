// debug

/*  add debug mode to settings */
Setting.addToggle("debug", {
  label: "debug mode"
});

/*  entering menus in the right pattern will activate debug mode. This
    function checks for it every time you enter a menu screen. */
s.visitMenu = function(psgName) {
  if (turns() != v.lastMenuTurn) {
    v.cheatCode = [1, 1, 1, 1, 1, 1, 1];
    v.lastMenuTurn = turns();
  }
  v.cheatCode.push(psgName == "help" ? 0 : 1);
  v.cheatCode.shift();
  if (JSON.stringify(v.cheatCode) == "[0,0,1,0,1,0,0]") {
    ss.debug = !ss.debug;
    Setting.save();
    if (ss.debug) {
      UIBar.unstow().show();
    } else {
      UIBar.hide().stow();
    }
    Engine.play(psgName, true);
  }
  return;
}

/*  get the current passage, regardless of whether saving to history or not */
$(document).on(':passageinit', function (ev) {
  v.curPassage = ev.passage;
});

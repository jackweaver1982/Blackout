// requires: _standard.js
//
// This file adds a beta mode to settings, so items in the game can be
// shown/activated conditional on whether beta mode is on or off. It
// also offers a place to store a url for a beta testing feedback form.

s.betaFormURL = 'https://forms.gle/uYARf1LTzRgRantZA';

Setting.addToggle("beta", {
  label: "beta mode",
  default: true
});

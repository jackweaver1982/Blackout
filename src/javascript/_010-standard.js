// This is a collection of standard code to include in all projects:
// `nobr` on every passage and shortcuts/aliases for `setup`,
// `settings`, and accessing story and temporary variables in
// JavaScript.
//
// This file should be the first file passed to Tweego. All other files
// will depend on it, since they will make use of the shortcuts/aliases
// contained here.

// sets all passages to `nobr`
Config.passages.nobr = true;

// make `s` a shortcut for `setup`
Object.defineProperty(window, "s", {
  get: function() {
    return setup;
  }
});

// make `ss` a shortcut for `settings`
Object.defineProperty(window, "ss", {
  get: function() {
    return settings;
  }
});

// make `v` a shortcut for `State.variables`, which is equivalent to
// `variables()`
Object.defineProperty(window, "v", {
  get: function() {
    return State.variables;
  }
});

// make `t` a shortcut for `State.temporary`, which is equivalent to
// `temporary()`
Object.defineProperty(window, "t", {
  get: function() {
    return State.temporary;
  }
});

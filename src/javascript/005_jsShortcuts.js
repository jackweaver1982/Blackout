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
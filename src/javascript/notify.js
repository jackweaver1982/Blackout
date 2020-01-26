// JS related to the system of providing notification for changes to the
// character sheet

/*  add bio notifications to settings */
Setting.addToggle("bioNotify", {
  label: "bio notifications",
  default: true
});

s.setDiff = function(set1, set2) {
  // returns the set difference, set1 - set2, for sets of primitive
  // values
  let diff = new Set(set1);
  set1.forEach(function(elem) {
    if (set2.has(elem)) {
      diff.delete(elem);
    }
  });
  return diff;
}

s.isSubset = function(set1, set2) {
  //returns true is set1 is a subset of set2, for sets of primitive
  // values
  return (s.setDiff(set1, set2).size === 0);
}

s.equal = function(set1, set2) {
  // returns true if set1 equals set2, for sets of primitive values
  return (set1.size === set2.size && s.isSubset(set1, set2));
}

s.getCurView = function() {
  // retrieves the current view object
  v.curView.Level = v.player.Level;
  v.curView.injuries = clone(v.injuries);
  v.curView.HP = v.player.HP;
  v.curView.inventory = clone(v.inventory);
  v.curView.knowledge = clone(v.knowledge);
  return v.curView;
}

/*  update the lastView variable to the current bioView */
s.updateLastView = function() {
  v.lastView = clone(s.getCurView());
  return;
}

s.getViewDiff = function() {
  // computes the view differences
  s.getCurView();

  v.viewDiff.lvlDiff = v.curView.Level - v.lastView.Level;

  v.viewDiff.injuries.gained = s.setDiff(v.curView.injuries,
    v.lastView.injuries);
  v.viewDiff.injuries.lost = s.setDiff(v.lastView.injuries,
    v.curView.injuries);
  
  v.viewDiff.HPDiff = v.lastView.HP - v.curView.HP;
  
  v.viewDiff.inventory.gained = s.setDiff(v.curView.inventory,
    v.lastView.inventory);
  v.viewDiff.inventory.lost = s.setDiff(v.lastView.inventory,
    v.curView.inventory);
  
  v.viewDiff.knowledge.gained = s.setDiff(v.curView.knowledge,
    v.lastView.knowledge);
  v.viewDiff.knowledge.lost = s.setDiff(v.lastView.knowledge,
    v.curView.knowledge);
}

/*  check if the bio has changed since last viewing it */
s.bioChanged = function() {
  if (v.lastView.Level !== v.player.Level ||
      !s.equal(v.lastView.injuries, v.injuries) ||
      v.lastView.HP !== v.player.HP ||
      !s.equal(v.lastView.inventory, v.inventory) ||
      !s.equal(v.lastView.knowledge, v.knowledge)) {
    return true;
  } else {
    return false;
  }
}

/*  sets the CSS style for a bio notification */
s.bioStyle = function(bool) {
  if (ss.bioNotify && bool) {
    return 'changes';
  } else {
    return '';
  }
}
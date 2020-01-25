// notifications

/*  add bio notifications to settings */
Setting.addToggle("bioNotify", {
  label: "bio notifications",
  default: true
});

/*  check if one set is a subset of another */
s.isSubset = function(set1, set2) {
  for (var x of set1) if (!set2.has(x)) return false;
  return true;
}

/*  check if two sets are equal */
s.eqSet = function(set1, set2) {
    if (set1.size !== set2.size) return false;
    return s.isSubset(set1, set2);
}

/*  update the bioLastViewed variable to the current bioView */
s.updateBioView = function() {
  v.bioLastViewed = {
    Level: v.player.Level,
    injuries: clone(v.injuries),
    HP: v.player.HP,
    inventory: clone(v.inventory),
    knowledge: clone(v.knowledge)
  }
  return;
}

/*  check if the bio has changed since last viewing it */
s.bioChanged = function() {
  if (v.bioLastViewed.Level != v.player.Level ||
      !s.eqSet(v.bioLastViewed.injuries, v.injuries) ||
      v.bioLastViewed.HP != v.player.HP ||
      !s.eqSet(v.bioLastViewed.inventory, v.inventory) ||
      !s.eqSet(v.bioLastViewed.knowledge, v.knowledge)) {
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
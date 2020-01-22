/*	check if one set is a subset of another */
setup.isSubset = function(set1, set2) {
	for (var x of set1) if (!set2.has(x)) return false;
	return true;
}

/*  check if two sets are equal */
setup.eqSet = function(set1, set2) {
    if (set1.size !== set2.size) return false;
    return s.isSubset(set1, set2);
}

/*	update the bioLastViewed variable to the current bioView */
setup.updateBioView = function() {
	v.bioLastViewed = {
    Level: v.player.Level,
    injuries: clone(v.injuries),
    HP: v.player.HP,
    inventory: clone(v.inventory),
    knowledge: clone(v.knowledge)
  }
  return;
}

/*	check if the bio has changed since last viewing it */
setup.bioChanged = function() {
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

/*	sets the CSS style for a bio notification */
setup.bioStyle = function(bool) {
	if (ss.bioNotify && bool) {
		return 'changes';
	} else {
		return '';
	}
}
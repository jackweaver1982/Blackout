/*  check if two sets are equal */
setup.eqSet = function(set1, set2) {
    if (set1.size !== set2.size) return false;
    for (var x of set1) if (!set2.has(x)) return false;
    return true;
}


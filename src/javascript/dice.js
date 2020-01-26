// JS related to the PbtA-style dice rolling

/*  the dice rolling function */
setup.roll = function() {
  v.rollCount++;
  if (!settings.debug || v.diceMethod == "random") {
    let die1 = Math.floor(6*Math.random()) + 1;
    let die2 = Math.floor(6*Math.random()) + 1;
    return die1 + die2;
  } else {
    return v.diceMethod;
  }
}

/*  rolls the dice with the given modifier, conditioned not to have the given
    outcome (0 = fail, 1 = mixed, 2 = success) */
setup.rollSpecial = function(mod, omit) {
  let counts = [0, 0, 0];
  let ret = 0;
  for (let i = 2; i <= 12; i++) {
    if (i + mod <= 6) {
      counts[0] += 6 - Math.abs(i - 7);
    } else if (i + mod <= 9) {
      counts[1] += 6 - Math.abs(i - 7);
    } else {
      counts[2] += 6 - Math.abs(i - 7);
    }
  }
  counts[omit] = 0;
  let total = counts[0] + counts[1] + counts[2];
  let x = Math.floor(total*Math.random()) + 1
  if (x <= counts[0]) {
    ret = 0;
  } else if (x <= counts[0] + counts[1]) {
    ret = 1;
  } else {
    ret = 2;
  }
  return ret;
}


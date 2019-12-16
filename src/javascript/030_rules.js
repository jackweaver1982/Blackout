/*  fail rule in Bedroom */
setup.bedroomFail = function() {
  let retVals = [1,2];
  let retVal = -1;
  let levelUp = setup.markXP();
  if (levelUp == 1) {
    alert("unexpected level up");
  }
  if (v.rollCount == 1 && v.pounding) {
    retVal = setup.generalSoftFail();
  } else {
    v.pounding = false;
    v.crowbar = false;
    v.containedIn.set("detective", "bedroom");
    retVal = 2;
  }
  if (!retVals.includes(retVal)) {
    alert("bedroomFail() tried to return " + retVal + ", which is not one of the expected return values");
  }
  return retVal;
}

/*  tackled rule in Cops bust in */
setup.copsBustInTackled = function() {
  let retVals = [5,8];
  let retVal = -1;
  let death = setup.addInjury("concussion");
  if (death == 1) {
    alert("unexpected death");
  }
  if (death == 2) {
    alert("unexpected low health");
  }
  if (v.knowledge.has("bumStuff")) {
    v.containedIn.set("player","copCar");
    v.copCar.traveledIn = true;
    retVal = 5;
  } else {
    retVal = 8;
  }
  if (!retVals.includes(retVal)) {
    alert("copsBustInTackled() tried to return " + retVal + ", which is not one of the expected return values");
  }
  return retVal;
}

/*  shot rule in Cops bust in */
setup.copsBustInShot = function() {
  let retVals = [6,9];
  let retVal = -1;
  setup.adjustREL("detective", -1);
  let death = setup.addInjury("gunshotShoulder");
  if (death == 1) {
    alert("unexpected death");
  }
  if (death == 2) {
    alert("unexpected low health");
  }
  if (v.knowledge.has("bumStuff")) {
    v.containedIn.set("player","ambulance");
    v.ambulance.traveledIn = true;
    retVal = 6;
  } else {
    retVal = 9;
  }
  if (!retVals.includes(retVal)) {
    alert("copsBustInShot() tried to return " + retVal + ", which is not one of the expected return values");
  }
  return retVal;
}

/*  low roll rule in Bathroom */
setup.bathroomLowRoll = function() {
  let retVals = [1,7];
  let retVal = -1;
  let levelUp = setup.markXP();
  if (levelUp == 1) {
    alert("unexpected level up");
  }
if (v.rollCount == 1 && v.pounding) {
    retVal = setup.generalSoftFail();
  } else {
    retVal = setup.bathroomFail();
  }
  if (!retVals.includes(retVal)) {
    alert("bathroomLowRoll() tried to return " + retVal + ", which is not one of the expected return values");
  }
  return retVal;
}

/*  fail rule in Bathroom */
setup.bathroomFail = function() {
  let retVals = [7];
  let retVal = -1;
  v.pounding = false;
  v.crowbar = false;
  v.containedIn.set("detective", "hallway");
  retVal = 7;
  if (!retVals.includes(retVal)) {
    alert("bathroomFail() tried to return " + retVal + ", which is not one of the expected return values");
  }
  return retVal;
}

/*  soft fail rule in General rules */
setup.generalSoftFail = function() {
  let retVals = [1];
  let retVal = -1;
  v.pounding = false;
  v.crowbar = true;
  retVal = 1;
  if (!retVals.includes(retVal)) {
    alert("generalSoftFail() tried to return " + retVal + ", which is not one of the expected return values");
  }
  return retVal;
}

/*  remember tattoo rule in General rules */
setup.generalRememberTattoo = function() {
  let retVals = [3];
  let retVal = -1;
  v.knowledge.add("womanAtBar");
  v.knowledge.add("strangeTattoo");
  retVal = 3;
  if (!retVals.includes(retVal)) {
    alert("generalRememberTattoo() tried to return " + retVal + ", which is not one of the expected return values");
  }
  return retVal;
}

/*  remember Mustang rule in General rules */
setup.generalRememberMustang = function() {
  let retVals = [4];
  let retVal = -1;
  v.knowledge.add("mustangKeys");
  retVal = 4;
  if (!retVals.includes(retVal)) {
    alert("generalRememberTattoo() tried to return " + retVal + ", which is not one of the expected return values");
  }
  return retVal;
}
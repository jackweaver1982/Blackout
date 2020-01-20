s.lastEdited = "2019-01-20-1327";
s.versionNumber = 104;

s.calcVersion = function(num) {
  let main = Math.floor(num/100);
  let sub = num % 100;
  return main + '.' + sub;
}

s.version = setup.calcVersion(setup.versionNumber);

s.betaFormURL = 'https://jackweaver1982.github.io/Blackout/betaForm.html';

// This is a place to store the current version number and, if needed,
// the date and time the project was last edited.

s.versionNumber = 112;
s.lastEdited = "2019-01-26-1521";

s.calcVersion = function(num) {
	// convert version number as integer to version number as string
	// according to the relationship:
	//
	// 'x.y' <--> 100 * x + y
  let main = Math.floor(num/100);
  let sub = num % 100;
  return main + '.' + sub;
}

s.version = setup.calcVersion(setup.versionNumber);

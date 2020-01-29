// This is a place to store the current version number and, if needed,
// the date and time the project was last edited.

s.versionNumber = 200;

s.calcVersion = function(num) {
	// convert version number as integer to version number as string
	// according to the relationship:
	//
	// 'x.y' <--> 100 * x + y
  let main = Math.floor(num/100);
  let sub = num % 100;
  return main + '.' + sub;
}

s.version = s.calcVersion(s.versionNumber);

// https://www.youtube.com/watch?v=VrT3TRDDE4M
// https://www.youtube.com/watch?v=baTwIcyMvh8

let reConstructor;
let pattern;
let flags;
let str;

pattern = "/^matchthis$/";
pattern = "\\w+";
flags = "i";
str = "matchthis";

reConstructor = new RegExp(pattern, flags);
console.log(reConstructor.test(str)) //

// Use cases

// Validation
pattern = "\\d+";
let phone = "4645411";
reConstructor = new RegExp(pattern,flags);

console.log(reConstructor.test(phone)) //

// Extraction
pattern = "//(david)/ig"
let text = "This is a Text about David. And also David. More David is here. and David"
// reConstructor = new RegExp(pattern,flags);

console.log(text.match(/(david)/ig));
// console.log(text.match(/(david)/ig));


// Method	Description


// RegExp()
// exec()	Executes a search for a match in a string. It returns an array of information or null on a mismatch.
// test()	Tests for a match in a string. It returns true or false.


// String
// match()	Returns an array containing all of the matches, including capturing groups, or null if no match is found.
// matchAll()	Returns an iterator containing all of the matches, including capturing groups.
// search()	Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
// replace()	Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
// replaceAll()	Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.
// split()	Uses a regular expression or a fixed string to break a string into an array of substrings.
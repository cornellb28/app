// const string1 = "Cornell Benson is the programmer";
// let regex = /Benson/;
// console.log(regex.test(string1)) // true

// let regex = /is|the|Benson/;
// console.log(regex.test(string)) // true

// const string2 = "freecodecamp";
// let regex = /freecodecamp/i;
// console.log(regex.test(string2)) // true

// const string3 = "free coding class";
// let regex = /coding/;
// console.log(string3.match(regex)) // ["coding"]

// const string = "Repeat, Repeat, Repeat";
// let regex = /Repeat/g;
// console.log(string.match(regex))  // ["Repeat", "Repeat", "Repeat"]

// const string = "Twinkle, twinkle, little star";
// let regex = /twinkle/ig;
// console.log(string.match(regex))  // ["Twinkle", "twinkle"]

// let string = "I'll hum a song";
// let hugstr = "Bear hug";
// let regex = /hu./;
// console.log(string.match(regex))  // ["hum"]
// console.log(hugstr.match(regex))  // ["hug"]


// let string = "Let's have fun with";
// let regex = /.un/;
// console.log(regex.test(string))  // true

// let bgRegex = /b[aiu]g/;
// let quote = "Beware of bugs in the above code; I have only proved it once";
// let vowelRegex = /[aeiou]/gi;
// console.log(quote.match(vowelRegex));


// let bgRegex = /b[aiu]g/;
// let quote = "Beware of bugs in the above code; I have only proved it once";
// let vowelRegex = /[a-z]/gi;
// console.log(quote.match(vowelRegex)); // everyletter

// let quote = "Beware of 2 bugs in the above code; I have only proved it once";
// let vowelRegex = /[2-6h-s]/gi;
// console.log(quote.match(vowelRegex));
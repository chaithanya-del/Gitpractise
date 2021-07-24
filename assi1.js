var word="she sells sea shells on the sea shore";
var space=word.split(' ');
console.log("Number of words in the sentence is :"+space.length);
var number=word.replace(/\s/g,'');
console.log("Number of each character in a sentence is :"+number.length);
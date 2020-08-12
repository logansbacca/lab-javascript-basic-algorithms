/*
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

// Iteration 1: Names and Input
let hacker1 = "Logan";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "John";
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longerst name, it has ${hacker1.length}`);
}

else if (hacker2.length > hacker1.length) {
    console.log (` It seems that the navigator has the longest name, it has  ${hacker2.length} characters`);
}

else {
      console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
}


// Iteration 3: Loops

/*
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?

var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";

*/


/*

g = ""

L     g = "L "
o     g = "L o "
g     g = "L o g "
a 
n 



*/

//   *L*
let hacker1 = "Logan";

g = ""

for (i=0; i < hacker1.length; i++) {
    g = g + hacker1[i]+(" ");
}

let hacker2 = "John";


g= ""
for (i=hacker2.length - 1; i >= 0; i--) {

    g= g+ hacker2[i]
}
console.log(g)

g = g.toUpperCase()
console.log (g.toUpperCase())


console.log (g)


console.log (hacker1[i] + (" "));


'a' < 'b'
let n = Math.min(hacker1.length, hacker2.length)


hacker1 < hacker2

if (hacker1 > hacker2) {
    console.log ("The driver's name goes first")
}
else if  (hacker1 < hacker2) {
    console.log ("Yo, the navigator goes first definitely.")
}
else {
    console.log("What?! You both have the same name?")
}

for(i = 0; i < n; i++){
    if (hacker1[i] > hacker2[i]) {
        console.log ("The driver's name goes first")
        break;
    }
    else if  (hacker1[i] < hacker2[i]) {
        console.log ("Yo, the navigator goes first definitely.")
        break;
    }
}

if(i == n) {
    if(hacker1.length > hacker2.length){
        console.log ("The driver's name goes first")

    }
    else if(hacker1.length < hacker2.length){
        console.log ("Yo, the navigator goes first definitely.")
    }
    else {
        console.log("What?! You both have the same name?")
    }

}

else {
    console.log("What?! You both have the same name?")
} 
'a b c'
'a b c d e f'
 0 1 2 3

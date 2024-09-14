
/**
 * Destructuring
 * -- Destructuring Array => Swapping Variables
 */


let book = "video";
let video = "book";

//save book value in stash

let stash  = book; // video

//chage book value

book = video;

// change video value

video = stash;

console.log(book);
console.log(video);
///////////////////////////////////////////////////////////////////////////////////////

/**Destructuring
 * Destructuring object
 */

const user = {
    theName: "Ahmed",
    theAge: 39,
    theTitle: "DevOps",
    theCountry: "Sudan",
    theColor: "Red",
    skills : {
        HTML: 80,
        CSS: 60,
        Javascript: 75
    }
};

// let {theName,theAge,theTitle,theCountry} = user; THIS IS ONE WAY TO DECLARE VARIABLES

({theName: n, theAge: a, theTitle: t, theCountry: c, theColor: co ="Blue", skills: {HTML, CSS:cs}} = user);

console.log(`Hello, ${HTML}`);

console.log(`Hellon, my CSS skill is ${cs}`);

const {HTML : skillOne ,CSS: skillTwo, Javascript: skillThree} = user.skills;

console.log(skillThree);

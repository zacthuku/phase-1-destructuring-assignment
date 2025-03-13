const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};

// Destructuring assignment
const { moo, neigh, baa, oink, cluck } = animalSounds;

console.log(moo);    // Output: "cow"
console.log(neigh);  // Output: "horse"
console.log(baa);    // Output: "sheep"
console.log(oink);   // Output: "pig"
console.log(cluck);  // Output: "chicken"

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const animals = ["cow", "sheep", "pig", "chicken"];

const [bessie, dolly, babe,  little] = animals; 

console.log(bessie);

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays
const animalColor=["cow", "sheep", "pig"];
const[blackAndWhite, black, pink]= animalColor
// 4. Use destructuring to assign appropriate variables using the color names.
const Colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const[red, orange, yellow, green, blue, indigo, violet]=Colors
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
const [r, o, y, g, b, v]= rainbowColors
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects
const Indigo=["indigo"]
const [indg]= Indigo
// 7. Use destructuring to assign all variables using the keys as the variable names
const Muppet={
  muppetName:"Miss Piggy",
  color:"pink",
  song:"Never Before, Never Again",
  job:"Cast member of The Muppet Show",
  partner:"Kermit"
};
const{muppetName, color, song, job, partner}= Muppet
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const NestedMuppet = {
  song2: 'Moving Right Along',
  song4: 'I Hope That Something Better Comes Along',
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
const{song2, song4, nestedJob, nestedPartner}= NestedMuppet
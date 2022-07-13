"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructuring of that object inside the function
  // Also setting default values to time and starterIndex
  orderDelivery: function ({
    time = "20.00",
    address,
    mainIndex,
    starterIndex = 1,
  }) {
    console.log(
      `Order recieved ${this.starterMenu[mainIndex]} and ${this.mainMenu[starterIndex]} on ${time} at address: ${address}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/* Strings */
const airline = "Tap Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length);
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.lastIndexOf("Portugal"));

console.log(airline.slice(0, 4));
console.log(airline.slice(-3));

function checkMiddleSeat(seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log(`You got the middle seat`);
  } else {
    console.log(`You got lucky`);
  }
}

checkMiddleSeat("11B");
checkMiddleSeat("2C");
checkMiddleSeat("1A");

console.log(new String("Zumar"));
console.log(typeof new String("Zumar")); // Object

/* Map Iteration 

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [1, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [true, "Try again!"],
]);

// Converting objects to maps

const objtoMap = new Map(Object.entries(openingHours));
console.log(objtoMap);

// convert Maps to array

const maptoArry = [...objtoMap];
console.log([maptoArry]);
console.log([maptoArry.keys()]);
console.log([maptoArry.values()]);

*/

/* **************************** Map Fundamentals

const rest = new Map();
rest.set("name", "Clasicano Italino");
rest.set(1, "Italy");
console.log(rest.set(2, "Lisbon, Portugal"));
console.log(
  rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
);
console.log(rest.set("open", 11));
console.log(rest.set("close", 23));
console.log(rest.set(true, "We are open :D"));
console.log(rest.set(false, "We are closed :("));

console.log(rest.get("name"));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("closed")));

rest.delete(2);
console.log(rest.has("categories"));
console.log(rest.size);

//rest,clear();
const arr = [1, 2];
rest.set(arr, "test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

console.log(rest.get(arr));

*/

/*
******************************************************       OPTIONAL CHANING      *******************************
//without optional chaining
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// With Optional chaining
console.log(restaurant.openingHours.mon?.open);

//Example

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Optional chaining Methods

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderBingo?.(0, 1) ?? "Method does not exist");

// OPtional chaining Arrays
const users = [{ name: "zumar", email: "bingo@bingo.com" }];

console.log(users[0]?.name ?? "User does not exist");


*/
/*
******************************************      for-0f-loop     *******************************************
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

*/

//console.log([...menu.entries()]);
/*
****************************************     Logical assignment Operators     ********************************
const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "La Piazaa",
  owner: "Giovanni Rossi",
};

// OR Assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND Assignment Operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);

*/

/* *******************************     nullish coalescing operator (??)    *****************************************

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//nullish values (null and undefined = falsy ) ( 0 and "" = truthy)

const guessCorrect = restaurant.numGuests ?? 10; // guessCorrect = 0 instead of 10 because restaurant.numGuests = truthy
console.log(guessCorrect);

*/

/*
 ***************************************************************     Short Circuiting (&& and ||)     ************************************************************** 

//OR || Short circuits: if the first value is a truthy it will immediately return that. The other operand won't even be evaluated.
// If the values are all falsy then the last value is returned.

// logican operators can use any data type, return any data type, & also do short circuit evaluation
console.log(3 || "zumar");
console.log("" || "zumar");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "hello" || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Better method of setting Default value than using ternary operator or if/else statement
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`------------------And-----------------------`);

// AND( && ) Short circuits when the first operator is falsy and then immediately returns that falsy value without evaluating the 2nd operand.
// If the values are all truthsy then the last value is returned.
console.log(0 && "zumar");
console.log(7 && "zumar");
console.log("hello" && 23 && null && "zumar");

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "Bingo");
}

const orderP =
  restaurant.orderPizza && restaurant.orderPizza("extra saus", "chilly pepper");

console.log(orderP);

*/

/*
***************************************************     Rest Patterns & Paramaters     *********************************************

// 1) Destructuring
// Rest in Arrays
// Spread, because on the right side of the assignment operator(=)
const arr = [1, 2, ...[3, 4]];

// Rest, because on the left side of the assignment operator(=)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log([a, b, others]);

const [pizza, , risotto, focaccia, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, focaccia, otherFood);

// Rest in Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 4);
add(2, 4, 7, 9, 4, 6);
add(2, 4, 3, 1, 2, 7, 8);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("bingo", "asd", "qwe");

*/

/* 
************************************************    The Spread Operator(...)    *************************************************

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Spread operator in the newArr (...)

const newArr = [1, 2, ...arr];
console.log(newArr);
// Expanding the newArr (when we need elements of an array individualluy we use ... operator)
console.log(...newArr);

// Here it created a new array not overwrite the old one
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy Array i.e, creates a new object instead of pointing to the same 1
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays together

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps or sets, but not objects.

const str = "Zumar";
const letters = [...str, "", "S."];
console.log(letters);
// console.log(`${...str} zehgeer`);  Not going to work

// Example for real world application
const ingredients = [
  // prompt(`Let's make pasta ingredient 1`),
  // prompt(`Let's make pasta ingredient 2`),
  // prompt(`Let's make pasta ingredient 3`),
];
restaurant.orderPasta(...ingredients);

// Objects
// Will copy all the objects properties of the restaurant into this new object
const newRestaurant = { foundedIn: 2000, ...restaurant, founder: "Zumar" };
console.log(newRestaurant);

// Creates a new object instead of pointing to the same 1
const restaurantCopy = { ...newRestaurant };
restaurantCopy.name = "bingo";
console.log(restaurantCopy);

*/

/*
****************************************************    Destructuring Objects    ************************************************** 

// passing one object into the function
restaurant.orderDelivery({
  time: "10:30",
  address: "90 feet road near Alkhuddam",
  mainIndex: 2,
  starterIndex: 2,
});

// Here there is no value for time and starterIndex therefore will be set to default.

restaurant.orderDelivery({
  address: "90 feet road near Alkhuddam",
  mainIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// New variable names to properties
// variable assign happens on the left side before = sign

const {
  name: restaurantName,
  openingHours: hours,
  categories: restaurantCategories,
} = restaurant;
console.log(restaurantName, hours, restaurantCategories);

// Default value of object (menu = default value, starters = restaurant.startersMenu)

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variable in an object

let a = 111;
let b = 999;

// object assign happens on the right side after = sign

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects

const {
  fri: { open: o, close: c },
} = openingHours; // we need open and close properties inside the friday object
console.log(o, c);

*/

/*
*******************************************************    Destructuring Arrays    ******************************************
const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];
const [x, y, z] = arr;
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Mutated variables in an array -->

// Switching variable using array destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [two, four, fiveSix] = nested;

console.log(nested);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r);

*/

/*
Coding Challenge #1

We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:

1. Create one player array for each team (variables 'players1' and 
'players2')

2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players

3. Create an array 'allPlayers' containing all players of both teams (22 
players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
GOOD LUCK � 

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

*/
/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK � 

// 1)
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2)
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average /= odds.length;
  console.log(average);
}

// 3)
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odds of ${teamStr} ${odd}`);
  // console.log(game[team]);
}

//4)
const scorers = { ...game.scored };
console.log(scorers);

*/

/*

//1
const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6
function printGoals(...players) {
  console.log(`${players.length} goals were scored.`);
}
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

//7
team1 < team2 && console.log(`Team 1 is more likely to win.`);
team1 > team2 || console.log(`Team 2 is more likely to win.`);

*/

// const [team1Gk, team2Gk] = [game.players[0][0], game.players[1][0]];

// const [[, ...team1FieldPlayers], [, ...team2FieldPlayers]] = [
//   game.players[0],
//   game.players[1],
// ];

// const [team1Players, team2Players] = [
//   [team1Gk, team1FieldPlayers],
//   [team2Gk, team2FieldPlayers],
// ];

// const allPlayers = [team1Players, team2Players];
// console.log(allPlayers);

// const players1Final = [...team1Players, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

// console.log(team1, team2, draw);

// function printGoals() {
//   const { scored } = game;
//   console.log(...scored, scored.length);
//   const teamLikelyToWin = team1 < team2 || team1 > team2;
//   console.log(teamLikelyToWin);
// }

// printGoals();

/*

Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK x


const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(`An event happened, on 
average, every ${90 / gameEvents.size} minutes`);

for (const [key, value] of gameEvents) {
  // const half = key <= 45 ? "First" : "Second";
  // console.log(`[${half} half] ${key}: ${value}`);

  if (key <= 45) {
    console.log(`${value}, in first half!`);
  } else if (key > 45) {
    console.log(`${value}, is in second half!`);
  }
}

*/

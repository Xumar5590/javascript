"use strict";

/*
function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    const output = `${firstName}, your are ${age}, born in ${birthyear}.`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      const firstName = 'zubii';
      const str = `Oh you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(add(2, 3));  functions are block scoped but that is true only for strict mode
  }

  printAge();
  return age;
}

const firstName = 'Bingo';
calcAge(1993);

*/

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1980);

const zumar = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

zumar.calcAge();

const f = zumar.calcAge;

f(); // this is undefined becaues its now a regular function call

console.log(f);

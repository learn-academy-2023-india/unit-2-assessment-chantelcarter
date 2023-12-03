// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "India 2023"
console.log(cohort.split(" "))

// a) Your answer: ["I", "n", "d", "i", "a", " ", "2", "0", "2", "3"]
// b) Verify and explain: output ----> [ 'India', '2023' ]
// because there was a space between the quotation marks, it indicated that you want the words to split rather than each letter

// --------------------2) What will this log?

const greeter = (name) => {
 `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student!
// b) Verify and explain: it logged "undefined", and at first i couldn't figure out why and tried logging a bunch of different things, but then i realized that it didn't work because the function didn't have a "return"
// const greeter = (name) => {
//   `Hello, ${greeter.name}!`
// }
// ----> undefined
// const greeter = (name) => {
//   `Hello, ${this.name}!`
// }
// ----> undefined
// const greeter = (name) => {
//   `Hello, ${greeter(name)}!`
// }
// ----> RangeError: Maximum call stack size exceeded
// const greeter = (name) => {
//   `Hello, ${greeter}!`
// }
// ----> undefined
// const greeter = (name) => {
//   return `Hello, ${name}!`
// }
// ----> Hello, LEARN Student!


// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: i wasn't actually very confident that this was going to work, but in the end it did because .filter was given a parameter and instructed on how to filter out the even numbers.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: logged Javascript because by using dot notation it was able to access the value in the object by targeting that specific index in the array.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "India"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: "George India 2023"
// b) Verify and explain: output ---> Learn { student: 'George', cohort: 'India', year: 2023 } 
// it logged the object this way because "George" was the argument passed onto name, and the objects now knows what value to input for student.


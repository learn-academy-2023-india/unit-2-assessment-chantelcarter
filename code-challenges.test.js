// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
// describe("multiplyByThree", () => {
//     it("is a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
//       const numbersArray1 = [6, 7, 8, 9, 10]
//       // Expected output: [18, 21, 24, 27, 30]
//       const numbersArray2 = [24, 27, 30, 33, 36]
//       // Expected output: [72, 81, 90, 99, 108]
//       expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//       expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
//     })
//   })

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
describe("stringSentence", () => {
    it("is a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
      expect(stringSentence(object1)).toEqual("15 is divisible by three")
      expect(stringSentence(object2)).toEqual("0 is divisible by three")
      expect(stringSentence(object3)).toEqual("-7 is not divisible by three")
    })
  })
 
// b) Create the function that makes the test pass.

  const stringSentence = (object) => {
    if (object.number % 3 === 0){
        return `${object.number} is divisible by three`
    } else if (object.number % 3 !== 0){
        return `${object.number} is not divisible by three`
    } 
  }

// Pseudo code:
// input: single object with a number
// output: string interprolation
// run jest to see if test is working
// ----> failed
// i think i'll need to use conditional statments
// originally i was thinking that i needed to make a conditional statment for each object, but i think i could make a broader outcome
// const stringSentence = () => {
//     if (object1 / 3 === true){
//         return `${object1} is divisible by three`
//     } else if (object2 / 3 === true){
//         return `${object2} is divisible by three`
//     } else (object3 / 3 === false){
//         return `${object3} is not divisible by three`
//     }
//   }
// -----> failed
// says the else for object 3 failed become i'm missing a semicolon?
// i do think if i pass in a parameter this could work a lot easier
// const stringSentence = (object) => {
//     if (object / 3 === true){
//         return `${object} is divisible by three`
//     } else if (object / 3 === false){
//         return `${object} is not divisible by three`
//     } 
//   }
// ----> failed
// Expected: "15 is divisible by three"
// Received: undefined
// got help in the main room
// was missing dot notation to specify the number in the object and instead of expecting a boolean value back i would want to get a remainder of zero


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("capitalArray", () => {
    it("returns a generic greeting", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
      expect(capitalArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capitalArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
  })

// b) Create the function that makes the test pass.

const capitalArray = (capWords) => {
    return capWords.map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    })
}

// Pseudo code:
// input: a single array
// output: an array with all words capitalized
// since the array is going to be the the same length with changed values i need to use map
// we did something similar in the lecture with every other letter needing to be capitalized, so i think i'm going to have to use the same approach.
// did some googling, because i knew there has to be a built in method to capitalize the first letter of the word and i did see something that should probably work but i wanted to try something else first.
// const capitalArray = (capWords) => {
//     return capWords.map(value => {
//         return value.toUpperCase([0])
//     })
// }
// -----> failed
// Array [
//     -   "Streetlamp",
//     -   "Potato",
//     -   "Teeth",
//     -   "Conclusion",
//     -   "Nephew",
//     +   "STREETLAMP",
//     +   "POTATO",
//     +   "TEETH",
//     +   "CONCLUSION",
//     +   "NEPHEW",
//       ]
// i thought that maybe i would be able to reference that i wanted the [0] index in each value to be capitalized, but i think i'm gonna just use the way i saw it done on my google search.
// const capitalArray = (capWords) => {
//     return capWords.map(value => {
//         return value.charAt(0).toUpperCase()
//     })
// }
// ----> failed
// Array [
//     -   "Streetlamp",
//     -   "Potato",
//     -   "Teeth",
//     -   "Conclusion",
//     -   "Nephew",
//     +   "S",
//     +   "P",
//     +   "T",
//     +   "C",
//     +   "N",
//       ]
// technically on the right track, but i need the whole word.
// google said to use + word.slice(1), but i couldn't rememeber exactly what slice does so i'm just gonna look that up now.
// passed but i'm almost a little confused as to why it worked. i'm assuming its because using .slice at index 1 is going to input the rest of the word in the value in the array. but on the syllabus if you put .slice(1) it would bring up the rest of the array starting at potato
// would really appreciate an explaination so i can better understand why this worked.
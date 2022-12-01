console.warn('All the exercises are declared as Functions')
console.warn('from ex1() until ex12()')

function ex1() {
  // In your JavaScript file create a variable called myName with your name as the value. Put your name inside string quotes, e.g., "my name". Then add a line of code to print the variable name to the console after the previous message.Save your JavaScript file in your editor. Reload the HTML page in your browser. You should see your name printed. If not, investigate and fix it.

  const myName = 'Santiago'
  console.log('')
  console.log('.____________________________.')
  console.log('|            EX 1            |')
  console.log('|                            |')
  console.log('|       ', myName, '           |')
  console.log('|                            |')
  console.log('|____________________________|')
  console.log('')
}
function ex2() {
  const santiAge = 33
  console.log('.____________________________.')
  console.log('|            EX 2            |')
  console.log('|                            |')
  console.log('|   Santiago age    ', santiAge, '     |')
  console.log('|                            |')
  console.log('|____________________________|')
  return santiAge
}

//just to return juilias age
function juliaAge() {
  return 33
}

//just to return my age
function santiAge(age) {
  if (age) {
    return age
  } else {
    return 33
  }
}

function ex3() {
  // Create a variable called juliaAge with a value 32. Create another variable called ageDiff and set it to an expression that calculates your age minus Julias's age. Print the value of ageDiff. Save the file and reload the page. You should see your age and the age difference. If you are younger than Julia, you should see a negative number.
  const ageDif = juliaAge() - santiAge()
  console.log('')
  console.log('.____________________________.')
  console.log('|                            |')
  console.log('|            EX 3            |')
  console.log('|                            |')
  console.log('|   Santiago age  ', santiAge(), '       |')
  console.log('|   Julia age     ', juliaAge(), '       |')
  console.log('|   Difference:    ', ageDif, '       |')
  console.log('|                            |')
  console.log('|____________________________|')
  console.log('')
  return ageDif
}
function ex4() {
  // Write a conditional that compares the variable with your age with the number 21. It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age. Save your JavaScript file and reload the page. Make sure you see the correct message. Try changing your age in the JavaScript file to make sure the other message prints when it should.
  let comparisson = 21

  // 3 results
  let result1
  let result2
  let result3

  if (santiAge() > comparisson) {
    result1 = 'older than 21'
  }

  if (santiAge(10) < comparisson) {
    result2 = 'younger than 21'
  }

  if (santiAge(21) === comparisson) {
    result3 = 'santi has the same age'
  }
  console.log('')
  console.log('.____________________________.')
  console.log('|            EX 4            |')
  console.log('|                            |')
  console.log('|   comparisson   ', comparisson, '       |')
  console.log('|   Santiago age  ', santiAge(), '       |')
  console.log('|  ', result1, '           |')
  console.log('|                            |')
  console.log('|                            |')
  console.log('|____________________________|')
  console.log('|                            |')
  console.log('|   now santiAge(10)         |')
  console.log('|   comparisson   ', comparisson, '       |')
  console.log('|   Santiago age  ', santiAge(10), '       |')
  console.log('|  ', result2, '         |')
  console.log('|                            |')
  console.log('|____________________________|')
  console.log('|                            |')
  console.log('|   now santiAge(40)         |')
  console.log('|   comparisson   ', comparisson, '       |')
  console.log('|   Santiago age  ', santiAge(40), '       |')
  console.log('|  ', result3, '  |')
  console.log('|                            |')
  console.log('|____________________________|')
  console.log('')
}

function ex5() {
  // Write a conditional that compares your age with Julia's age. This conditional will need to test if you are older, younger, or the same age, and print, appropriately, either "Julia is older than you", Julia is younger than you", or "You have the same age as Julia".
  let result
  if (santiAge() > juliaAge()) {
    result = 'santi is older than julia'
  } else if (santiAge() < juliaAge()) {
    result = 'santi is younger than julia'
  } else {
    result = 'santi has the same age as julia'
  }
  console.log('')
  console.log('')
  console.log('.___________________________________.')
  console.log('|                 EX 5              |')
  console.log('|                                   |')
  console.log('|  Julia age     ', juliaAge(), '               |')
  console.log('|  Santiago age  ', santiAge(), '               |')
  console.log('| ', result, ' |')
  console.log('|                                   |')
  console.log('|___________________________________|')
  console.log('')
  console.log('')
}

function ex6() {
  // Create an array with all the names of your class (including mentors). Sort the array alphabetically. Then print the first element of the array in the console. On the next line, print the last element of the array in the console. On the next line, print all the elements of the array in the console (use a "for" loop). Save the file and reload the page. You should see the first element of the sorted array, the last element of the sorted array, and a list of all the elements in order in the array in the console.
  let array = [28, 31, 30, 39, 27, 29, 30]
  console.log('.___________________________________.')
  console.log('|                 EX 6              |')
  console.log('|                                   |')
  console.log('|  First element ', array[0], '               |')
  console.log('|  Last element  ', array[array.length - 1], '               |')
  console.log('|                                   |')
  console.log('|       looped array with for       |')
  console.log('|                                   |')
  for (let i = 0; i < array.length; i++) {
    console.log('|  element:  ', i, ' age:  ', array[i], '         |')
  }
  console.log('|___________________________________|')
  console.log('')
  console.log('')
}

function ex7() {
  // Create an array with all the ages of the students in your class. Iterate the array using a while loop, and then print every age in the console. Add a conditional inside the while loop to only print even numbers. Write again a loop but use a "for" loop instead of a "while" loop. Save your changes to your JavaScript file. Reload the HTML page in your browser. You should see every age printed, then only the even numbers printed. If not, investigate and fix it.
  let array = [28, 31, 30, 39, 27, 29, 30]
  let i = 0
  console.log('.___________________________________.')
  console.log('|                 EX 7              |')
  console.log('|                                   |')
  console.log('|  First element ', array[0], '               |')
  console.log('|  Last element  ', array[array.length - 1], '               |')
  console.log('|                                   |')
  console.log('|       looped array with while     |')
  while (i < array.length) {
    console.log('|  element:  ', i, ' age:  ', array[i], '         |')
    i++
  }
  console.log('|                                   |')
  console.log('|       Even num and for looped     |')
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log('|  element:  ', i, ' age:  ', array[i], '         |')
    }
  }
  console.log('|                                   |')
  console.log('|___________________________________|')
  console.log('')
  console.log('')
}

function ex8(array) {
  // Write a function that receives an array as a parameter and prints the lowest number in the array to the console. Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the lowest number in the array printed in the console. If not, investigate and fix it.
  let minAge = 100
  console.log('.___________________________________.')
  console.log('|                 EX 8              |')
  console.log('|                                   |')
  console.log('|       looped array with for       |')
  for (let i = 0; i < array.length; i++) {
    console.log('|       index:  ', i, ' age:  ', array[i], '      |')
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minAge) {
      minAge = array[i]
    }
  }
  console.log('|          Minimum age: ', minAge, '        |')
  console.log('|___________________________________|')
  console.log('')
  console.log('')
}

function ex9(array) {
  // Write a function that receives an array as a parameter and prints the biggest number in the array to the console. Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the biggest number in the array printed in the console. If not, investigate and fix it.
  let maxAge = 0
  console.log('.___________________________________.')
  console.log('|                 EX 9              |')
  console.log('|                                   |')
  console.log('|       looped array with for       |')
  for (let i = 0; i < array.length; i++) {
    console.log('|       index:  ', i, ' age:  ', array[i], '      |')
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxAge) {
      maxAge = array[i]
    }
  }
  console.log('|          Maximum age: ', maxAge, '        |')
  console.log('|___________________________________|')
  console.log('')
  console.log('')
}

function ex10(array, i) {
  //   Write a function that receives two parameters, an array, and an index. The function will print the value of the element at the given position (one-based) to the console. For example, given the following array and index, the function will print '6'.
  // var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1; Save the changes to your JavaScript file and check your browser console. You should see the number at the correct index printed in the console. If not, investigate and fix it.
  console.log('')
  console.log('.__________________________________________.')
  console.log('|                    EX 10                 |')
  console.log('|                                          |')
  console.log('|   ', array, '     |')
  console.log('|              index: ', i, '                  |')
  console.log('|      array [', i, ']: ', array[i - 1], '                    |')
  console.log('|__________________________________________|')
  console.log('')
}

function ex11(array) {
  // Write a function that receives an array and only prints the values that repeat. For example, given the following array and index, the function will print '6,23,33,100'.var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100] Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see an array of the repeated numbers printed in the console. If not, investigate and fix it. Tip: this is considered by many students the most difficult exercise, therefore dedicate max. an hour to find a solution and if you can't leave it for tomorrow. Most of the time we need to take breaks and we will be able to see problems from different angles with a fresh mind.
  let duplicates
  console.log('')
  console.log('.________________________________________.')
  console.log('|                EX 11                   |')
  console.log('|                                        |')
  console.log('| ', array, '  |')
  console.log('|              Repeated values           |')
  duplicates = array.filter((item, index) => array.indexOf(item) !== index)

  console.log('|         ', duplicates, '            |')
  console.log('|________________________________________|')
  console.log('')
}

function ex12() {
  //   Write a simple JavaScript function to join all elements of the following array into a string.myColor = ["Red", "Green", "White", "Black"]; Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the following in your console: "Red", "Green", "White", "Black" If not, investigate and fix it.

  let array = ['Red', 'Green', 'White', 'Black']
  let string = array.join('  ')
  console.log('')
  console.log('.____________________________________________.')
  console.log('|                    EX 12                   |')
  console.log('|                                            |')
  console.log('|                    array                   |')
  console.log('|', array, '  |')
  console.log('|                                            |')
  console.log('|         Joined into a string               |')
  console.log('|      ', string, '            | ')
  console.log('|____________________________________________|')
  console.log('')
}

function ex13(number) {
  // Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423. Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.
  const reversed = String(number).split('').reverse().toString()
  console.log('')
  console.log('.____________________________________________.')
  console.log('|                    EX 13                   |')
  console.log('|                                            |')
  console.log('|                    Number                  |')
  console.log('|                    ', number, '                  |')
  console.log('|                   Reversed                 |')
  console.log('|                  ', reversed, '                 | ')
  console.log('|____________________________________________|')
  console.log('')
}

function ex14(string) {
  // Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'. Punctuation and numbers aren't passed in the string. Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.
  let sorted = String(string).split('').reverse().sort().join('') //turn string into array reverse it, sort it and joined again as a string
  console.log('')
  console.log('.____________________________________________.')
  console.log('|                    EX 14                   |')
  console.log('|                                            |')
  console.log('|                    String                  |')
  console.log('|                  ', string, '               |')
  console.log('|                   Reversed                 |')
  console.log('|                  ', sorted, '               | ')
  console.log('|____________________________________________|')
  console.log('')
}

function ex15(string) {
  // Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = "prince of persia" then the output should be "Prince Of Persia". Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.
  let array = String(string).split(' ') //turn string into array
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1) //re assign capitalizing char at 0 and joining the rest of the words with + slice1
  }
  array = array.join(' ')
  console.log('')
  console.log('.____________________________________________.')
  console.log('|                    EX 15                   |')
  console.log('|                                            |')
  console.log('|                 lower case                 |')
  console.log('|             ', string, '             |')
  console.log('|                  Uppercase                 |')
  console.log('|             ', array, '             | ')
  console.log('|____________________________________________|')
  console.log('')
}

function ex16(string) {
  // Write a JavaScript function that finds the longest word in a phrase. For example, if x = "Web Development Tutorial", then the output should be "Development". Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.
  storedIndex = 0 //small number to compare and make sure first element.length will be higher
  let array = String(string).split(' ') //turn string into array
  console.log('.______________________________________________.')
  console.log('|                      EX 16                   |')
  console.log('|                                              |')
  for (let i = 0; i < array.length; i++) {
    console.log('|   index:  ', i, ' age:  ', array[i], '      ')
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > storedIndex) {
      storedIndex = i //store the index to later show on the array
    }
  }
  console.log('|                                               |')
  console.log('|  Longest word : ', array[storedIndex], '             |')
  console.log('|_______________________________________________|')
  console.log('')
  console.log('')
}

function ex19() {
  // Write a JavaScript function that returns nothing and has no parameters. This function should print the result of the multiplication of two numbers (the numbers that you want).
  console.log('')
  console.log('.____________________________________________.')
  console.log('|           Extras   EX 19                   |')
  console.log('|                                            |')
  console.log('|         Multiplication (9x2) =', 19 * 2, '         |')
  console.log('|____________________________________________|')
  console.log('')
  //no arguments, no return, just a simple console.log
}

function ex20() {
  // Write a JavaScript function with no parameters. This function should return the result of the multiplication of two numbers (the numbers that you want), and in your main program, you should print the result.
  console.log('')
  console.log('.____________________________________________.')
  console.log('|           Extras   EX 20                   |')
  console.log('|                                            |')
  console.log('|         Multiplication (9x2) =', 19 * 2, '         |')
  console.log('|____________________________________________|')
  console.log('')
  console.log('')
  console.log('')
  return 9 * 2 //the return
}

function ex21(x, y, iteration) {
  // Write a JavaScript function with two parameters. These parameters are the numbers that have to be multiplied. The function should return the result of the multiplication of both numbers (the numbers that you want), and in your main program, you should print the result. Test the function with 3 examples.
  console.log('.____________________________________________.')
  console.log('|           Extras   EX 21                   |')
  console.log('|             OUTCOME #', iteration, '                   |')
  console.log('|         Multiplication: (', x, 'x', y, ') =', x * y, '   |')
  console.log('|____________________________________________|')
  console.log('')
  return x * y //the return
}

function ex22(a, b, c) {
  // Write a function that determines the type of a triangle given the length of its three sides.
  let triangle
  if (a === b && a === c) {
    triangle = 'all sides are equal'
  } else if (a === b && a !== c) {
    triangle = 'two sides equal    '
  } else {
    triangle = 'all sides different'
  }

  console.log('.____________________________________________.')
  console.log('|           Extras   EX 22                   |')
  console.log(
    '|         Triangle sides: ' + ' ' + a + ' ' + b + ' ' + c,
    '            |'
  )
  console.log('|       Result: ' + triangle + '          |')
  console.log('|____________________________________________|')

  return triangle

  // switch broken
  // switch ((a, b, c)) {
  //   case (a === b) !== c: {
  //     console.log('all sides are equal') // code block
  //     break
  //   }
  //   case (a !== b) !== c: {
  //     console.log('A and B equals, C different') // code block
  //     // code block
  //     break
  //   }
  //   case (a === b) === c: {
  //     console.log('all sides are equal') // code block
  //     break
  //   }
  //   default:
  //     console.log('default') // code block
  // }
}

function ex23(array) {
  // Write a function that receives as a parameter an array of characters and replaces all "a" by "1". e.g.: JavaScript will become J1v1Script.
  console.log('')
  console.log('.____________________________________________.')
  console.log('|           Extras   EX 23                   |')
  console.log('|                                            |')
  console.log('|     before split', array, '         |')
  array = String(array).split('')
  console.log('|     after split', array)
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 'a') {
      array[i] = 1
    }
  }
  console.log('|                                            |')
  console.log('|     array replaced: ', array.join(''))
  console.log('|____________________________________________|')
  console.log('')
}

//ex 24 first function
function ex24a(array) {
  // Write two functions. The first one should return the sum of all the elements of an array and the second one should return the smallest number in the array. Print the result in the main program.
  let result = 0
  for (let i = 0; i < array.length; i++) {
    result += array[i]
  }
  console.log('')
  console.log('.____________________________________________.')
  console.log('|           Extras   EX 24 - A               |')
  console.log('|                                            |')
  console.log('|     Array: ', array, '            |')
  console.log('|     Summ of all elements: ', result, '             |')
  console.log('|                                            |')
  console.log('|___                                      ___|')

  return result
}

//ex24 second function return smalles
function ex24b(array) {
  // Write two functions. The first one should return the sum of all the elements of an array and the second one should return the smallest number in the array. Print the result in the main program.
  let smallest = 100
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i]
    }
  }
  console.log('.___                                      ___.')
  console.log('|           Extras   EX 24 - B               |')
  console.log('|                                            |')
  console.log('|     Array: ', array, '            |')
  console.log('|     Smallest number: ', smallest, '                  |')
  console.log('|                                            |')
  console.log('|____________________________________________|')
  console.log('')
  return smallest
}

function ex25(array) {
  // Write a function that adds the even numbers of an array. For example, the array: 1 2 8 3 2 would result in the sum of 2 + 8 + 2, since they are even numbers. Return the result and print it in the main program.
  let result = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result += array[i]
    }
  }

  console.log('.____________________________________________.')
  console.log('|           Extras   EX 25                   |')
  console.log('|                                            |')
  console.log('|         Array:' + array + '              |')
  console.log('|  Sum of all even elements of array: ' + result + '     |')
  console.log('|____________________________________________|')

  // console.log('result', result)
}

function ex26(array) {
  // Write a function that adds the even positions of an array. For example,       the array: 1 2 8 3 2 3 4 would result in the sum of 8 + 2 + 4 since they are in even positions in the array (position 2,4,6). Return the result and print it in the main program.

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      console.log('array[' + i + '] ' + array[i])
    }
  }
}

// ---------- CALL TO FUNCTIONS -----------

ex1()

ex2()

ex3()

ex4()

ex5()

ex6()

ex7()

ex8([40, 30, 24, 50, 14])

ex9([40, 30, 24, 50, 14])

ex10([3, 6, 67, 6, 23, 11, 100], 4)

ex11([40, 50, 10, 40, 2, 2, 3, 10])

ex12()

ex13(2022)

ex14('webmaster')

ex15('prince of persia')

ex16('the shortest word youwilleverread')

ex19()

ex20()

ex21(2, 30, 1) // last argument outcome 1
ex21(3, 20, 2) // last argument outcome 2
ex21(4, 12, 3) // last argument outcome 3
console.log('')
console.log('')
ex22(4, 4, 4)
ex22(4, 4, 3)
ex22(1, 2, 3)
console.log('')
console.log('')
ex23(['Javascript'])
ex24a([10, 20, 30])
ex24b([10, 20, 30])
ex25([1, 2, 3, 4, 5, 6, 7, 8])
ex26([1, 2, 3, 4, 5, 6, 7, 8])

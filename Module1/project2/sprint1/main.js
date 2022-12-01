console.warn('All the exercises are declared as Functions')
console.warn('from ex1() until ex12()')

function ex1() {
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
  console.log('.____________________________________________.')
  console.log('|           Extras   EX 21                   |')
  console.log('|             OUTCOME #', iteration, '                   |')
  console.log('|         Multiplication: (', x, 'x', y, ') =', x * y, '   |')
  console.log('|____________________________________________|')
  console.log('')
  return x * y //the return
}

function ex22(a, b, c) {
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
  console.log('solution is comming...', array)

  for (let i = 0; i < array.length; i++) {}
  return array
}

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
ex23(['The most beatiful word is hamburger'])

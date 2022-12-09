// global variable ready to be pushed, filtered and removed.
let patients

// main fn Fetch data
const fetchData = () => {
  fetch('https://randomuser.me/api/?results=10')
    .then((res) => res.json())
    .then((data) => {
      patients = data.results.map((item) => {
        return {
          ...item,
          room: randomRoom(),
          diagnosis: randomDiagnosis(),
        }
      })
      controller(patients)
    })
}

// random bed function
const randomRoom = () => {
  return Math.floor(Math.random() * 10 + 1)
}

//random nurse fn
const randomLastNurse = () => {
  fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((data) => data.results)
}

//random diagnosis function
const randomDiagnosis = () => {
  const diagnosis = [
    'Mononucleosis',
    'Blunt trauma',
    'Dislocated shoulder',
    'ALS',
    'Parkinsons',
    'Cerebral Aneusysm',
    'Alzheimer',
    "Wilson's",
    'ACL rupture',
    'patellar chondropathy',
    'Gonalgie',
    'Hemorrhagic Shock',
    'L3 - Hernia',
    'Thymoid carninoma',
    'Leukemia',
    'Chemo session #5',
  ]

  return diagnosis[Math.floor(Math.random() * 15)]
}

const renderData = (data) => {
  // console.log('data', data[0])

  //create html elements - Note: i will use horizontal card component from bootstrap

  let main = document.getElementById('main') //main
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement('div') //row
    row.setAttribute('class', 'row g-0')
    let card = document.createElement('div') // card
    card.setAttribute(
      'class',
      'card mx-2 my-3 rounded-5 animate__animated animate__fadeIn'
    )
    card.setAttribute('style', 'max-width: 400px;')

    let leftCol = document.createElement('div') //left column
    leftCol.setAttribute(
      'class',
      'col-4 d-flex justify-items-center align-items-center'
    )

    let rightCol = document.createElement('div') //right column
    rightCol.setAttribute('class', 'col-8')

    let img = document.createElement('img') // img
    img.setAttribute('src', data[i].picture.large)
    img.setAttribute('style', 'max-width:150px; max-height: 150px')

    let cardBody = document.createElement('div') //card-body
    cardBody.setAttribute('class', 'card-body')

    let cardTitle = document.createElement('h5') //card-title
    cardTitle.setAttribute('class', 'card-title')
    cardTitle.innerText = `${data[i].name.first} ${data[i].name.last}`

    let cardText = document.createElement('p') //card-text
    cardText.setAttribute('class', 'card-text')
    cardText.innerText = `Patient Room: ${data[i].room}`

    let diagnosis = document.createElement('p') //diagnosis
    diagnosis.setAttribute('class', 'card-text')
    diagnosis.innerText = data[i].diagnosis

    if (i % 2 === 0) {
      card.classList.add('class', 'bg-custom2')
    } else {
      card.classList.add('class', 'bg-custom1')
    }

    //appends
    leftCol.appendChild(img) // img => left column
    row.appendChild(leftCol) // left column => row

    cardBody.appendChild(cardTitle) // card-title => card-body
    cardBody.appendChild(cardText) // card-text => card-body
    cardBody.appendChild(diagnosis)

    rightCol.appendChild(cardBody) // card-body => right column

    row.appendChild(rightCol) // right column => row

    card.appendChild(row) // row => card

    main.appendChild(card) // card => main

    card.addEventListener('click', (e) => showData(data[i], e))
  }
}

const controller = (data) => {
  console.log('data', data[2])
  //render data
  renderData(data)

  //new patient
  const btnNewPatient = document.getElementById('btnNewPatient')
  btnNewPatient.addEventListener('click', (e) => newPatient(e))
}

// show modal fn
const showData = (data, e) => {
  let title = document.getElementById('modal-title')
  title.innerText = data.name.first + ' ' + data.name.last
  //get modal
  const modalShow = new bootstrap.Modal('#modalViewPatient')

  //get modal body
  let modalBody = document.getElementById('modal-body')

  //create html elements
  let room = document.createElement('p')
  room.innerText = data.room

  let img = document.createElement('img')
  img.setAttribute('src', data.picture.large)

  let row = document.createElement('div')
  row.setAttribute('class', 'row')

  let leftCol = document.createElement('div')
  leftCol.setAttribute('class', 'col-4')

  let rightCol = document.createElement('div')
  rightCol.setAttribute('class', 'col-8')

  let info = document.createElement('span')
  info.setAttribute('class', 'card-text')
  info.innerText = 'Date of Admission: XX/XX/XXXX'

  //appends
  leftCol.appendChild(img)
  rightCol.appendChild(info)

  row.appendChild(leftCol)
  row.appendChild(rightCol)

  //append to modal body
  modalBody.appendChild(row)

  //show modal
  modalShow.show()
}

//add new patient fn
const newPatient = () => {
  // cell
  // diagnosis
  // dob{}
  // email
  // gender
  // id{}
  // phone
  // picture{}
  // registered{}
  // room

  //get HTML values from imputs
  let name = document.getElementById('firstName').value
  let lastName = document.getElementById('lastName').value
  let dob = document.getElementById('dob').value
  let patientPhone = document.getElementById('phone').value
  let patientEmail = document.getElementById('email').value
  let underAge = document.getElementById('underage').checked
  console.log('Patient', dob)
}

fetchData()

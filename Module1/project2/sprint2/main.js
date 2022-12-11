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

//render data to DOM (not-modal)
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
    card.setAttribute('style', 'max-width: 350px;')

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
    cardBody.setAttribute('class', 'card-body px-4 py-3')

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

  //region
  //get modal body
  let modalBody = document.getElementById('modal-body')
  modalBody.innerHTML = ''

  //create view modal
  let nav = document.createElement('nav')
  modalBody.appendChild(nav)

  //nav-tabs div
  let navTabs = document.createElement('div')
  navTabs.setAttribute('class', 'nav nav-tabs')
  navTabs.setAttribute('id', 'nav-tab')
  navTabs.setAttribute('role', 'tablist')
  nav.appendChild(navTabs)

  //nav-tabs buttons general-info
  let btnGeneral = document.createElement('button')
  btnGeneral.setAttribute('class', 'nav-link active')
  btnGeneral.setAttribute('id', 'nav-general-info-tab')
  btnGeneral.setAttribute('data-bs-toggle', 'tab')
  btnGeneral.setAttribute('data-bs-target', '#nav-general-info')
  btnGeneral.setAttribute('type', 'button')
  btnGeneral.setAttribute('role', 'tab')
  btnGeneral.setAttribute('aria-controls', 'nav-general-info')
  btnGeneral.setAttribute('aria-selected', 'true')
  btnGeneral.innerText = '1 - General info'
  navTabs.appendChild(btnGeneral)

  //nav-tabs buttons contact-info
  let btnContactInfo = document.createElement('button')
  btnContactInfo.setAttribute('class', 'nav-link')
  btnContactInfo.setAttribute('id', 'nav-general-info-tab')
  btnContactInfo.setAttribute('data-bs-toggle', 'tab')
  btnContactInfo.setAttribute('data-bs-target', '#nav-contact-info')
  btnContactInfo.setAttribute('type', 'button')
  btnContactInfo.setAttribute('role', 'tab')
  btnContactInfo.setAttribute('aria-controls', 'nav-contact-info')
  btnContactInfo.setAttribute('aria-selected', 'false')
  btnContactInfo.innerText = '2 - Contact information'
  navTabs.appendChild(btnContactInfo)

  //nav-tabs buttons nav-icu-info-tab
  let btnIcu = document.createElement('button')
  btnIcu.setAttribute('class', 'nav-link')
  btnIcu.setAttribute('id', 'nav-icu-info-tab')
  btnIcu.setAttribute('data-bs-toggle', 'tab')
  btnIcu.setAttribute('data-bs-target', '#nav-icu-info')
  btnIcu.setAttribute('type', 'button')
  btnIcu.setAttribute('role', 'tab')
  btnIcu.setAttribute('aria-controls', 'nav-icu-info')
  btnIcu.setAttribute('aria-selected', 'false')
  btnIcu.innerText = '3 - Intensive care unit'
  navTabs.appendChild(btnIcu)

  //tab-content, goes into modal-body
  let tabContent = document.createElement('div')
  tabContent.setAttribute('class', 'tab-content')
  tabContent.setAttribute('id', 'nav-tabContent')
  modalBody.appendChild(tabContent)

  //content
  let generalInfo = document.createElement('div')
  generalInfo.setAttribute('class', 'tab-pane fade show active p-3')
  generalInfo.setAttribute('id', 'nav-general-info')
  generalInfo.setAttribute('role', 'tabpanel')
  generalInfo.setAttribute('aria-labelledby', 'nav-general-info-tab')
  tabContent.appendChild(generalInfo) //apend to tabContent

  let rowGeneral = document.createElement('div')
  rowGeneral.setAttribute('class', 'row')
  generalInfo.appendChild(rowGeneral) //append to row

  //LEFT COL general info
  let colGeneralInfoLeft = document.createElement('div')
  colGeneralInfoLeft.setAttribute('class', 'col-md-5')
  rowGeneral.appendChild(colGeneralInfoLeft) //append to

  //left header info H5
  let leftHeaderGeneralInfo = document.createElement('h5')
  leftHeaderGeneralInfo.innerText = 'Pacient Information'
  colGeneralInfoLeft.appendChild(leftHeaderGeneralInfo)

  let leftHeaderGeneralInfoText = document.createElement('p')
  leftHeaderGeneralInfoText.setAttribute('class', 'text-muted')
  leftHeaderGeneralInfoText.innerText =
    'Here you will find the contact information of the patient as well as the profile picture, to see room and full diagnosis click on: 3-Intensive Care Unit'
  colGeneralInfoLeft.appendChild(leftHeaderGeneralInfoText)

  let img = document.createElement('img')
  img.setAttribute('src', data.picture.large)
  img.setAttribute('width', '150px')
  img.setAttribute('height', '150px')
  //colGeneralInfoLeft.appendChild(img) //img to colGeneralInfoLeft

  // RIGHT COL general info
  let colGeneralInfoRight = document.createElement('div')
  colGeneralInfoRight.setAttribute('class', 'col-md-7')
  rowGeneral.appendChild(colGeneralInfoRight)

  let generalInfoLabelName = document.createElement('label') //label name
  generalInfoLabelName.setAttribute('for', 'firstName')
  generalInfoLabelName.innerHTML = 'First Name'
  colGeneralInfoRight.appendChild(generalInfoLabelName)

  let generalInfoRightDiv = document.createElement('div') //div where input goes
  generalInfoRightDiv.setAttribute('class', 'input-group mb-3')
  colGeneralInfoRight.appendChild(generalInfoRightDiv)

  let GeneralInfoRightInputName = document.createElement('input')
  GeneralInfoRightInputName.setAttribute('type', 'text')
  GeneralInfoRightInputName.setAttribute('id', 'firstName')
  GeneralInfoRightInputName.setAttribute('class', 'form-control') //text muted when viewing ;)
  GeneralInfoRightInputName.disabled = true
  GeneralInfoRightInputName.value = `${data.name.first} ${data.name.last}`
  generalInfoRightDiv.appendChild(GeneralInfoRightInputName)

  //create html elements
  let room = document.createElement('p')
  room.innerText = data.room

  let row = document.createElement('div')
  row.setAttribute('class', 'row')

  let leftCol = document.createElement('div')
  leftCol.setAttribute('class', 'col-4')

  let rightCol = document.createElement('div')
  rightCol.setAttribute('class', 'col-8')

  let info = document.createElement('span')
  info.setAttribute('class', 'card-text')
  info.innerText = 'Date of Admission: XX/XX/XXXX'

  //show modal
  modalShow.show()
}

//add new patient fn
const newPatient = () => {
  //name

  let name = {
    first: document.getElementById('firstName').value,
    last: document.getElementById('lastName').value,
    title: '',
  }

  // diagnosis
  let diagnosis = document.getElementById('diagnosis').value

  // date of birth
  let dob = {
    age: 22, //calculation of age (????)
    date: document.getElementById('dob').value,
  }
  // email
  let patientEmail = document.getElementById('email').value
  // gender

  // id{}

  // phone
  let phone = document.getElementById('phone').value

  // picture{}
  let picture = {
    small: document.getElementById('inputPicture').files[0],
    medium: document.getElementById('inputPicture').files[0],
    large: document.getElementById('inputPicture').files[0],
  }

  // registered{}

  // room
  let room = document.getElementById('room').value

  //get HTML values from imputs

  // let underAge = document.getElementById('underage').checked
  console.log('Patient', picture)
}

fetchData()

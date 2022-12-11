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
    cardBody.setAttribute('class', 'card-body px-4 py-5')

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
  navTabs.setAttribute('id', 'viewPatient-nav-tab')
  navTabs.setAttribute('role', 'tablist')
  nav.appendChild(navTabs)

  //nav-tabs buttons general-info
  let btnGeneral = document.createElement('button')
  btnGeneral.setAttribute('class', 'nav-link active')
  btnGeneral.setAttribute('id', 'viewPatient-nav-general-info-tab')
  btnGeneral.setAttribute('data-bs-toggle', 'tab')
  btnGeneral.setAttribute('data-bs-target', '#viewPatient-nav-general-info')
  btnGeneral.setAttribute('type', 'button')
  btnGeneral.setAttribute('role', 'tab')
  btnGeneral.setAttribute('aria-controls', 'viewPatient-nav-general-info')
  btnGeneral.setAttribute('aria-selected', 'true')
  btnGeneral.innerText = '1 - General info'
  navTabs.appendChild(btnGeneral)

  //nav-tabs buttons contact-info
  let btnContactInfo = document.createElement('button')
  btnContactInfo.setAttribute('class', 'nav-link')
  btnContactInfo.setAttribute('id', 'viewPatient-nav-contact-info-tab')
  btnContactInfo.setAttribute('data-bs-toggle', 'tab')
  btnContactInfo.setAttribute('data-bs-target', '#viewPatient-nav-contact-info')
  btnContactInfo.setAttribute('type', 'button')
  btnContactInfo.setAttribute('role', 'tab')
  btnContactInfo.setAttribute('aria-controls', 'viewPatient-nav-contact-info')
  btnContactInfo.setAttribute('aria-selected', 'false')
  btnContactInfo.innerText = '2 - Contact information'
  navTabs.appendChild(btnContactInfo)

  //nav-tabs buttons nav-icu-info-tab
  let btnIcu = document.createElement('button')
  btnIcu.setAttribute('class', 'nav-link')
  btnIcu.setAttribute('id', 'viewPatient-nav-icu-info-tab')
  btnIcu.setAttribute('data-bs-toggle', 'tab')
  btnIcu.setAttribute('data-bs-target', '#viewPatient-nav-icu-info')
  btnIcu.setAttribute('type', 'button')
  btnIcu.setAttribute('role', 'tab')
  btnIcu.setAttribute('aria-controls', 'viewPatient-nav-icu-info')
  btnIcu.setAttribute('aria-selected', 'false')
  btnIcu.innerText = '3 - Intensive care unit'
  navTabs.appendChild(btnIcu)

  //tab-content, goes into modal-body
  let tabContent = document.createElement('div')
  tabContent.setAttribute('class', 'tab-content')
  tabContent.setAttribute('id', 'viewPatient-nav-tabContent')
  modalBody.appendChild(tabContent)

  //---------------------------- TAB CONTENT (general Info) ----------------------------

  //content GENERAL INFO TAB
  let generalInfo = document.createElement('div')
  generalInfo.setAttribute('class', 'tab-pane fade show active p-3')
  generalInfo.setAttribute('id', 'viewPatient-nav-general-info')
  generalInfo.setAttribute('role', 'tabpanel')
  generalInfo.setAttribute(
    'aria-labelledby',
    'viewPatient-nav-general-info-tab'
  )
  tabContent.appendChild(generalInfo) //apend to tabContent

  let rowGeneral = document.createElement('div')
  rowGeneral.setAttribute('class', 'row')
  generalInfo.appendChild(rowGeneral) //append to row

  //LEFT COL general info
  let colGeneralInfoLeft = document.createElement('div')
  colGeneralInfoLeft.setAttribute(
    'class',
    'd-flex flex-column align-items-center col-md-5'
  )
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
  colGeneralInfoLeft.appendChild(img) //img to colGeneralInfoLeft

  // RIGHT COL general info
  let colGeneralInfoRight = document.createElement('div')
  colGeneralInfoRight.setAttribute('class', 'col-md-7')
  rowGeneral.appendChild(colGeneralInfoRight)

  //NAME
  let generalInfoLabelName = document.createElement('label') //label name
  generalInfoLabelName.setAttribute('for', 'firstName')
  generalInfoLabelName.innerHTML = 'First Name'
  colGeneralInfoRight.appendChild(generalInfoLabelName)

  let generalInfoRightDivName = document.createElement('div') //div where input goes
  generalInfoRightDivName.setAttribute('class', 'input-group mb-3')
  colGeneralInfoRight.appendChild(generalInfoRightDivName)

  let GeneralInfoRightInputName = document.createElement('input') //input name
  GeneralInfoRightInputName.setAttribute('type', 'text')
  GeneralInfoRightInputName.setAttribute('id', 'firstName')
  GeneralInfoRightInputName.setAttribute('class', 'form-control') //text muted when viewing ;)
  GeneralInfoRightInputName.disabled = true
  GeneralInfoRightInputName.value = data.name.first
  generalInfoRightDivName.appendChild(GeneralInfoRightInputName)

  //LAST NAME
  let generalInfoLabelLastName = document.createElement('label') //label lastname
  generalInfoLabelLastName.setAttribute('for', 'firstName')
  generalInfoLabelLastName.innerHTML = 'First Name'
  colGeneralInfoRight.appendChild(generalInfoLabelLastName)

  let generalInfoRightDivLastName = document.createElement('div') //div where input goes
  generalInfoRightDivLastName.setAttribute('class', 'input-group mb-3')
  colGeneralInfoRight.appendChild(generalInfoRightDivLastName)

  let GeneralInfoRightInputLastName = document.createElement('input') //input lastName
  GeneralInfoRightInputLastName.setAttribute('type', 'text')
  GeneralInfoRightInputLastName.setAttribute('id', 'lastName')
  GeneralInfoRightInputLastName.setAttribute('class', 'form-control') //text muted when viewing ;)
  GeneralInfoRightInputLastName.disabled = true
  GeneralInfoRightInputLastName.value = data.name.last
  generalInfoRightDivLastName.appendChild(GeneralInfoRightInputLastName)

  //Date of Birth (DOB)
  let generalInfoLabelDOB = document.createElement('label') //label lastname
  generalInfoLabelDOB.setAttribute('for', 'dob')
  generalInfoLabelDOB.innerHTML = 'Date of Birth'
  colGeneralInfoRight.appendChild(generalInfoLabelDOB)

  let generalInfoRightDivDOB = document.createElement('div') //div where input goes
  generalInfoRightDivDOB.setAttribute('class', 'input-group mb-3')
  colGeneralInfoRight.appendChild(generalInfoRightDivDOB)

  let GeneralInfoRightInputDOB = document.createElement('input') //input lastName
  GeneralInfoRightInputDOB.setAttribute('type', 'date')
  GeneralInfoRightInputDOB.setAttribute('id', 'firstName')
  GeneralInfoRightInputDOB.setAttribute('class', 'form-control') //text muted when viewing ;)
  GeneralInfoRightInputDOB.disabled = true
  GeneralInfoRightInputDOB.value = '23/12/1989' //HOW TO GET DATE HERE  new Date() constructor and parse date??
  generalInfoRightDivDOB.appendChild(GeneralInfoRightInputDOB)

  //gender
  let genderDiv = document.createElement('div')
  genderDiv.setAttribute('class', 'input-group mb-3')
  colGeneralInfoRight.appendChild(genderDiv)

  //male div (input+label)
  let genderDivMale = document.createElement('div') //MALE
  genderDivMale.setAttribute('class', 'form-check form-check-inline')
  genderDiv.appendChild(genderDivMale) //apends to genderDiv
  let genderDivMaleInput = document.createElement('input')
  genderDivMaleInput.setAttribute('class', 'form-check-input')
  genderDivMaleInput.setAttribute('type', 'checkbox')
  genderDivMaleInput.setAttribute('name', 'gender')
  genderDivMaleInput.setAttribute('id', 'checkMale')

  let genderDivMaleLabel = document.createElement('label')
  genderDivMaleLabel.setAttribute('class', 'form-check-label')
  genderDivMaleLabel.setAttribute('for', 'checkMale')
  genderDivMaleLabel.innerText = 'Male'
  genderDivMale.appendChild(genderDivMaleInput)
  genderDivMale.appendChild(genderDivMaleLabel)

  //female div (input + label)
  let genderDivFemale = document.createElement('div') //MALE
  genderDivFemale.setAttribute('class', 'form-check form-check-inline')
  genderDiv.appendChild(genderDivFemale) //apends to genderDiv
  let genderDivFemaleInput = document.createElement('input')
  genderDivFemaleInput.setAttribute('class', 'form-check-input')
  genderDivFemaleInput.setAttribute('type', 'checkbox')
  genderDivFemaleInput.setAttribute('name', 'gender')
  genderDivFemaleInput.setAttribute('id', 'checkMale')

  let genderDivFemaleLabel = document.createElement('label')
  genderDivFemaleLabel.setAttribute('class', 'form-check-label')
  genderDivFemaleLabel.setAttribute('for', 'checkMale')
  genderDivFemaleLabel.innerText = 'Female'
  genderDivFemale.appendChild(genderDivFemaleInput)
  genderDivFemale.appendChild(genderDivFemaleLabel)

  //diverse div (input + label)
  let genderDivDiverse = document.createElement('div') //MALE
  genderDivDiverse.setAttribute('class', 'form-check form-check-inline')
  genderDiv.appendChild(genderDivDiverse) //apends to genderDiv
  let genderDivDiverseInput = document.createElement('input')
  genderDivDiverseInput.setAttribute('class', 'form-check-input')
  genderDivDiverseInput.setAttribute('type', 'checkbox')
  genderDivDiverseInput.setAttribute('name', 'gender')
  genderDivDiverseInput.setAttribute('id', 'checkMale')

  let genderDivDiverseLabel = document.createElement('label')
  genderDivDiverseLabel.setAttribute('class', 'form-check-label')
  genderDivDiverseLabel.setAttribute('for', 'checkMale')
  genderDivDiverseLabel.innerText = 'Diverse'
  genderDivDiverse.appendChild(genderDivDiverseInput)
  genderDivDiverse.appendChild(genderDivDiverseLabel)

  //disable checkboxes and labels for gender, it's done at the end
  //of all the rendering, due to ERROR CAN'T ACCESS BEFORE INITIALIZATIONS
  if (data.gender == 'diverse') {
    genderDivDiverseInput.checked = true
    //set other checkboxes and labels to disable
    genderDivMaleLabel.setAttribute('class', 'text-muted')
    genderDivMaleInput.disabled = true
    genderDivFemaleLabel.setAttribute('class', 'text-muted')
    genderDivFemaleInput.disabled = true
  }
  if (data.gender == 'female') {
    genderDivFemaleInput.checked = true
    //set other checkboxes and labels to disable
    genderDivMaleLabel.setAttribute('class', 'text-muted')
    genderDivMaleInput.disabled = true
    genderDivDiverseLabel.setAttribute('class', 'text-muted')
    genderDivDiverseInput.disabled = true
  }
  if (data.gender == 'male') {
    genderDivMaleInput.checked = true
    //set other checkboxes and labels to disable
    genderDivFemaleLabel.setAttribute('class', 'text-muted')
    genderDivFemaleInput.disabled = true
    genderDivDiverseLabel.setAttribute('class', 'text-muted')
    genderDivDiverseInput.disabled = true
  }

  //---------------------------- TAB CONTENT (contact info) ----------------------------

  //content CONTACT INFORMATION
  //content GENERAL INFO TAB
  let contactInfo = document.createElement('div')
  contactInfo.setAttribute('class', 'tab-pane fade p-3')
  contactInfo.setAttribute('id', 'viewPatient-nav-contact-info')
  contactInfo.setAttribute('role', 'tabpanel')
  contactInfo.setAttribute(
    'aria-labelledby',
    'viewPatient-nav-contact-info-tab'
  )
  tabContent.appendChild(contactInfo) //apend to tabContent

  let rowContactInfo = document.createElement('div')
  rowContactInfo.setAttribute('class', 'row')
  contactInfo.appendChild(rowContactInfo) //append to row

  //LEFT COL CONTACT info
  let colContactInfoLeft = document.createElement('div')
  colContactInfoLeft.setAttribute(
    'class',
    'd-flex flex-column align-items-center col-md-5'
  )
  rowContactInfo.appendChild(colContactInfoLeft) //append to rowContact Info

  //left header info H5
  let leftHeaderContactInfo = document.createElement('h5')
  leftHeaderContactInfo.innerText = 'Contact Information'
  colContactInfoLeft.appendChild(leftHeaderContactInfo)

  let leftHeaderContactInfoText = document.createElement('p')
  leftHeaderContactInfoText.setAttribute('class', 'text-muted')
  leftHeaderContactInfoText.innerText =
    'Display here you will find relevant information to get in touch with the patient, as well as information regarding emergency contact'
  colContactInfoLeft.appendChild(leftHeaderContactInfoText)

  // RIGHT COL general info
  let colContactInfoRight = document.createElement('div')
  colContactInfoRight.setAttribute('class', 'col-md-7')
  rowContactInfo.appendChild(colContactInfoRight)

  //Phone
  let contactLabelPhone = document.createElement('label') //label name
  contactLabelPhone.setAttribute('for', 'phone')
  contactLabelPhone.innerHTML = 'Phone Number'
  colContactInfoRight.appendChild(contactLabelPhone)

  let contactInfoDivPhone = document.createElement('div') //div where input goes
  contactInfoDivPhone.setAttribute('class', 'input-group mb-3')
  colContactInfoRight.appendChild(contactInfoDivPhone)

  let contactInfoRightInputPhone = document.createElement('input') //input name
  contactInfoRightInputPhone.setAttribute('type', 'text')
  contactInfoRightInputPhone.setAttribute('id', 'firstName')
  contactInfoRightInputPhone.setAttribute('class', 'form-control') //text muted when viewing ;)
  contactInfoRightInputPhone.disabled = true
  contactInfoRightInputPhone.value = data.phone
  contactInfoDivPhone.appendChild(contactInfoRightInputPhone)

  //Email
  let contactLabelEmail = document.createElement('label') //label name
  contactLabelEmail.setAttribute('for', 'email')
  contactLabelEmail.innerHTML = 'Patient Email'
  colContactInfoRight.appendChild(contactLabelEmail)

  let contactInfoDivEmail = document.createElement('div') //div where input goes
  contactInfoDivEmail.setAttribute('class', 'input-group mb-3')
  colContactInfoRight.appendChild(contactInfoDivEmail)

  let contactInfoRightInputEmail = document.createElement('input') //input name
  contactInfoRightInputEmail.setAttribute('type', 'text')
  contactInfoRightInputEmail.setAttribute('id', 'firstName')
  contactInfoRightInputEmail.setAttribute('class', 'form-control') //text muted when viewing ;)
  contactInfoRightInputEmail.disabled = true
  contactInfoRightInputEmail.value = data.email
  contactInfoDivEmail.appendChild(contactInfoRightInputEmail)

  //---------------------------- TAB CONTENT (contact info) ----------------------------

  //content ICU
  //content ICU TAB
  let icu = document.createElement('div')
  icu.setAttribute('class', 'tab-pane fade p-3')
  icu.setAttribute('id', 'viewPatient-nav-icu-info')
  icu.setAttribute('role', 'tabpanel')
  icu.setAttribute('aria-labelledby', 'viewPatient-nav-icu-tab')
  tabContent.appendChild(icu) //apend to tabContent

  let rowIcu = document.createElement('div')
  rowIcu.setAttribute('class', 'row')
  icu.appendChild(rowIcu) //append to row

  //LEFT COL CONTACT info
  let colIcuLeft = document.createElement('div')
  colIcuLeft.setAttribute(
    'class',
    'd-flex flex-column align-items-center col-md-5'
  )
  rowIcu.appendChild(colIcuLeft) //append to rowContact Info

  //left header info H5
  let leftHeaderIcu = document.createElement('h5')
  leftHeaderIcu.innerText = 'Intensive Care Unit'
  colIcuLeft.appendChild(leftHeaderIcu)

  let leftHeaderIcuText = document.createElement('p')
  leftHeaderIcuText.setAttribute('class', 'text-muted')
  leftHeaderIcuText.innerText =
    'Relevant information for Health personnel, such as Room number, diagnosis, room temperature and actual nurse'
  colIcuLeft.appendChild(leftHeaderIcuText)

  // RIGHT COL ICU info
  let colIcuRight = document.createElement('div')
  colIcuRight.setAttribute('class', 'col-md-7')
  rowIcu.appendChild(colIcuRight)

  //Diagnosis
  let icuLabelDiagnosis = document.createElement('label') //label name
  icuLabelDiagnosis.setAttribute('for', 'phone')
  icuLabelDiagnosis.innerHTML = 'Actual Diagnosis'
  colIcuRight.appendChild(icuLabelDiagnosis)

  let icuDivDiagnosis = document.createElement('div') //div where input goes
  icuDivDiagnosis.setAttribute('class', 'input-group mb-3')
  colIcuRight.appendChild(icuDivDiagnosis)

  let icuDivDiagnosisInput = document.createElement('input') //input name
  icuDivDiagnosisInput.setAttribute('type', 'text')
  icuDivDiagnosisInput.setAttribute('id', 'firstName')
  icuDivDiagnosisInput.setAttribute('class', 'form-control') //text muted when viewing ;)
  icuDivDiagnosisInput.disabled = true
  icuDivDiagnosisInput.value = data.diagnosis
  icuDivDiagnosis.appendChild(icuDivDiagnosisInput)

  //Room Number
  let icuLabelRoom = document.createElement('label') //label name
  icuLabelRoom.setAttribute('for', 'room')
  icuLabelRoom.innerHTML = 'Room number - Unit number'
  colIcuRight.appendChild(icuLabelRoom)

  let icuDivRoom = document.createElement('div') //div where input goes
  icuDivRoom.setAttribute('class', 'input-group mb-3')
  colIcuRight.appendChild(icuDivRoom)

  let icuDivRoomInput = document.createElement('input') //input name
  icuDivRoomInput.setAttribute('type', 'text')
  icuDivRoomInput.setAttribute('id', 'firstName')
  icuDivRoomInput.setAttribute('class', 'form-control') //text muted when viewing ;)
  icuDivRoomInput.disabled = true
  icuDivRoomInput.value = data.room
  icuDivRoom.appendChild(icuDivRoomInput)

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

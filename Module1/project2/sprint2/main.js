// random bed function
const randomRoom = () => {
  return Math.floor(Math.random() * 10 + 1)
}

const randomLastNurse = async () => {
  const randomNurse = await fetch('https://randomuser.me/api/')
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

const fetchData = async () => {
  await fetch('https://randomuser.me/api/?results=50')
    .then((res) => res.json())
    .then((data) => printData(data.results))
}

const printData = (data) => {
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
    cardText.innerText = `Patient Room: ${randomRoom()}`

    let diagnosis = document.createElement('p') //diagnosis
    diagnosis.setAttribute('class', 'card-text')
    diagnosis.innerText = randomDiagnosis()

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

const showData = (data, e) => {
  console.log('random nurse:  ', randomLastNurse())
  e.stopPropagation()
  let title = document.getElementById('modal-title')
  title.innerText = data.name.first + ' ' + data.name.last
  //get modal
  const modalShow = new bootstrap.Modal('#modalViewPatient')

  //get modal body
  let modalBody = document.getElementById('modal-body')

  //create html elements
  let room = document.createElement('p')
  room.innerText = `Room: ${randomRoom()}  Diagnosis: ${randomDiagnosis()}`

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

fetchData()

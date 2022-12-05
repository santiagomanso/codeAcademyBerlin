// random bed function
const randomRoom = () => {
  return Math.floor(Math.random() * 10 + 1)
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
    'Thymoid stage IV carninoma',
    'Leukemia',
    'Chemo session #5',
  ]

  return diagnosis[Math.floor(Math.random() * 15)]
}

const fetchData = async () => {
  await fetch('https://randomuser.me/api/?results=200')
    .then((res) => res.json())
    .then((data) => printData(data.results))
}

const printData = (data) => {
  // console.log('data', data)
  let grid = document.getElementById('col')

  for (let i = 0; i < data.length; i++) {
    //row
    let row = document.createElement('div')
    row.setAttribute(
      'class',
      'row mb-3 border rounded-5 align-items-baseline py-4'
    )
    row.setAttribute('id', 'rowPatient')

    //colored background
    if (i % 2 === 0) {
      row.classList.add('bg-custom2')
    } else {
      row.classList.add('bg-custom1')
      row.classList.add('text-light')
    }

    //col - img
    let colImg = document.createElement('div')
    colImg.setAttribute('class', 'col-1')
    let img = document.createElement('img')
    img.setAttribute('src', data[i].picture.medium)
    img.setAttribute('class', 'rounded-circle')
    colImg.appendChild(img)

    //col name
    let colName = document.createElement('div')
    colName.setAttribute('class', 'col-3 fs-5 fw-semibold')
    colName.innerText = data[i].name.first + ' ' + data[i].name.last

    //col room
    let colRoom = document.createElement('p')
    colRoom.setAttribute('class', 'col-1 fs-5 fw-semibold text-start ps-4')
    colRoom.innerText = randomRoom()

    //col diagnosis
    let colDx = document.createElement('p')
    colDx.setAttribute('class', 'col-5 fs-6 fw-semibold')
    colDx.innerText = randomDiagnosis()

    //col actions
    let divAction = document.createElement('div')
    divAction.setAttribute('class', 'col-2 text-start')

    //div with action
    let colView = document.createElement('i')
    colView.setAttribute('class', 'fa-regular fa-eye fs-3 px-2 icon icon-view')
    colView.setAttribute('id', 'view')
    let colEdit = document.createElement('i')
    colEdit.setAttribute(
      'class',
      'fa-regular fa-pen-to-square fs-3 px-2 icon icon-edit'
    )
    let colDel = document.createElement('i')
    colDel.setAttribute('class', 'fa-solid fa-trash fs-3 px-2 icon icon-delete')
    divAction.appendChild(colView)
    divAction.appendChild(colEdit)
    divAction.appendChild(colDel)

    row.appendChild(colImg) // img
    row.appendChild(colName) // name
    row.appendChild(colRoom) // room
    row.appendChild(colDx) // diagnosis
    row.appendChild(divAction) //actions
    row.addEventListener('click', () => showData(data[i]))
    grid.appendChild(row) // ENTIRE ROW
  }
}

const showData = (data) => {
  //get modal
  const modalShow = new bootstrap.Modal('#modalViewPatient')

  //get modal body
  let modalBody = document.getElementById('modal-body')

  //create html elements
  let h2 = document.createElement('h2')
  h2.innerText = data.name.first + ' ' + data.name.last

  //append to modal body
  modalBody.appendChild(h2)

  //show modal
  modalShow.show()
}

fetchData()

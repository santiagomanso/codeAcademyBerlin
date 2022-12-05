// random bed function
const randomBed = () => {
  return Math.floor(Math.random() * 10 + 1)
}

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
  console.log('data', data)
  let grid = document.getElementById('col')
  for (let i = 0; i < data.length; i++) {
    //row
    let row = document.createElement('div')
    row.setAttribute(
      'class',
      'row mb-3 border rounded align-items-baseline py-4'
    )

    if (i % 2 === 0) {
      row.classList.add('bg-light')
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
    colName.setAttribute('class', 'col-3 fs-4 fw-semibold')
    colName.innerText =
      data[i].name.title + ' ' + data[i].name.first + ' ' + data[i].name.last

    //col bed
    let colBed = document.createElement('p')
    colBed.setAttribute('class', 'col-1 fs-4 fw-semibold')
    colBed.innerText = randomBed()

    //col diagnosis
    let colDx = document.createElement('p')
    colDx.setAttribute('class', 'col-5 fs-5 fw-semibold')
    colDx.innerText = randomDiagnosis()

    //col actions
    let divAction = document.createElement('div')
    divAction.setAttribute('class', 'col-2')

    let colView = document.createElement('i')
    colView.setAttribute('class', 'fa-regular fa-eye fs-2 px-3')
    let colEdit = document.createElement('i')
    colEdit.setAttribute('class', 'fa-regular fa-pen-to-square fs-2 px-3')
    let colDel = document.createElement('i')
    colDel.setAttribute('class', 'fa-solid fa-trash fs-2 px-3')
    divAction.appendChild(colView)
    divAction.appendChild(colEdit)
    divAction.appendChild(colDel)

    row.appendChild(colImg) // img
    row.appendChild(colName) // name
    row.appendChild(colBed) // bed
    row.appendChild(colDx) // diagnosis
    row.appendChild(divAction)
    grid.appendChild(row) // ENTIRE ROW
  }
}

fetchData()


const billinput = document.getElementById("billTotalInput")
const tipinput = document.getElementById("tipInput")
const nopeople =  document.getElementById("numberOfPeople")
const perperson = document.getElementById("perPersonTotal")
let people = Number(nopeople.innerText)

const calculateBill = () => {
  const bill = Number(billinput.value)
  const tip = Number(tipinput.value) / 100
  const tipamount = bill * tip 
  const total = bill + tipamount  
  const totalperperson = total / people
  perperson.innerText = `$${totalperperson.toFixed(2)}`
}



const increasePeople = () => {
  people = people + 1
  nopeople.innerText = people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  if (people <= 1) {
    alert("Hey You Can't go below 1 person")
    return
  }
  
  people = people - 1
  nopeople.innerText = people
calculateBill()
}
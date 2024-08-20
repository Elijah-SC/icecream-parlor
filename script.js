const iceCream = [
  { name: 'Cookie Dough', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Vanilla', price: 1.00, quantity: 0, type: 'scoop' },
  { name: 'Strawberry', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Mint Chip', price: 1.25, quantity: 0, type: 'topping' },
  { name: 'M&Ms Shake', price: 8.00, quantity: 0, type: 'topping' },
  { name: 'Pumpkin Shake', price: 9.50, quantity: 0, type: 'topping' }
]


function orderItem(SelectedItem) {

  console.log(`ordering item`, SelectedItem)

  let ItemOrdered = null

  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    if (item.name == SelectedItem) {
      console.log(`item found`, item);
      ItemOrdered = item
    }
  }
  ItemOrdered.quantity += 1
  drawOrder()
  drawTotal()
  drawItemTotal()

}



function calcOrderTotal() {
  let orderTotal = 0
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    orderTotal += item.price * item.quantity
  }
  return orderTotal

}

function calcTotalItems() {

  let totalItems = 0
  for (let i = 0; i < iceCream.length; i++) {

    let item = iceCream[i]
    totalItems = item.quantity
  }

  return totalItems

}




function drawOrder() {

  let orderElm = document.getElementById(`order`)
  let orderContent = ``

  for (let i = 0; i < iceCream.length; i++) {
    // console.log(i, iceCream[i])
    let item = iceCream[i]
    if (item.quantity > 0) {
      orderContent += `<p>${item.quantity}x ${item.name} $${(item.quantity * item.price).toFixed(2)}</p>`
    }
  }
  console.log(orderContent);
  orderElm.innerHTML = orderContent

}

function drawTotal() {

  let customerTotal = calcOrderTotal()
  let totalElm = document.getElementById(`total`)
  totalElm.innerText = customerTotal.toFixed(2)

}

// function drawItemTotal() {
//   let itemTotal = calcTotalItems()
//   let totalItemElm = document.getElementById(`total-items`)
//   totalItemElm.innerText = itemTotal.toFixed(2)


// }






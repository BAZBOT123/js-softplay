// do not change these lines

function reset () {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
function enter (numChildren, numAdults) {
  adults += numAdults
  children += numChildren
  if (numChildren > numAdults) {
  return false }
  return true
}

function leave (numChildren, numAdults) {
  adults -= numAdults
  children -= numChildren
  if (children -= numChildren && adults === numAdults) {
  return true }
  return false
}

function occupancy() {
  return {
    adults : adults,
    children : children
  }
}

//function leave (numChildren, numAdults) {
 // adults -= numAdults
 // children += numChildren
  //return false
//}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset
}

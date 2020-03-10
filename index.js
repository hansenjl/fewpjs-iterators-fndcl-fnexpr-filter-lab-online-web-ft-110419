// Code your solution here
function matchName() {
  
}

function fuzzyMatch() {
  
}

function findMatching(drivers, name) {
  return drivers.filter(function(d){
    return d.toUpperCase() === name.toUpperCase()
  })
}
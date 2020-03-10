// Code your solution here
function matchName() {
  
}

function fuzzyMatch(drivers, name) {
  
}

function findMatching(drivers, name) {
  return drivers.filter(function(d){
    return d.toUpperCase() === name.toUpperCase()
  })
}
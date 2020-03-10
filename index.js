// Code your solution here
function matchName(drivers, name) {
  
}

function fuzzyMatch(drivers, sa) {
  return drivers.filter(function(d){
    return d.startsWith(sa)
  })
}

function findMatching(drivers, name) {
  return drivers.filter(function(d){
    return d.toUpperCase() === name.toUpperCase()
  })
}
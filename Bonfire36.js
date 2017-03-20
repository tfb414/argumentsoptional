function addTogether(num) {
  

  if(arguments.length > 1){
    for (var i in arguments){
      if (removeInvalid(arguments[i])){
        return undefined;
      }
    }
    return addThemUp(arguments[0], arguments[1]);
  }
  else {
    if (removeInvalid(num)){
        return undefined;
    }
    var initialAnswer = num;
    return function derp(number){
    if (removeInvalid(number)){
      return undefined;
    }
      return initialAnswer + number;
    }
  }
}
function addThemUp(a, b){
  return a + b;
}

function removeInvalid(possiblyInvalid){
  if (typeof possiblyInvalid  !== "number"){
    return true;
  }
}



addTogether(2)("fart");


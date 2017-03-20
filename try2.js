

function addTogether(num) {
  if(arguments.length > 1){
  return checkThem();
  }
  else{
    var initialAnswer = checkThem(num);
    return function(num){
    console.log("now this" + (initialAnswer + checkThem(num)));
    return (initialAnswer + checkThem(num));
  }
  }
  
}

function willItAdd(number){
  return function(secondNumber){
    console.log(number + secondNumber);
    return (number + secondNumber);
}
}

function numberCheck(possibleNumber){
  if(typeof possibleNumber === "number"){
    return possibleNumber;
  }
  else{
    return false;
  }
}

function addThemUp(a, b){
  return a + b;
}

function checkThem(){
  var numbersToCombine = [];
  console.log(arguments.length);
  for (var i in arguments){
    if(numberCheck(arguments[i])){
      numbersToCombine.push(arguments[i]);
    }
    else{
      return undefined;
    }
  }
  numbersToCombine = numbersToCombine.slice(0, 2);
  var answer = numbersToCombine.reduce(addThemUp, 0);
  //console.log(answer);
  return answer;
}
//checkThem(2);

addTogether(2,3);
//addTogether("http://bit.ly/IqT6zt")

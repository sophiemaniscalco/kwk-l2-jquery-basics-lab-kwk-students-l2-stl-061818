//add your code here

$(document).ready(function(){
  
  doMath();
});

var num1=$('#number1')
var num2=$('#number2')
var operator=$('#operation')

function doMath() {
  $('#equals').on('click', function(){
  num1=Number.parseFloat(num1.val());
  num2=parseFloat(num2.val());
  operator=operator.val();
  result(num1, num2, operator)
  })
}

function validated(operator, num1, num2){
  if (operator  == '+') {
    $('#validate') 
    return()
  }
}

function result(num1, num2, operator){
  if (operator == '+') {
    $('#result').html(num1 + num2)
    return(num1 + num2)  
    
  }
  
  else if (operator == "-") {
    $("#result").html(num1 - num2)
  }
  
  else if (operator == "*") {
    $("#result").html(num1 * num2)
  }
  else if (operator == "/") {
    $("#result").html(num1 / num2)
    
  }
}
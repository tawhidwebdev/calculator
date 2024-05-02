function Delete(){
  document.querySelector("#myRuselt").value = ""
}
function calculator(newValue){
 document.querySelector("#myRuselt").value += newValue;
}
function Answer(){
 var Eval = eval(document.querySelector("#myRuselt").value);
 document.querySelector("#myRuselt").value = Eval;
}
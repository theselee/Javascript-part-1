myFunction();

function myFunction() {
  let myName = "Julius Lee";
  let myHeight = "6ft";
  let myCountry = "United States";
  let message = myName + " " + myHeight + " " + myCountry;
  document.getElementById("demo1").innerHTML =
    typeof myName +
    "<br> " +
    "My name is " +
    myName +
    "<br>" +
    "My height is " +
    myHeight +
    "<br>" +
    "My country is " +
    myCountry;
  alert(message);
}
alert("scripts.js has loaded!");
$("#response").html("scripts.js has loaded!");
let userInput;
userInput = "samosa";
if ( userInput === "burrito" ) {
  $("#response").html("Brilliant choice!");
} else {
  $("#response").html("Don’t you want a burrito?");
}

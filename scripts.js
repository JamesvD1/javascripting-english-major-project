/*let userInput;
userInput = prompt("What do you want to have for dinner?", "Type your answer here.");
if ( userInput === "burrito" ) {
  $("#response").html("Brilliant choice!");
} else {
  $("#response").html("Don’t you want a burrito?");
}
*/

/*let userInput;
userInput = prompt("are you tired?", "Type your answer here.");
if ( userInput === "yes" ) [
  $("#response").html("me too!");
  } else {
    $("#response").html("oh you look tired, guess you're just ugly.");
  }
*/



let makeABurrito;
makeABurrito = function(beansVariable){
  let beansResponse;
  beansResponse = "You ordered " + beansVariable + "beans. Good choice!";
  $("#response").html(beansResponse);
  rollupTortilla();
};
let blackBeans;
blackBeans = "black";
makeABurrito(blackBeans);

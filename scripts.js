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



/*let makeABurrito;
makeABurrito = function(beansVariable){
  let beansResponse;
  beansResponse = "You ordered " + beansVariable + "beans. Good choice!";
  $("#response").html(beansResponse);
  rollupTortilla();
};
let blackBeans;
blackBeans = "black";
makeABurrito(blackBeans); 
*/

/*let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3];
arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]];
$("#response").html(arrayOfStrings[2]);
*/

/*let myBurritoObject;
myBurritoObject = {
  tortilla :"wheat" , 
  guacamole : true, 
  beans: "pinto" , 
  habaneroSauceSquirts: 3 
};
$("#response").html(myBurritoObject["tortilla"]);
*/

let myHabaneroSauceSquirts, myBurritoObject;
myHabaneroSauceSquirts = 3;
myBurritoObject = {
  tortilla: "wheat" ,
  guacaole: true 
  beans: "pinto", 
habaneroSaucweSquirts : myHabaneroSauceSquirts, 
spiciness function(){
  if (myHabaneroSauceSquirts > 0 ){
    alert("this is a spicy burrito!");
  } else {
    alert("this is a mild burrito.");
  }
}
};
$("#response").html("Your burrito has " +
  myBurritoObject.habaneroSauceSquirts +
  " squirts of habanero.");
myBurritoObject.spiciness();


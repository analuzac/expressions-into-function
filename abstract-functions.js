// Clean up the code below with a single function called `personalIntroduction`
// The new code should have the exact same functionality and output.

//My answer below:

var ledata=[
{
  name: "Bob",
  height: "72",
  favoriteColor: "red"
},
{
  name: "Samantha",
  height: "65",
  favoriteColor: "orange"
},
{
  name: "Tamera",
  height: "63",
  favoriteColor: "blue"
}
];

function personalIntroduction(ledata){
var stringArray=[];
for (i=0; i<ledata.length; i++){
  var string = "My name is " + ledata[i].name;
  string += ", and my height is " + ledata[i].height;
  string += ", and my favorite color is " + ledata[i].favoriteColor;
  stringArray.push(string);
}
return stringArray;
}

personalIntroduction(ledata);


// ORIGINAL CODE BELOW:
//
// var name = "Bob";
// var height = "72";
// var favoriteColor = "red";
// var string = "My name is " + name;
// string += ", and my height is " + height;
// string += ", and my favorite color is " + favoriteColor;
// console.log(string);
//
// var name = "Samantha";
// var height = "65";
// var favoriteColor = "orange";
// var string = "My name is " + name;
// string += ", and my height is " + height;
// string += ", and my favorite color is " + favoriteColor;
// console.log(string);
//
// var name = "Christopher";
// var height = "69";
// var favoriteColor = "green";
// var string = "My name is " + name;
// string += ", and my height is " + height;
// string += ", and my favorite color is " + favoriteColor;
// console.log(string);
//
// var name = "Tamera";
// var height = "63";
// var favoriteColor = "blue";
// var string = "My name is " + name;
// string += ", and my height is " + height;
// string += ", and my favorite color is " + favoriteColor;
// console.log(string);

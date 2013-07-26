// Ex 3
// alert("Hi");

// Ex 5
// var name = prompt("What is your name?");
// console.log("Your name is: " + name);


// Ex 6
// var movie = prompt("What movie would you like to see?");
// var time = prompt("What time would you like to see the movie?");
// var response = confirm("Would you like to go on a date with me to see the movie " + movie + " at " + time + "." );
// console.log(response);


// Ex 7
// var password = prompt("Give a password");
// while (password.length < 10){
//   var password = prompt("Your password is not long enough, try again");
// } 
// console.log("success!! Your password is " + password);

// Ex 8
// var age = prompt("What is your age?");
// if (age >= 21){
//   alert("Yay! You can drink the alcohol");
// } else if ( age == 18) {
//   alert("Too bad, Too bad.. come back in a few years");
// } else if ( age == 5) {
//   alert("And I'm a monkey's uncle");
// } else {
//   alert("Alright! Alright! Alright!");
// }


// Ex 9
// var groceryList = ["pecans", "avocadoes", "cheeze", "berries", "Dick Cheney"];
// var i;
// for ( i = 0; i < groceryList.length; i++){
//   console.log(groceryList[i]);
// }

// Ex 10
// var profile = { name: "Kipp", age: 230, gender: "neutral", pie: "cherry", fruit: "fruitcake"}
// alert("Name is " + profile["name"] + ". Age is " + "Gener is: " + profile["gender"] + ". Pie is: " + profile["pie"] + ". Fruit is " + profile["fruit"] + ".");

// Extension of Ex 10
// function person(name, fruit){
//   this.name = name;
//   this.fruit = fruit;
//   return this;
// }
// var gene = new person('Gene', 'cherries');
// alert("Name is: " + gene.name + ". Fruit is: " + gene.fruit);

// Ex 11
// function create_header(name) {
//   return ("<h1>" + name + "</h1>");
// }
// function create_image(image_file) {
//   return ("<img src='" + image_file + "'>");
// }
// function create_paragraph(age, gender, job) {
//   return ("<p>Your age: " + age + ". Your gender is: " + gender + ". Your job is: " + job + ".</p>");
// }
// function create_profile(name, age, gender, job, image_file) {
//   document.write(create_header(name));
//   document.write(create_image(image_file));
//   document.write(create_paragraph(age, gender, job));
// }
// create_profile("Kipp", 22, "frog", "salesman", "img/rose.jpg");


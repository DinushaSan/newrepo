//function to shuffle two arrays
function shuffleArray(array){
 
}

var arr = [1,2,3];
console.log(arr);
arr.length = 0;
console.log(arr);

//array to string
let fruits = ["banana", "apple", "orange", "grape"];
console.log(fruits.toString());

//connect by an operator
console.log(fruits.join("*"));

fruits.pop();
console.log(fruits);

fruits.push("kiwi");
console.log(fruits);

//shift(removing the first element)
fruits.shift();
console.log(fruits);
//unshift(add element to the beginning)
fruits.unshift("guava");
console.log(fruits);
//change an element
fruits[0] = "banana";
console.log(fruits);

//append element from length
fruits[fruits.length] = "Lemon"
console.log(fruits);
//delete 
delete fruits[0];
console.log(fruits);

fruits.shift();
console.log(fruits);
//Merging two arrays

var myletters = ['a', 'b', 'c'];
var mynumbers = [1, 2, 3];

var myall = myletters.concat(mynumbers);
console.log(myall);

//splice() add or remove items
//add items
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(2, 0, "Lemon", "Kiwi");
console.log(fruit);

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);

//splice to remove elements
fruits = ["Banana","Apple", "Guava", "Mango"];
//fruits.splice(0, 1);
console.log(fruits);

var citrus = fruits.slice(1);
console.log(citrus);

//pieces
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(3);
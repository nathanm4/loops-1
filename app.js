// JavaScript also has more specialized loops for collections,
// and we'll mention two of them here.
//
// You can use map() to do something to each item in a collection and create a new
// collection containing the changed items:

function toUpper(string) {
    return string.toUpperCase();
}

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
/*Here we pass a function into cats.map(), and map() calls the function once for each
item in the array, passing in the item. It then adds
the return value from each function call to a new array, and finally returns the new array.
In this case the function we provide converts the item to uppercase, so the resulting
array contains all our cats in uppercase:*/

/*You can use filter() to test each item in a collection, and create a new
collection containing only items that match:*/

function lCat(cat) {
    return cat.startsWith('L');
}

const cats2 = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats2.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]

/*This looks a lot like map(), except the function we pass in returns a boolean:
if it returns true, then the item is included in the new array.
Our function tests that the item starts with the letter "L", so the result is an array
containing only cats whose names start with "L":


Note that map() and filter() are both often used with function expressions, which we will
learn about in the Functions module. Using function expressions we could
rewrite the example above to be much more compact:*/

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats.filter((cat) => cat.startsWith('L'));
console.log(filtered);
// [ "Leopard", "Lion" ]



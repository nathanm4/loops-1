//The basic tool for looping through a collection is the for...of loop:
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
    console.log(cat);
}
/*
In this example, for (const cat of cats) says:

Given the collection cats, get the first item in the collection.
Assign it to the variable cat and then run the code between the curly brackets {}.
Get the next item, and repeat (2) until you've reached the end of the collection.*/

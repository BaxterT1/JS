// delete value of element from array without deleting element

// original array
var tab = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5"];

// delete value of element at index 0
tab[0] = undefined;

// display array after value delete
console.log("tab = ", tab);

// access the array with a for() loop

console.log("Accessing array data through for() loop");

for (var i = 0; i < tab.length; i++) console.log("tab[" + i + "]", tab[i]);

// access the array with a forEach() loop

console.log("Accessing array data through forEach() loop")

tab.forEach(function(elem,i){
    console.log("tab[" + i + "]", elem);
});



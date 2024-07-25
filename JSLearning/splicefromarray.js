// delete element from array using splice method

// original array
var tab = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5"];

// display array before changes
console.log("tab = ", tab);

// splice the element at index 0
tab.splice(0,1);

// display array after value delete
console.log("tab = ", tab);

// display the array with a for() loop

console.log("Accessing array data through for() loop");

for (var i = 0; i < tab.length; i++) console.log("tab[" + i + "]", tab[i]);

// display the array with a forEach() loop

console.log("Accessing array data through forEach() loop")

tab.forEach(function(elem,i){
    console.log("tab[" + i + "]", elem);
});



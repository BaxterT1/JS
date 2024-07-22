var tab = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5"];
console.log(tab);

var tab2 = new Array("Element 1", "Element 2", "Element 3", "Element 4", "Element 5");
console.log(tab2);

var tab3 = new Array();
console.log(tab3);

console.log("tab = ", tab);
console.log("tab[0] = ", tab[0]);
console.log("tab[1] = ", tab[1]);
console.log("tab[2] = ", tab[2]);
console.log("tab[3] = ", tab[3]);
console.log("tab[4] = ", tab[4]);
console.log("tab[5] = ", tab[5]);

console.log("Array before modification");

console.log("tab = ", tab);

// modification of elements, index 2 and 3  

tab[2] = "New element 3";
tab[3] = "New element 4";

console.log("Array after modification");

console.log("tab = ", tab);


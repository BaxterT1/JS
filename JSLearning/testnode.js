function add_first_n_numbers(n){

    var total = 0;

    for (var i = 0; i <= n; i++) total += i;

    return total;

}

var total_10 = add_first_n_numbers(10);
console.log("This is the sum of the first 10 numbers: " + total_10);

var total_25 = add_first_n_numbers(25);
console.log("This is the sum of the first 25 numbers: " + total_25);

var total_100 = add_first_n_numbers(100);
console.log("This is the sum of the first 100 number: " + total_100);



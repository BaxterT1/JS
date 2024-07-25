// define the Person class

class Person {
    
    // class properties

    firstname = "";

    lastname = ""; 

    age = 0;

    // class methods
    constructor(lastname, firstname, age){
        this.lastname = lastname;
        this.firstname = firstname;
        this.age = age;
    }

    display () {
        console.log("Th person's lastname is: " + this.lastname + ", firstname: " + this.firstname + ", age: " + this.age);
    }

}

// create an object of class Person

var p = new Person("Clinton", "Bill", 33); // object p of class Person\
console.log("Variable p = ", p);
p.display(); // use of the display() method on the p object

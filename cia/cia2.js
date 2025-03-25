class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Creating an object of the Person class
const person1 = new Person('Pranati Arun', 20);

// Displaying the object's details
person1.displayDetails();

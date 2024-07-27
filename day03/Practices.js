/**
 * Represents a product with properties such as name, price, quantity, description, and productID.
 * @constructor
 * @param {string} name - The name of the product.
 * @param {number} price - The price of the product.
 * @param {number} quantity - The quantity of the product.
 * @param {string} description - The description of the product.
 * @param {string} productID - The unique identifier of the product.
 */
class Product {
    constructor(name, price, quantity, description, productID) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        this.productID = productID;
    }

    /**
     * Displays the product information in the console.
     * @returns {void}
     */
    displayProductInfo() {
        console.log(`Product ID: ${this.productID}, Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Description: ${this.description}`);
    }
}

//test the Product class
let product1 = new Product('Laptop', 1500, 5, '15 inch, i5 processor, 8GB RAM', 'P001');
product1.displayProductInfo();


console.log("---------------------------------------------");


class Animal {
    constructor(name, age, gender, species) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.species = species;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}


class Dog extends Animal {
    constructor(name, age, gender, species, breed) {
        super(name, age, gender, species);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }

    // overriding eat method 
    eat() {
        console.log(`${this.name} is eating, but I prefer to be left alone.`);
    }
}

let dog1 = new Dog('Buddy', 3, 'Male', 'Dog', 'Golden Retriever');
dog1.bark();
dog1.eat();
dog1.sleep();

console.log("---------------------------------------------");



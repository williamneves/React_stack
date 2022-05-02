// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();

// Create a Ninja class

// add an attribute: name

// add an attribute: health

// add a attribute: speed - give a default value of 3

// add a attribute: strength - give a default value of 3

// add a method: sayName() - This should log that Ninja's name to the console

// add a method: showStats() - This should show the Ninja's name, strength, speed, and health.

// add a method: drinkSake() - This should add +10 Health to the Ninja

class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
    }

    showStats(){
        console.log(`
            My name is ${this.name}
            My health is ${this.health}
            My speed is ${this.speed}
            My strength is ${this.strength}
            `);
    }

    drinkSake(){
        this.health += 10;
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
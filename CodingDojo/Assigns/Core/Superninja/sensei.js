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

// Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

class Sensei extends Ninja{
    constructor(name, wisdom = 10){
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        super.drinkSake();
        console.log(`Wise message`)
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
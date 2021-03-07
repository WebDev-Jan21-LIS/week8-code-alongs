//Inheritance DRY - Don't repeat yourself

class Animal {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }

    eat(amount) {
        console.log('the animal is eating')
        this.energy += amount;
    }

    sleep(length) {
        console.log('the animal is spleeping')
        this.energy += length;
    }

    play(length) {
        console.log('the animal is playing')
        this.energy += length;
    }
}

class Dog extends Animal {
    constructor(name, energy, breed) {
        super(name, energy);
        this.breed = breed;
    }

    bark() {
        this.energy -= .1
    }
}

class Cat extends Animal {
    constructor(name, energy, breed) {
        super(name, energy);
        this.breed = breed;
    }

    meow() {
        this.energy -= .5
    }
}

//God class 
// The problem with object-oriented languages is 
// they’ve got all this implicit environment that they 
//carry around with them. 
//You wanted a banana but what you got was a gorilla
// holding the banana and the entire jungle. 
//- Joe Armstrong. Creator of Erlang.

//Composition
const eater = (state) => ({
    eat(amount) {
        console.log('the animal is eating')
        state.energy += amount;
    }
})

const sleeper = (state) => ({
    sleep(length) {
        console.log('the animal is spleeping')
        state.energy += length;
    }
})

const player = (state) => ({
    play(length) {
        console.log('the animal is playing')
        state.energy += length;
    }
})

function Dog(name, energy, breed) {
    let dog = {
        name: name,
        enegery: energy,
        breed: breed
    }

    return Object.assign(
       dog,
       eater(dog),
       player(dog),
       sleeper(dog)
    )
}

const leo = Dog('leo', 10, 'german shepard');
leo.eat(10);
leo.bark();

function Cat(name, energy, breed) {
    let cat = {
        name: name,
        enegery: energy,
        breed: breed
    }

    return Object.assign(
       cat,
       eater(cat),
       player(cat),
    )
}


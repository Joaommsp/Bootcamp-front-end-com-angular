"use strict";
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`${this.name} atacou com ${this.stregth}`);
    }
}
const p1 = new Character("Goku", 10, 98);
console.log(p1.attack());

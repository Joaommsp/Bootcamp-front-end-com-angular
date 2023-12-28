"use strict";
class Character2 {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`${this.name} atacou com ${this.stregth}`);
    }
}
const p12 = new Character2("Goku", 10, 98);
console.log(p1.attack());

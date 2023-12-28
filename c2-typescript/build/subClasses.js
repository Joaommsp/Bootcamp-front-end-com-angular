"use strict";
class Characte3r {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`${this.name} atacou com ${this.stregth}`);
    }
}
class Magician extends Characte3r {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p13 = new Character("Goku", 10, 98);
const p14 = new Magician("Mago Negro", 10, 98, 200);
console.log(p1.attack());

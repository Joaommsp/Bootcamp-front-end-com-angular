"use strict";
const bot = {
    id: 1,
    name: "megamen",
};
const bot2 = {
    id: 1,
    name: "megamen",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello , i am ${this.name}`;
    }
}
const p = new Pessoa(1, "hutsman");
console.log(p.sayHello());

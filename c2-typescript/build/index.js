"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function printaObjetos(pessoa) {
    console.log(pessoa);
}
printaObjetos({
    name: "Joãozin",
    vulgo: "Preto",
});
let aniversariow = new Date("2023-01-12 05:00");
console.log(aniversariow.toString());
function addNumber2(x, y) {
    return x + y;
}
let soma2 = addNumber2(4, 4);
console.log(soma2);
function addHello(nome) {
    return `Hellor World ! ${nome}`;
}
console.log(addHello("joão"));
function CallToPhone2(phone) {
    return phone;
}
console.log(CallToPhone2("12344424"));
console.log(CallToPhone2(12345));
let dado = "joão marquin";
console.log(dado);
function ExibirNome(target) {
    console.log(target);
}
let Funcionario = class Funcionario {
};
Funcionario = __decorate([
    ExibirNome
], Funcionario);
let Quincas = class Quincas {
};
Quincas = __decorate([
    ExibirNome
], Quincas);

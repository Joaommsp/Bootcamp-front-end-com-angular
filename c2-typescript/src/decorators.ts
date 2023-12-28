// decorators

// Class decorator

function ExibirNome(target: any) {
  console.log(target);
}

@ExibirNome
class Funcionario {}

@ExibirNome
class Quincas {}

function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version });
  };
}

@apiVersion("1.3")
class Api {}

const api = new Api();

// console.log(api.__version);

// Atribute decorator

class Api2 {
  name: string

  constructor(name:string) {
    this.name = name
  }
}

const api2 = new Api2("produtos")
console.log(api2.name)

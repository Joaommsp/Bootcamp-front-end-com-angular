type heroi = {
  name: string;
  vulgo: string;
};

function printaObjetos(pessoa: heroi) {
  console.log(pessoa);
}

// isso printa um objeto
printaObjetos({
  name: "João",
  vulgo: "Joãozin",
});

let aniversariow: Date = new Date("2023-01-12 05:00");
console.log(aniversariow.toString());

function addNumber2(x: number, y: number): number {
  return x + y;
}

let soma2: number = addNumber2(4, 4);

console.log(soma2);

function addHello(nome: string): string {
  return `Hellor World ! ${nome}`;
}

console.log(addHello("joão"));

function CallToPhone2(phone: number | string) {
  return phone;
}

console.log(CallToPhone2("12344424"));
console.log(CallToPhone2(12345));

let dado: string = "joão marquin";
console.log(dado);

function minLength(length: number) {
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => "play " + _value;
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(`menor que o valor mínimo:  ${length}`);
      } else {
        _value = value;
      }
    };
    
    Object.defineProperty(target, key ,{
      get: getter,
      set: setter,
    })

  };
}

class Api4 {
  @minLength(3)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const api4 = new Api4("p345");
console.log(api4.name);

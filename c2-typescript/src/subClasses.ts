// classes ( uma forma que pode ser reaproveitada para criar)

class Characte3r {
  name: string; 
  stregth: number;
  skill: number;

  constructor(name: string, stregth: number, skill: number) {
    this.name = name
    this.stregth = stregth;
    this.skill = skill;
  }

  attack(): void {
    console.log(`${this.name} atacou com ${this.stregth}`);
  }
}

// Character: superclass
// magican: subclass

class Magician extends Characte3r {
  magicPoints: number
  constructor(name: string, stregth: number, skill: number, magicPoints: number){
    super(name, stregth, skill);
    this.magicPoints = magicPoints
  }
}

const p13 = new Character("Goku", 10, 98)
const p14 = new Magician("Mago de gelo", 10, 98, 200)

console.log(p1.attack())
// classes ( uma forma que pode ser reaproveitada para criar)

class Character {
  name: string; // opicional
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

const p1 = new Character("Goku", 10, 98)
console.log(p1.attack())
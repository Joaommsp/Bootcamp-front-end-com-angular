// Data Modifiers
// public
// private
// protected

// classes ( uma forma que pode ser reaproveitada para criar)

class Character2 {
  protected name: string;
  public stregth: number; // public é o default
  skill: number;

  constructor(name: string, stregth: number, skill: number) {
    this.name = name
    this.stregth = stregth;
    this.skill = skill;
  }

  protected attack(): void {
    console.log(`${this.name} atacou com ${this.stregth}`);
  }
}

const p12 = new Character2("Goku", 10, 98)
console.log(p1.attack())

// PRIVATE:  p12.name não disponível
// PROTECTED: classes que são herdadas conseguem acessar ( sub-classes )
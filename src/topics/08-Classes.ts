// primer forma
export class Person {
  public name: string;
  public address: string;
  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}

// segunda forma (corta)
export class Animal {
  constructor(public name: string, public gender: string) {}
}

const perro = new Animal("Perro", "Canis");
console.log(perro);

// extends class
export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, "Toluca");
  }
}

const ironman = new Hero("IronMan", 45, "Tony");
console.log(ironman);

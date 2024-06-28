function addNumbers(number1: number, number2: number): number {
  return number1 + number2;
}

const result = addNumbers(10, 3);
//console.log(result);

// funciones flecha
const addNumberArrow = (number1: number, number2: number): number => {
  return number1 + number2;
};
const resultArrow = addNumberArrow(12, 45);

const multiply = (
  number1: number,
  number2?: number,
  base: number = 2
): number => {
  return number1 * base;
};
const resultMultiply = multiply(12);

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}
const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

console.log({ result, resultArrow, resultMultiply });
healCharacter(strider, 10);
strider.showHp();

export {};

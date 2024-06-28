// las variables son de tipado estatico
let name: string = "Ulises GC";
// constantes: variables que no cambian su valor
// let: variables que cambian su valor a lo largo del tiempo
let hpPoints: number | "FULL" = 95;
hpPoints = "FULL";
const isAlive: boolean = true;

console.log({ name, hpPoints, isAlive });

export {};

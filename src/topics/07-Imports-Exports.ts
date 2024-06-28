import {
  Product,
  taxCalculator,
  TaxCalculatorOptions,
} from "./06-FunctionDestructuring";

const shoppingCart: Product[] = [
  {
    description: "Iphone",
    price: 100,
  },
  {
    description: "Nokia",
    price: 250,
  },
];

const [total, tax] = taxCalculator({
  products: shoppingCart,
  tax: 0.15,
});

console.log(`Total ${total}`);
console.log(`Tax ${tax}`);

export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250,
};

export interface TaxCalculatorOptions {
  products: Product[];
  tax: number;
}

export function taxCalculator(options: TaxCalculatorOptions): number[] {
  const { tax, products } = options;

  let total = 0;
  products.forEach((product) => {
    total += product.price;
  });
  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const optionsObject: TaxCalculatorOptions = {
  products: shoppingCart,
  tax: tax,
};

const [total, taxTotal] = taxCalculator(optionsObject);
console.log(`Total: ${total}`);
console.log(`Tax total: ${taxTotal}`);

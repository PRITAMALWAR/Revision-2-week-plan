const sales = [
  { month: 'Jan', product: 'A', amount: 100 },
  { month: 'Jan', product: 'B', amount: 150 },
  { month: 'Feb', product: 'A', amount: 120 },
  { month: 'Feb', product: 'B', amount: 180 },
  { month: 'Mar', product: 'A', amount: 110 },
  { month: 'Mar', product: 'B', amount: 160 }
];

// const pivot = sales.reduce((acc, { month, product, amount }) => {
//   if (!acc[product]) {
//     acc[product] = { total: 0 };
//   }

//   acc[product][month] = amount;
//   acc[product].total += amount;

//   return acc;
// }, {});

// console.log(pivot);






const pivot = {};

for (let i = 0; i < sales.length; i++) {
  const { month, product, amount } = sales[i];

  if (!pivot[product]) {
    pivot[product] = { total: 0 };
  }

  pivot[product][month] = amount;
  pivot[product].total += amount;
}

console.log(pivot);

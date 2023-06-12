/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;
    if (categoryTotals.hasOwnProperty(category)) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  }

  const result = [];
  for (const category in categoryTotals) {
    result.push({ [category]: categoryTotals[category] });
  }

  return result;
}


const transactions = [
  { itemName: "Item 1", category: "Groceries", price: 20, timestamp: "2023-06-10" },
  { itemName: "Item 2", category: "Utilities", price: 50, timestamp: "2023-06-10" },
  { itemName: "Item 3", category: "Groceries", price: 30, timestamp: "2023-06-11" },
  { itemName: "Item 4", category: "Entertainment", price: 15, timestamp: "2023-06-11" },
  { itemName: "Item 5", category: "Utilities", price: 40, timestamp: "2023-06-12" },
  { itemName: "Item 6", category: "Entertainment", price: 25, timestamp: "2023-06-12" },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);



module.exports = calculateTotalSpentByCategory;

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var result = createResultObject(salesData);
  for (company of salesData) {
    result[company.name].totalSales += sumArray(company.sales);
    result[company.name].totalTaxes += sumArray(company.sales)*taxRates[company.province];
  }
  return result;
}
function createResultObject (salesData) {
  var output = {};
  for (var company in salesData) {
    var companyName = salesData[company]["name"];
    output[companyName] = {totalSales: 0, totalTaxes: 0};
  }
  return output;
}
function sumArray(array) {
  var sum = 0;
  for (var value of array) {
    sum += value;
  }
  return sum;
}
var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

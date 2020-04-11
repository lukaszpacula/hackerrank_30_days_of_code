function solve(meal_cost, tip_percent, tax_percent) {
    var tip = (tip_percent / 100) * meal_cost;
    var tax = (tax_percent / 100) * meal_cost;
    var totalCost = Math.round(meal_cost + tip + tax);
    console.log(totalCost);
}

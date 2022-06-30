// write your code in this file
//Basic Arithmetic Problems
//Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold?

const ticketPrice = 15; //one ticket price
const ticketsSold = 6450; //sells tickets for 6450 dollars
const ticketsNumber = ticketsSold / ticketPrice;
console.log("How many tickets were sold?", ticketsNumber); //amount of sold tickets

// Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?

const incomeWeek = 500;
const weeksPerYear = 52;
const incomeYear = incomeWeek * weeksPerYear;
console.log("How much does Sylvia makes every year?", incomeYear);

//Percentage

//Q3. Calculate the percentage of 17/30. Expected output: "Q3: [number]%" (No need to round the result)

console.log("Q3:", 0.17 * 30, "%");

//Geometry Formulas

//Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.

const squareSide = 4.75;
const squarePerimeter = 4 * squareSide;
console.log("The perimeter of the square is:", squarePerimeter, "cm");

//Q5.  Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
//P = a + b + c.

console.log("Q5. The perimeter of the triangle", 5 + 6 + 7, "cm");

//Q6. Calculate the area of a square. Each side is 5cm.

console.log(`Q6. The area of the square: ${5 * 5}`);

//Q7. Calculate the area of an right-angled triangle. Assume the length of the sides are 3cm, 4cm, 5cm.
console.log(`Q7: ${(3 * 4) / 2} cm²`);

//Calculate the volume of a cube. Length of each side is 9cm.
console.log(`Q8: ${9 ** 3} cm³`);

//Consumer Formula
//Q9. Calculate the three bills including tips:
console.log(
  `Q9: ${22.35 + 22.35 * 0.1} ${26.67 + 26.67 * 0.15} ${35.92 + 35.92 * 0.2}`
);
//Average
//Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4 What is Noemy's average hours worked per day?
const day1 = 8;
const day2 = 6;
const day3 = 5;
const day4 = 9;
const day5 = 8;
const day6 = 2;
const day7 = 1;
const day8 = 8.5;
const day9 = 7;
const day10 = 4;
console.log(
  `Q10: ${
    (day1 + day2 + day3 + day4 + day5 + day6 + day7 + day8 + day9 + day10) / 10
  }`
);
//Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test? Expected output: "Q11: Score in the sixth test: --".
const score1 = 75;
const score2 = 70;
const score3 = 85;
const score4 = 90;
const score5 = 100;
const score6 = undefined;
console.log(
  `The score on the sixth test is: ${
    85 * 6 - (score1 + score2 + score3 + score4 + score5)
  }`
);
//Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? Expected output: "Q12: James needs a minimum of --% to get an 80% average".
console.log(
  `Q12: James needs a minimum of ${80 * 9 - 78 * 8}% to get an 80% average`
);

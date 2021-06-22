const companies = [
	{ name: "Company One", category: "Finance", start: 1981, end: 2003 },
	{ name: "Company Two", category: "Retail", start: 1992, end: 2008 },
	{ name: "Company Three", category: "Auto", start: 1999, end: 2007 },
	{ name: "Company Four", category: "Retail", start: 1989, end: 2010 },
	{ name: "Company Five", category: "Technology", start: 2009, end: 2014 },
	{ name: "Company Six", category: "Finance", start: 1987, end: 2010 },
	{ name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
	{ name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
	{ name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Basic For Loop

// for (let i = 0; i < companies.length; i++) {
// 	console.log(companies[i]);
// }

// forEach

// companies.forEach((company) => {
// 	console.log(company);
// });

// filter

// gets ages that are 21 and older

// #### with forLoop ####
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
// 	if (ages[i] >= 21) {
// 		canDrink.push(ages[i]);
// 	}
// }

// #### with method ####
// const canDrink = ages.filter((age) => {
// 	if (age >= 21) {
// 		return true;
// 	}
// });

// #### cleaner way with method ####
// const canDrink = ages.filter((age) => age >= 21);

// Filter retail companies

// #### with method ####
// const retailCompanies = companies.filter((company) => {
// 	if (company.category === "Retail") {
// 		return true;
// 	}
// });

// #### cleaner way with method ####
// const retailCompanies = companies.filter(
// 	(company) => company.category === "Retail"
// );

// Get 80's companies

// const eightiesComanies = companies.filter(
// 	(company) => company.start >= 1980 && company.start < 1990
// );

// Get companies that lasted 10 years or more

// const lastedTenYears = companies.filter(
// 	(company) => company.end - company.start >= 10
// );

// map

// Create array of company names
// const companyNames = companies.map((company) => {
// 	return company.name;
// });

// const testMap = companies.map(
// 	(company) => `${company.name} [${company.name} - ${company.end}]`
// );

// const agesSquare = ages.map((age) => Math.sqrt(age));

// sort

// Sort companies by start year

// const sortedCompanies = companies.sort((c1, c2) => {
// 	if (c1.start > c2.start) {
// 		return 1;
// 	} else {
// 		return -1;
// 	}
// });

// const sortedCompanies = companies.sort((a, b) => {
// 	return a.start > b.start ? 1 : -1;
// });

// Sort ages

// const sortAges = ages.sort((a, b) => a - b);

// reduce

// with forLoop

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
// 	ageSum += ages[i];
// }

// #### with method ####
// const ageSum = ages.reduce((total, age) => total + age, 0);

//  get total years for all companies

// const totalYears = companies.reduce((total, company) => {
// 	return total + (company.end - company.start);
// }, 0);

// Combine methods

// const combined = ages
// 	.map((age) => age * 2)
// 	.filter((age) => age >= 40)
// 	.sort((a, b) => a - b)
// 	.reduce((a, b) => a + b, 0);

// When user clicks 'horiscope' button, it begins this function. first step: get the birth month from the input on the html file
function getBirthday () {
	var month = document.getElementById("birthmonth").value;

// set variable a to 0 so we can manipulate it in the following lines.
	var a = 0

// if else statemens that convert their month of birth into a numerical value that represents the minimum number
// of days that must have elapsed in a year for their birthday to take place in that month.
if (month.toLowerCase() === "january") {
	a = 0
} else if (month.toLowerCase() === "february") {
	a = 31
} else if (month.toLowerCase() === "march") {
	a = 59
} else if (month.toLowerCase() === "april") {
	a = 90
} else if (month.toLowerCase() === "may") {
	a = 120
} else if (month.toLowerCase() === "june") {
	a = 151
} else if (month.toLowerCase() === "july") {
	a = 181
} else if (month.toLowerCase() === "august") {
	a = 212
} else if (month.toLowerCase() === "september") {
	a = 243
} else if (month.toLowerCase() === "october") {
	a = 273
} else if (month.toLowerCase() === "november") {
	a = 304
} else if (month.toLowerCase() === "december") {
	a = 334
} 

// console log the value we get from their month of birth
console.log(a)

// get the day of their birth from the input field 'birthday'
var b = document.getElementById("birthday").value;

// add a (number of days before their birth month) to b (day of their birth) to get their 'yeardate', or 
// te day - from 1-365 that they were born
var yeardate = (+a + +b)

// console.log the yeardate
console.log(yeardate)


// now that we have a specific day in the year for every birthday, we can divide them into astrological signs.
// each if/else statement says basically 'if users bday falls in this zone' display the div that corresponds with their sign

if (yeardate < 20) {
	document.getElementById("capricorn").style.display = "inherit";
	document.getElementById("form").style.display = "none";
	console.log("capricorn")
} else if (yeardate < 50) {
	document.getElementById("aquarius").style.display = "inherit";
	document.getElementById("form").style.display = "none";
	console.log("aquarius")
} else if (yeardate < 80) {
	document.getElementById("pisces").style.display = "inherit";
	document.getElementById("form").style.display = "none";
	console.log("Pisces")
} else if (yeardate < 110) {
	document.getElementById("aries").style.display = "inherit";
	document.getElementById("form").style.display = "none";
	console.log("Aries")
} else if (yeardate < 141) {
	document.getElementById("taurus").style.display = "inherit";
	document.getElementById("form").style.display = "none";
	console.log("Taurus")
} else if (yeardate < 172) {
	document.getElementById("gemini").style.display = "inherit";
	document.getElementById("form").style.display = "none";
	console.log("Gemini")
} else if (yeardate < 204) {
	document.getElementById("cancer").style.display = "inherit";
	document.getElementById("form").style.display = "none";
	console.log("Cancer")
} else if (yeardate < 235) {
	document.getElementById("leo").style.display = "inherit";
	document.getElementById("form").style.display = "none";
	console.log("Leo")
} else if (yeardate < 266) {
	document.getElementById("virgo").style.display = "inherit";
	document.getElementById("form").style.display = "none";
	console.log("Virgo")
} else if (yeardate < 296) {
	document.getElementById("libra").style.display = "inherit";
	document.getElementById("form").style.display = "none";
	console.log("Libra")
} else if (yeardate < 326) {
	document.getElementById("scorpio").style.display = "inherit";
	document.getElementById("form").style.display = "none";
	console.log("Scorpio")
} else if (yeardate < 356) {
	document.getElementById("sagittarius").style.display = "inherit";
	document.getElementById("form").style.display = "none";
	console.log("Sagittarius")
} else if (yeardate < 366) {
	document.getElementById("capricorn").style.display = "inherit";
	document.getElementById("form").style.display = "none"; 
	console.log("capricorn")
}

// Function ends here
}




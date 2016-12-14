

function getBirthday () {
	var month = document.getElementById("birthmonth").value;
	var b = document.getElementById("birthday").value;
}

	
	var a = 0

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
console.log(a)

var yeardate = (+a + +b)
console.log(yeardate)

if (yeardate < 20) {
	document.getElementById("capricorn").style.display = "inherit";
	console.log("capricorn")
} else if (yeardate < 50) {
	document.getElementById("aquarius").style.display = "inherit";
	console.log("aquarius")
} else if (yeardate < 80) {
	document.getElementById("pisces").style.display = "inherit";
	console.log("Pisces")
} else if (yeardate < 110) {
	document.getElementById("aries").style.display = "inherit";
	console.log("Aries")
} else if (yeardate < 141) {
	document.getElementById("taurus").style.display = "inherit";
	console.log("Taurus")
} else if (yeardate < 172) {
	document.getElementById("gemini").style.display = "inherit";
	console.log("Gemini")
} else if (yeardate < 204) {
	document.getElementById("cancer").style.display = "inherit";
	console.log("Cancer")
} else if (yeardate < 235) {
	document.getElementById("leo").style.display = "inherit";
	console.log("Leo")
} else if (yeardate < 266) {
	document.getElementById("virgo").style.display = "inherit";
	console.log("Virgo")
} else if (yeardate < 296) {
	document.getElementById("libra").style.display = "inherit";
	console.log("Libra")
} else if (yeardate < 326) {
	document.getElementById("scorpio").style.display = "inherit";
	console.log("Scorpio")
} else if (yeardate < 356) {
	document.getElementById("sagittarius").style.display = "inherit";
	console.log("Sagittarius")
} else if (yeardate < 366) {
	document.getElementById("capricorn").style.display = "inherit";
	console.log("capricorn")
}






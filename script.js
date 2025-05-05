let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let nowDate = new Date();

let days = ["SUN","MON","TUE","WED","THU","FRI","SAT","SUN"];
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

date.innerText = nowDate.getDate()
day.innerText = days[nowDate.getDay()]
month.innerText = months[nowDate.getMonth()]
year.innerText = nowDate.getFullYear()
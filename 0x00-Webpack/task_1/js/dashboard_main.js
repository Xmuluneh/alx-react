import $ from 'jquery';
import _ from 'lodash'
$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append("<button><p>Click here to get started</p></button>");
$("body").append("<p id='count'></p>");
$("body").append("<p>Copyright - Holberton School</p>");
let count = 0;
("button").on("click",_.debounce(function updateCounter() {
   count = count + 1;
   $("#count".html(`${count} click on the button`));
},1000))
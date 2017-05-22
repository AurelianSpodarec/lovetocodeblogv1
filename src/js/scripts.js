 
// //Burger Menu Toggle
var navToggle = document.querySelector(".site-header__hamburger");
var menuToggle = document.querySelector(".site-nav__navigation");

navToggle.addEventListener('click', function() {

	navToggle.classList.toggle("is-active");
	menuToggle.classList.toggle("is-active");


}, false);


//Search
var siteHeaderSearchIcon = document.querySelector(".site-header__search-icon");
var siteHeaderSearch = document.querySelector(".site-header__search");

siteHeaderSearchIcon.addEventListener('click', function() {

	siteHeaderSearchIcon.classList.toggle("is-active");
	siteHeaderSearch.classList.toggle("is-active");

}, false);

 
 


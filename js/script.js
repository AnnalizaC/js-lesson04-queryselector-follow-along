//Query Selectors
var available = document.querySelector("h3");
console.log(available.outerHTML);
//returns <h3>Available</h3>.

var mainTitle = document.querySelector(".main-title");
console.log(mainTitle.outerHTML);
//returns <h1 class="main-title">Hello World</h1>

//Multiple selectors
var firstItem = document.querySelector("ul li");
console.log(firstItem.outerHTML);

var intro = document.querySelector(".intro p");
console.log(intro.outerHTML);

//Style Property
var intro = document.querySelector(".intro p");
intro.style.color = "purple";
intro.style.fontSize = "3em";
intro.style.fontStyle = "italic";
console.log(intro.outerHTML);

//Modify Attributes
var firstImg = document.querySelector("img");
firstImg.src = "img/lulu.jpeg"; //image changed out
firstImg.alt = "Lulu bouquet";
console.log(firstImg.outerHTML);

//Innertext Property
var firstCaption = document.querySelector("figcaption");
firstCaption.innerText = "The Lulu";
console.log(firstCaption.outerHTML);

//Innerhtml Property
firstCaption.innerHTML = "The <strong>Lulu</strong>";
console.log(firstCaption.outerHTML);

//Innerhtml increase_size
var intro = document.querySelector(".intro p");
intro.innerHTML = 'Available <span class="increase_size">today</span>';

var attention = document.querySelector(".increase_size");
attention.style.fontSize = "2.5em";
console.log(intro.outerHTML);

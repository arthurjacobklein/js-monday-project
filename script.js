console.log("----------FEATURE 1----------")
/*Display "clique" in the console when clicking the footer*/
var tagFooter = document.getElementsByTagName("FOOTER");
var onFooterClick = function (){ 
			console.log("clique");
};

tagFooter[0].addEventListener("click", onFooterClick);


console.log("----------FEATURE 1 BIS----------")
/*Display "You've click X times" in the console when clicking the footer*/
var clickFooter = document.getElementsByTagName("FOOTER");
var count = 0
var onFooterCounter = function (){ 
			count += 1;
			console.log("You've clicked "+ count + " times.");
};

tagFooter[0].addEventListener("click", onFooterCounter);


console.log("----------FEATURE 2----------")
/*Show the hidden menu from the hamburger menu*/
var hamburger_btn = document.querySelector(".navbar-toggler");
var navBarMenu = document.getElementById("navbarHeader");

function onNavbarClick () {
	navBarMenu.classList.toggle("collapse");
}

hamburger_btn.addEventListener("click", onNavbarClick);


console.log("----------FEATURE 3----------")
var cardBtnEdit = document.getElementsByClassName("col-md-4")[0].getElementsByTagName("button")[1];
var redText = function () {
	document.getElementsByClassName("col-md-4")[0].getElementsByTagName("P")[0].style.color = "red";
};
cardBtnEdit.addEventListener("click", redText);


console.log("----------FEATURE 4----------")
var cardBtn2Edit = document.getElementsByClassName("col-md-4")[1].getElementsByTagName("button")[1];
var secondCardColor = document.getElementsByClassName("col-md-4")[1].getElementsByTagName("P")[0];

var greenText = function () {

if (secondCardColor.style.color === "green"){
	secondCardColor.style.color = "black";
}
else {
	secondCardColor.style.color = "green";
}
};

cardBtn2Edit.addEventListener("click", greenText);


console.log("----------FEATURE 5----------")
var navbarClick = document.getElementsByTagName("header");
var modifLink = document.getElementsByTagName("link")[0];

function bootsrapStatus () {
	modifLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
} 

var doubleClick = function () {
	
	if (modifLink.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
		modifLink.removeAttribute("href");

	else 
		document.addEventListener("click", bootsrapStatus);
	
};
navbarClick[0].addEventListener("dblclick", doubleClick);



console.log("----------FEATURE 6----------")
/*var selectCardBtn = document.getElementsByClassName("col-md-4");

for (let i = 0; i < selectCardBtn.length; i++){

	var hover = true;
	var viewBtn = selectCardBtn[i].getElementsByClassName("btn-success")[0];
	var text = selectCardBtn[i].getElementsByClassName("card-text")[0];
	var size = selectCardBtn[i].getElementsByTagName("img")[0];

	function joinModif () {
		if (hover) {
			text.style= "";
      		size.style = "";
      		hover = false;
		}
		else {
			text.style.visibility= "hidden";
      		size.style.width = "20%";
      		hover = true;
		};
	};
}
viewBtn.addEventListener("click", joinModif);*/

console.log("----------FEATURE 7----------")
var GreyNextButton = document.querySelector("a.btn.btn-secondary.my-2");
var ViewCards = document.querySelector("body > main > div > div > div")

function swapLastToFirst() {
	var LastToFirst = ViewCards.removeChild(ViewCards.lastElementChild)
	ViewCards.prepend(LastToFirst)
}

GreyNextButton.addEventListener("click", swapLastToFirst)


console.log("----------FEATURE 8----------")
var BlueBackButton = document.querySelector("a.btn.btn-primary.my-2")

function swapFirstToLast(e) {
	e.preventDefault();
	var FirstToLast = ViewCards.removeChild(ViewCards.firstElementChild)
	ViewCards.appendChild(FirstToLast)
}
BlueBackButton.addEventListener("click", swapFirstToLast)


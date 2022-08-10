/* .js files add interaction to your website */

/* nav bar */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

var firstQuote = "About 17% of the Amazonian rainforest has been destroyed over the past 50 years";
var secondQuote = "Deforestaton in Brazil’s Amazon is at its highest level since 2006 (Guardian, 2021)";
var thirdQuote = "The area destroyed in the first half of 2022 is 80% larger than the same period in 2018 (CNBC, 2022)";
var fourthQuote = "Deforestation in the Amazon has amounted to 430 square kilometers, more than twice the average over the past ten years during the first two months of 2022 (Mongaay, 2022)";

var quoteList = [firstQuote, secondQuote, thirdQuote, fourthQuote];

//console.log(quoteList);

var myBtn = document.getElementById("factBtn");
var quote = document.getElementById("quote");
var count = 0;

if (myBtn) {
  myBtn.addEventListener("click", displayQuote);
}


function displayQuote(){
  quote.innerHTML = quoteList[count];
  count++;
  if (count ==  quoteList.length) {
    count = 0;
  }
}

document.getElementById("donateBtn").onclick = function () {
        location.href = "https://support.wwf.org.uk/donate-to-wwf?_ga=2.201278120.764282830.1659969558-1213591347.1659969558";
    };

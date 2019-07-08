
// Slider, Slides et Images
const slideshow = document.querySelector("#slideshow");
const slideshowSlides = document.querySelectorAll(".mySlides");
const slideshowImages = document.querySelectorAll(".mySlides img");
const slideOne = document.getElementById("slideOne")
const slideOneImg = document.getElementById("slideOneImg")
const slideTwo = document.getElementById("slideTwo")
const slideThree = document.getElementById("slideThree")
const slideFour = document.getElementById("slideFour")
const slideFive = document.getElementById("slideFive")
const slideSix = document.getElementById("slideSix")
const slideSeven = document.getElementById("slideSeven")


// Buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


// Button Listeners
prevBtn.addEventListener("click",()=>
    {
        slideOne.style.transition = "transform 0.5s ease-in-out";
        slideOne.style.transform = "translateX(-18px)"; 
    });

nextBtn.addEventListener("click",()=>
    {
        slideOneImg.style.transition = "transform 0.5s ease-in-out";
        slideOneImg.style.transform = "translate(53%, 9%)";
        slideOneImg.style.zIndex = "12";
        slideOneImg.style.width = "74.5%"; 
        slideOneImg.style.height = "81%"; 
       /* slideOne.style.top = "8%"; 
        slideOne.style.left = "45%";
        slideOne.style.position = "absolute";*/

    /*  slideTwo.style.transition = "transform 0.5s ease-in-out";
        slideTwo.style.transform = "translate(244%, -84%)";
        slideTwo.style.zIndex = "11";
        slideTwo.style.width = "20%"; 
        slideTwo.style.height = "58%"; 
        slideTwo.style.top = "68%"; 
        slideTwo.style.left = "19%";

        slideThree.style.transition = "transform 0.5s ease-in-out";
        slideThree.style.transform = "translate(314%, -157%)";
        slideThree.style.zIndex = "9";
        slideThree.style.width = "15%"; 
        slideThree.style.height = "30%"; 
        slideThree.style.top = "79%"; 
        slideThree.style.left = "32%";

        slideFour.style.transition = "transform 0.5s ease-in-out";
        slideFour.style.transform = "translate(-500%, 0%)";

        slideFive.style.transition = "transform 0.5s ease-in-out";
        slideFive.style.transform = "translate(-40%, 14%)";
        slideFive.style.zIndex = "11";
        slideFive.style.width = "20%"; 
        slideFive.style.height = "58%"; 
        slideFive.style.top = "11%"; 
        slideFive.style.left = "19%";  

        slideSix.style.transition = "transform 0.5s ease-in-out";
        slideSix.style.transform = "translate(-71%, 0%)";
        slideSix.style.zIndex = "12";
        slideSix.style.width = "35%"; 
        slideSix.style.height = "80%"; 
        slideSix.style.top = "8%"; 
        slideSix.style.left = "45%";

        slideSeven.style.transition = "transform 0.5s ease-in-out";
        slideSeven.style.transform = "translate(0%, -8%)";
        slideSeven.style.zIndex = "1000"; 
        slideSeven.style.width = "802px"; 
        slideSeven.style.height = "450px";
        slideSeven.style.left = "0";
        slideSeven.style.position = "relative"; */


    });



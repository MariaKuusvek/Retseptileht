// Slideshow tutorial: https://www.w3schools.com/howto/howto_js_slideshow.asp

// Defineerime muutujat, nii et esimene slaid mis näidatakse on nr 1
var slideIndex = 1;

// Defineerime funktsiooni, mis vahetab millise slaidi peale läheme, ja kutsume välja funktsiooni mis näitab slaide
// Oleneb kas vajutasid vasakut noolt, n = -1, või paremat noolt, n = 1
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Defineerime funktsiooni, mis kutsub välja funktsiooni mis näitab slaide
function currentSlide(n) {
	showSlides(slideIndex = n);
}

// Funktsioon, mis näitab slaide muutuja n-i järgi. 
function showSlides(n) {
	// Defineerime muutujad. Slides on kõik elemendid minu HTML koodis mis on "slide" div classi vahel
	var i;
	var slides = document.getElementsByClassName("slide");
	// Kui n on suurem kui meie slaidide koguarv, siis loopib tagasi esimese slaidi peale
	if (n > slides.length) {slideIndex = 1}    
	// Kui n on väiksem kui 1, siis loopib viimase slaidi peale
	if (n < 1) {slideIndex = slides.length}
	// For loop, mis ütleb et mitte näidata kõike slaide korraga
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	// Ainult näitab seda ühte slaidi, mille peal me oleme
	slides[slideIndex-1].style.display = "block";  
}

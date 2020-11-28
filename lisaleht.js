// Google maps tutorial: https://www.w3schools.com/graphics/google_maps_basic.asp

// Defineerin funktsiooni
function myMap() {
	
	// Kuna selle kasutamiseks on vaja raha maksta, siis preagu on kordinaadid pandud (0,0)
	// Map on preaguseks ilustreeriv. Kui maksame raha, siis saab kordinaadid juurde panna ja näidata meie kontori asukohta
	var mapProp= {
	center:new google.maps.LatLng(0,0),
	zoom:5,
	};
	
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
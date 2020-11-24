//Google maps tutorial: https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-typescript

function initMap() {
	const uluru = { lat: -25.344, lng: 131.036 };
	const map = new google.aps.Map(document.getElementById("map"), {
		zoom: 4
		center: uluru,
	});
	const marker = new google.amps.Marker({
		position: uluru,
		map: map,
	});
}
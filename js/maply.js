var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

var start_options = {
	center: {lat: 39.957139, lng: -86.17521599999999},
	zoom: 15,
	mapTypeId: google.maps.MapTypeId.HYBRID
};

var map = new google.maps.Map($('#map')[0], start_options);

new google.maps.Marker({
	position: start_options.center,
	map: map,
	title: "Eleven Fifty Coding Academy"
});

$('form#geocoder').submit(function(ev){
	ev.preventDefault();
	var address = $(this.address).val();
	
	$.get(url + address).done(function(data){
		var location, map_options, marker;

		location = data.results[0].geometry.location;
	
		map_options = {
      center: { lat: location.lat, lng: location.lng},
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.HYBRID
    };

    map.setOptions(map_options);
   
    marker = new google.maps.Marker({
    	position: map_options.center,
    	map: map,
    	title: address
    });
	})
});
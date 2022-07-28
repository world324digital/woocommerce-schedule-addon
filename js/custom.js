var pickupInput = 'pickup_complete_address';
var dropoffInput = 'dropoff_complete_address';

jQuery(document).ready(function($) {
    var autocomplete_pickup;
    autocomplete_pickup = new google.maps.places.Autocomplete((document.getElementById(pickupInput)), {
        types: ['geocode'],
    });

    var autocomplete_dropoff;
    autocomplete_dropoff = new google.maps.places.Autocomplete((document.getElementById(dropoffInput)), {
        types: ['geocode'],
    });

    autocomplete_pickup.addListener("place_changed", () => {
        const place = autocomplete_pickup.getPlace();
        console.log(place);
    });
});
const map = require("./index.js");

const hotel = document.createElement("div");

hotel.style.width = "32px";
hotel.style.height = "39px";
hotel.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

new mapboxgl.Marker(hotel).setLngLat([-74.009151, 40.705086]).addTo(map);

const restaurantMarker = document.createElement("div");

restaurantMarker.style.width = "32px";
restaurantMarker.style.height = "39px";
restaurantMarker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";

new mapboxgl.Marker(restaurantMarker)
  .setLngLat([-74.009151, 40.705086])
  .addTo(map);

const activityMarker = document.createElement("div");

activityMarker.style.width = "32px";
activityMarker.style.height = "39px";
activityMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(restaurantMarker)
  .setLngLat([-74.009151, 40.705086])
  .addTo(map);

module.exports = {
  hotel,
  restaurantMarker,
  activityMarker
};

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoibGFkeWxldGlyZWQiLCJhIjoiY2pvZ2E5YjgzMGQ1NDNwcG5leTl5MXYxMCJ9.ikPL_hY6yOTupzF3dbIPSA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker1 = document.createElement("div");

marker1.style.width = "32px";
marker1.style.height = "39px";
marker1.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(marker1).setLngLat([-74.009151, 40.705086]).addTo(map);

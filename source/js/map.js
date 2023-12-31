var map = L.map('map', {attributionControl: false}).setView([59.96833047870757, 30.3173894344696], 40);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker(L.latLng(59.96833047870757, 30.3173894344696), {
  icon: L.icon({
      iconUrl: '../../img/icons/stack.svg#placemark',
      iconSize: [38, 50],
      iconAnchor: [20, 20],
  }),
}).addTo(map);

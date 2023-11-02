let map;

console.log(process.env.TEST);

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 50.473602050689635, lng: -3.7373521109426804 }, //50.473602050689635, -3.7373521109426804
    // center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();

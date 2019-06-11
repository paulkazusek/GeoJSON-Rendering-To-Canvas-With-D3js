var geojson = [];

loadGeoJson(function (response) {
    geojson = JSON.parse(response);
    update(geojson);
});

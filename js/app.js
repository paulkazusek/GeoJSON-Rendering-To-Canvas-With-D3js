var geojson = [];

loadGeoJson('data/ruhr_area.geojson', function (response) {
    geojson = JSON.parse(response);
    update(geojson);
});

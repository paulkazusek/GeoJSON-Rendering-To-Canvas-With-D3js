// set widht and height
var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');

ctx.canvas.width  = '800';
ctx.canvas.height = '400';

// 
var context = d3.select('#my-canvas')
    .node()
    .getContext('2d');

var projection = d3.geoEquirectangular()
    .scale(25000)
    .translate([400, 200])
    .center([7.145, 51.5175]);

var geoGenerator = d3.geoPath()
    .projection(projection)
    .context(context);

function update(geojson) {
    context.lineWidth = 0.5;
    context.strokeStyle = '#aaa';

    context.beginPath();
    geoGenerator({ type: 'FeatureCollection', features: geojson.features })
    context.stroke();
}

update(geojson);

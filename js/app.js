// set widht and height
var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');

ctx.canvas.width  = '800';
ctx.canvas.height = '400';

// 
var context = d3.select('#my-canvas')
    .node()
    .getContext('2d');

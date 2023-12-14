// The web address for your Teachable Machine model, copied from the export page

const URL = 'tm-my-image-model/';

let model, webcam, maxPredictions;
let refresh = true;
let c1n, c2n, c3n, c4n, c5n, c6n;
let c1v, c2v, c3v, c4v, c5v, c6v;
let c1p, c2p, c3p, c4p, c5p, c6p;
let int1, int2, int3, int4, int5, int6;
var array = [];
var highestValue = 0;
var highestIndex;
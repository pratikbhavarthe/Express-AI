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

//load uploaded files
async function loadImage(event, id) {
    var imageprev = document.getElementById(id + "prev");
    var image = document.getElementById(id);
    image.src = window.URL.createObjectURL(event.target.files[0]);
    imageprev.src = window.URL.createObjectURL(event.target.files[0]);
}

//load the image model and setup the webcam
async function init() {
    if (refresh) {
        refresh = false;
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";


        //load the model and metadata

        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();


        
    }
}


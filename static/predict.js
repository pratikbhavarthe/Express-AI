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

        //ease function to setup a webcam
        const flip = true; //whether to flip the webcam
        webcam = new tmImage.Webcam(400, 300, flip); //width/height/flip
        await webcam.setup(); //request access to the webcam
        await webcam.play();

        //add elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    document.getElementById("init").innerHTML = "in progress";
    document.getElementById("init").style.background = " #fcf5e4";
    document.getElementById("init").style.color = " #ffb800";

    document.getElementById("label").style.display = "block";
    document.getElementById("howto").style.display = "none";

    document.getElementById("file").style.display = "none";

    c1n = document.getElementById("class1n");
    c2n = document.getElementById("class2n");
    c3n = document.getElementById("class3n");
    c4n = document.getElementById("class4n");
    c5n = document.getElementById("class5n");
    c6n = document.getElementById("class6n");

    c1v = document.getElementById("class1v");
    c2v = document.getElementById("class2v");
    c3v = document.getElementById("class3v");
    c4v = document.getElementById("class4v");
    c5v = document.getElementById("class5v");
    c6v = document.getElementById("class6v");

    c1p = document.getElementById("1-progress");
    c2p = document.getElementById("2-progress");
    c3p = document.getElementById("3-progress");
    c4p = document.getElementById("4-progress");
    c5p = document.getElementById("5-progress");
    c6p = document.getElementById("6-progress");

    int1 = document.getElementById("int1");
    int2 = document.getElementById("int2");
    int3 = document.getElementById("int3");
    int4 = document.getElementById("int4");
    int5 = document.getElementById("int5");
    int6 = document.getElementById("int6");

    window.requestAnimationFrame(loop);
  } else {
    location.reload();
  }
}


// mandelbrot equation (a*a - b*b) + 2abi

var minVal = -0.5;
var maxVal = .5;

var minSlider;
var maxSlider;

function setup() { 
  createCanvas(300, 300);
  pixelDensity(1);

  minSlider = createSlider(-2.5, 0, -2.5, 0.1); //min value to be some value between -2.5 and 0.  start with -2.5 and have an increment value of .1
  maxSlider = createSlider(0, 2.5, 2.5, .1);
}

function draw() {
  // set max iterations we want to run
  var maxIterations = 100;
  loadPixels()
  // looking at every x and y value and setting it's pixel to a grayscale value of 51

  // inside this code, for every one of these x and y values, run this mandelbrot set math thing and see if the values are getting bigger or not and set thier valu
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      // do that inside of this loop - run the mandelbrot algorithm on the x and y values

      // figure out what are the a and b values relative to x and y
      // mapping all complex numbers over this range
      // -2 - 2i all the way to 2 + 2i
      // goes from 0 to width  to -2 and 2
      var a = map(x, 0, width, minSlider.value(), maxSlider.value());
      // goes from 0 to height also to -2 and 2
      var b = map(y, 0, height, minSlider.value(), maxSlider.value());

      // start our iteration
      // original a and b
      // substiture for c, the complex number in zz + c
      var ca = a;
      var cb = b;

      var n = 0;
      // var z = 0;

      // mandelbrot equation (a*a - b*b) + 2abi
      while (n < maxIterations) {
        // first thing we need to do is calculate a*a - b*b
        // figuring out what z*z is here 
        var aa = a*a - b*b;
        var bb = 2 * a * b;
        // z*z is aa + bbi
        // then need to add C to that - it is the core original imaginary component to where we are

        a = aa + ca;
        b = bb + cb;

        // what does it mean to be unbounded - tend toward infiniti
        // pretend 16 is our infiinity - break out of it
        if (abs(aa + bb > 25)) {
          break;
        }
        n++;
      }

      var bright = map(n, 0, maxIterations, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);
      // if (n === 100) {
      //   bright = 255;
      // }
      // if n gets to max iterations
      if (n == maxIterations) {
        // n got to the max iterations = brightness will be 0 black
        bright = 0;
      }

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}
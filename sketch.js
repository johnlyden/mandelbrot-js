// mandelbrot equation (a*a - b*b) + 2abi

function setup() { 
  createCanvas(360, 360);
  pixelDensity(1);
  loadPixels();

  // looking at every x and y value and setting it's pixel to a grayscale value of 51

  // inside this code, for every one of these x and y values, run this mandelbrot set math thing and see if the values are getting bigger or not and set thier valu
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      // do that inside of this loop - run the mandelbrot algorithm on the x and y values

      // figure out what are the a and b values relative to x and y
      // mapping all complex numbers over this range
      // -2 - 2i all the way to 2 + 2i
      // goes from 0 to width  to -2 and 2
      var a = map(x, 0, width, -2, 2);
      // goes from 0 to height also to -2 and 2
      var b = map(y, 0, height, -2, 2);

      // start our iteration
      // original a and b
      var ca = a;
      var cb = b;

      var n = 0;
      // var z = 0;

      // mandelbrot equation (a*a - b*b) + 2abi
      while (n < 100) {
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
        if (abs(aa + bb > 16)) {
          break;
        }
        n++;
      }

      var bright = map(n, 0, 100, 0, 255);
      // if (n === 100) {
      //   bright = 255;
      // }

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}
function setup() { 
  createCanvas(360, 240);
  pixelDensity(1);
  loadPixels();

  // looking at every x and y value and setting it's pixel to a grayscale value of 51

  // inside this code, for every one of these x and y values, run this mandelbrot set math thing and see if the values are getting bigger or not and set thier valu
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      // do that inside of this loop - run the mandelbrot algorithm on the x and y values

      // figure out what are the a and b values relative to x and y
      // mapping all numbers over this range
      // -2 - 2i all the way to 2 + 2i
      // goes from 0 to width  to -2 and 2
      var a = map(x, 0, width, -2, 2);
      // goes from 0 to height also to -2 and 2
      var b = map(y, 0, height, -2, 2);

      // start our iteration

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = 51;
      pixels[pix + 1] = 51;
      pixels[pix + 2] = 51;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}
function setup() { 
  createCanvas(360, 240);
  pixelDensity(1);
  loadPixels();

  // looking at every x and y value and setting it's pixel to a grayscale value of 51
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var pix = (x + y * width) * 4;
      pixels[pix + 0] = 51;
      pixels[pix + 1] = 51;
      pixels[pix + 2] = 51;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}
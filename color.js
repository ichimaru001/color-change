export default function changeColor() {
  let redRGB = Math.floor(Math.random() * 256);
  let greenRGB = Math.floor(Math.random() * 256);
  let blueRGB = Math.floor(Math.random() * 256);
  
  let redHex = redRGB.toString(16).padStart(2, 0);
  let greenHex = greenRGB.toString(16).padStart(2, 0);
  let blueHex = blueRGB.toString(16).padStart(2, 0);
  
  let colorHex = `${redHex}${greenHex}${blueHex}`;

  return colorHex;
}
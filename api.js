export async function getData() {

  let colorHex = changeColor();

  try {
    let url = `https://www.thecolorapi.com/id?hex=${colorHex}`

    let request = new Request(url)
    let response = await fetch(request)

    if (!response) {
      throw new Error("Could not fetch resource ...")
    }

    let data = await response.json()

    console.log(colorHex);

    return data;
  }
  catch(error) {
    console.log(error)
  }
}

function changeColor() {
  let redRGB = Math.floor(Math.random() * 256);
  let greenRGB = Math.floor(Math.random() * 256);
  let blueRGB = Math.floor(Math.random() * 256);
  
  let redHex = redRGB.toString(16).padStart(2, 0);
  let greenHex = greenRGB.toString(16).padStart(2, 0);
  let blueHex = blueRGB.toString(16).padStart(2, 0);
  
  let colorHex = `${redHex}${greenHex}${blueHex}`;

  return colorHex;
}


import { getData } from "./api.js";

const nom = document.querySelector('.nom');
const colorBox = document.getElementById("colorBox");

nom.addEventListener('click', () => {
  getData().then((color) => {
    colorBox.style.backgroundColor = `${color.hex.value}`
    colorBox.innerHTML = `${color.name.value}`
    changeAddInfo(color)
    if (color.hsl.l < 50) {
      console.log('light')
      colorBox.style.color =`#f0f0f0`
    } else {
      console.log('dark')
      colorBox.style.color = `#1a1a1a`
    }
    console.log(color);
  }) 
});

//

const moreIcon = document.querySelector('.more-icon')
const addInfo = document.querySelector('.add-info')
let addVisible = 0

moreIcon.addEventListener('mouseover', () => {
  addInfo.classList.add("add-info-visible")
})
moreIcon.addEventListener('mouseout', () => {
  if (addVisible === 0) {
    addInfo.classList.remove("add-info-visible")
  }
})
moreIcon.addEventListener('click', () => {
  if (addVisible === 1) {
    addInfo.classList.remove("add-info-visible")
    addVisible = 0
  } else {
    addInfo.classList.add("add-info-visible")
    addVisible = 1
  }
})

//

const rgbInfo = document.querySelector('.rgb-info');
const hslInfo = document.querySelector('.hsl-info');
const hsvInfo = document.querySelector('.hsv-info');
const hexInfo = document.querySelector('.hex-info');
const xyzInfo = document.querySelector('.xyz-info');
const cmykInfo = document.querySelector('.cmyk-info');

function changeAddInfo(color) {
  rgbInfo.innerHTML = `RGB: ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}`
  hslInfo.innerHTML = `HSL: ${color.hsl.h}, ${color.hsl.s}, ${color.hsl.l}`
  hsvInfo.innerHTML = `HSV: ${color.hsv.h}, ${color.hsv.s}, ${color.hsv.v}`
  hexInfo.innerHTML = `HEX: ${color.hex.value}`
  xyzInfo.innerHTML = `XYZ: ${color.XYZ.X}, ${color.XYZ.Y}, ${color.XYZ.Z}`
  cmykInfo.innerHTML = `CMYK: ${color.cmyk.c}, ${color.cmyk.m}, ${color.cmyk.y}, ${color.cmyk.k}`
}


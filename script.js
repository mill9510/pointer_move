"use strict";
// Lyt efter musens bevægelse på dokumentet
document.addEventListener("mousemove", (e) => {
  // Få musens Y-position i forhold til vinduet
  const mouseY = e.clientY;

  // Beregn en lightness-værdi baseret på musens Y-position
  const maxLightness = 80; // Maksimal lysstyrke (0-100)
  const minLightness = 20; // Minimal lysstyrke (0-100)
  const totalHeight = window.innerHeight;
  const lightness = ((totalHeight - mouseY) / totalHeight) * (maxLightness - minLightness) + minLightness;

  // Opdater CSS custom property med den beregnede lightness-værdi
  document.documentElement.style.setProperty("--lightness", `${lightness}%`);
});

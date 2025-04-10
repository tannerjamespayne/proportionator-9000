const skateLengthInput = document.getElementById("skateLength");
const fbLengthInput = document.getElementById("fbLength");
const fbWidthInput = document.getElementById("fbWidth");

const proportionateBtn = document.getElementById("proportionateBtn");
const resetBtn = document.getElementById("resetBtn");

const outputSection = document.getElementById("outputSection");
const scaleFactorOutput = document.getElementById("scaleFactor");
const skateWidthOutput = document.getElementById("skateWidth");

proportionateBtn.addEventListener("click", () => {
  const skateLength = parseFloat(skateLengthInput.value);
  const fbLength = parseFloat(fbLengthInput.value);
  const fbWidth = parseFloat(fbWidthInput.value);

  if (isNaN(skateLength) || isNaN(fbLength) || isNaN(fbWidth) || fbLength === 0) {
    alert("Please enter valid numbers.");
    return;
  }

  const scaleFactor = (skateLength * 25.4) / fbLength;
  const skateWidth = fbWidth * scaleFactor;

  scaleFactorOutput.textContent = scaleFactor.toFixed(3) + " ";
  skateWidthOutput.textContent = skateWidth.toFixed(2);

  outputSection.style.display = "block";

  setTimeout(() => {
    resetBtn.style.display = "block";
  }, 4000);
});

resetBtn.addEventListener("click", () => {
  fbLengthInput.value = "";
  fbWidthInput.value = "";
  outputSection.style.display = "none";
  resetBtn.style.display = "none";
});

const proportionateBtn = document.getElementById("proportionateBtn");
const resetBtn = document.getElementById("resetBtn");
const loadingBar = document.querySelector(".loading-bar");

const fingerboardLengthInput = document.getElementById("fingerboardLength");
const fingerboardWidthInput = document.getElementById("fingerboardWidth");
const skateboardLengthInput = document.getElementById("skateboardLength");

const scaleFactorOutput = document.getElementById("scaleFactor");
const skateboardWidthOutput = document.getElementById("skateboardWidth");
const receiptOutput = document.getElementById("receiptOutput");

let loading = false;

proportionateBtn.addEventListener("click", () => {
  if (loading) return;
  loading = true;

  loadingBar.style.width = "100%";
  proportionateBtn.style.backgroundColor = "#ffcc00"; // Yellow stays after load

  setTimeout(() => {
    const fbLength = parseFloat(fingerboardLengthInput.value);
    const fbWidth = parseFloat(fingerboardWidthInput.value);
    const sbLength = parseFloat(skateboardLengthInput.value);

    const scaleFactor = sbLength / fbLength;
    const skateboardWidth = (fbWidth * scaleFactor).toFixed(2);

    scaleFactorOutput.textContent = scaleFactor.toFixed(4);
    skateboardWidthOutput.textContent = skateboardWidth;

    receiptOutput.classList.remove("hidden");
    resetBtn.classList.remove("hidden");
  }, 3000);
});

resetBtn.addEventListener("click", () => {
  loading = false;
  loadingBar.style.width = "0%";
  proportionateBtn.style.backgroundColor = "#d2042d";
  receiptOutput.classList.add("hidden");
  resetBtn.classList.add("hidden");

  scaleFactorOutput.textContent = "";
  skateboardWidthOutput.textContent = "";
});

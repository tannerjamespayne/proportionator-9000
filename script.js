document.getElementById("proportion-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const btn = document.getElementById("proportionBtn");
  const bar = btn.querySelector(".loading-bar");
  const output = document.getElementById("output");
  const resetBtn = document.getElementById("resetBtn");

  // Reset states
  bar.style.width = "0%";
  output.classList.remove("visible");
  resetBtn.classList.remove("visible");

  // Animate loading
  bar.style.width = "100%";

  // Read inputs with decimals
  const fingerLength = parseFloat(document.getElementById("fingerLength").value);
  const fingerWidth = parseFloat(document.getElementById("fingerWidth").value);
  const skateLength = parseFloat(document.getElementById("skateLength").value);

  // Assuming scaleFactor is calculated correctly in the Google Sheet and available
  const scaleFactor = parseFloat(document.getElementById("scaleFactor").textContent); // Directly get the value from the sheet
  const skateWidth = fingerWidth * scaleFactor;

  // Wait for loading to complete
  setTimeout(() => {
    btn.style.backgroundColor = "#fcd116"; // Keep yellow
    document.getElementById("scaleFactorOutput").textContent = `${scaleFactor.toFixed(3)} x`; // Display scale factor with 3 decimals
    document.getElementById("skateWidth").textContent = skateWidth.toFixed(2); // Display skate width with 2 decimals
    output.classList.add("visible");

    setTimeout(() => {
      resetBtn.classList.add("visible");
    }, 1000);
  }, 3000);
});

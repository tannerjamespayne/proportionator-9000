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

  // Read inputs
  const fingerLength = parseFloat(document.getElementById("fingerLength").value);
  const fingerWidth = parseFloat(document.getElementById("fingerWidth").value);
  const skateLength = parseFloat(document.getElementById("skateLength").value);

  const scaleFactor = skateLength / fingerLength;
  const skateWidth = fingerWidth * scaleFactor;

  // Wait for loading to complete
  setTimeout(() => {
    btn.style.backgroundColor = "#fcd116"; // keep yellow
    document.getElementById("scaleFactor").textContent = scaleFactor.toFixed(3);
    document.getElementById("skateWidth").textContent = skateWidth.toFixed(2);
    output.classList.add("visible");

    setTimeout(() => {
      resetBtn.classList.add("visible");
    }, 1000);
  }, 3000);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  window.location.reload();
});

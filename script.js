document.getElementById("proportionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const skateLength = parseFloat(document.getElementById("skateLength").value);
  const fbLength = parseFloat(document.getElementById("fbLength").value);
  const fbWidth = parseFloat(document.getElementById("fbWidth").value);

  if (!fbLength || !fbWidth || !skateLength) return;

  // Calculate scale factor
  const scaleFactor = ((skateLength * 25.4) / fbLength).toFixed(3);

  // Calculate skateboard width in inches
  const skateWidth = ((fbWidth * scaleFactor) / 25.4).toFixed(2);

  document.getElementById("scaleFactor").textContent = `${scaleFactor} x`;
  document.getElementById("skateWidth").textContent = `${skateWidth}`;

  document.getElementById("output").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("resetBtn").classList.remove("hidden");
  }, 4000);
});

document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("fbLength").value = "";
  document.getElementById("fbWidth").value = "";
  document.getElementById("scaleFactor").textContent = "";
  document.getElementById("skateWidth").textContent = "";
  document.getElementById("output").classList.add("hidden");
  document.getElementById("resetBtn").classList.add("hidden");
});

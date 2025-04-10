document.getElementById("proportionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const skateLength = parseFloat(document.getElementById("skateLength").value);
  const fbLength = parseFloat(document.getElementById("fbLength").value);
  const fbWidth = parseFloat(document.getElementById("fbWidth").value);

  if (isNaN(skateLength) || isNaN(fbLength) || isNaN(fbWidth) || fbLength === 0) return;

  // Correct calculation: scale factor = (skateLength * 25.4) / fbLength
  const scaleFactor = ((skateLength * 25.4) / fbLength).toFixed(3);
  const skateWidth = ((fbWidth * scaleFactor) / 25.4).toFixed(2);

  document.getElementById("scaleFactor").textContent = `Scale Factor: ${scaleFactor} x`;
  document.getElementById("skateWidth").textContent = `Skateboard Width: ${skateWidth} in`;

  document.getElementById("outputSection").style.display = "block";
  document.getElementById("resetBtn").style.display = "block";
});

document.getElementById("resetBtn").addEventListener("click", function () {
  const skateLength = document.getElementById("skateLength").value;

  document.getElementById("fbLength").value = "";
  document.getElementById("fbWidth").value = "";
  document.getElementById("outputSection").style.display = "none";
  document.getElementById("resetBtn").style.display = "none";

  document.getElementById("skateLength").value = skateLength; // Preserve user input
});

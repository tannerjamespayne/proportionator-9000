function calculate() {
  let skateboardLength = parseFloat(document.getElementById('skateboardLength').value);
  let fingerboardLength = parseFloat(document.getElementById('fingerboardLength').value);
  let fingerboardWidth = parseFloat(document.getElementById('fingerboardWidth').value);

  let scaleFactor = ((skateboardLength * 25.4) / fingerboardLength).toFixed(3);
  let skateboardWidth = (fingerboardWidth * (skateboardLength / fingerboardLength)).toFixed(2);

  document.getElementById('scaleFactorOutput').textContent = `Scale Factor: ${scaleFactor} x`;
  document.getElementById('skateboardWidthOutput').textContent = `Skateboard Width: ${skateboardWidth} in`;

  document.getElementById('outputContainer').style.display = 'block';
  document.getElementById('resetButton').style.display = 'inline-block';
}

function resetApp() {
  document.getElementById('fingerboardLength').value = '';
  document.getElementById('fingerboardWidth').value = '';
  document.getElementById('scaleFactorOutput').textContent = '';
  document.getElementById('skateboardWidthOutput').textContent = '';
  document.getElementById('outputContainer').style.display = 'none';
  document.getElementById('resetButton').style.display = 'none';
}

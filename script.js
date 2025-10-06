// Seleccionamos el canvas
const canvas = document.getElementById("gauge");
const ctx = canvas.getContext("2d");

function drawGauge(value) {
  const start = Math.PI;         // 180°
  const end = 2 * Math.PI;       // 360°
  const centerX = canvas.width / 2;
  const centerY = canvas.height;
  const radius = 120;

  // Fondo en arco (gradiente rojo → amarillo → verde)
  const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
  grad.addColorStop(0, "red");
  grad.addColorStop(0.5, "yellow");
  grad.addColorStop(1, "green");

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, start, end);
  ctx.lineWidth = 20;
  ctx.strokeStyle = grad;
  ctx.stroke();

  // Aguja
  const angle = start + (value / 5) * Math.PI;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
  ctx.lineWidth = 4;
  ctx.strokeStyle = "black";
  ctx.stroke();

  // Punto en el centro
  ctx.beginPath();
  ctx.arc(centerX, centerY, 6, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
}

// Ejecutar al cargar
window.onload = function() {
  const promedio = parseFloat(document.getElementById("promedio").textContent);
  drawGauge(promedio);
};

// src/scripts/timer.js

function startCountdown(duration, display) {
  const key = "inicioTemporizador";
  let startTime = localStorage.getItem(key);

  const originalDuration = duration;

  if (!startTime) {
    // Si no hay hora de inicio, la guardamos ahora
    startTime = Date.now();
    localStorage.setItem(key, startTime);
  } else {
    startTime = parseInt(startTime);
  }

  function updateTimer() {
    const now = Date.now();
    const elapsedSeconds = Math.floor((now - startTime) / 1000);
    let remaining = originalDuration - elapsedSeconds;

    if (remaining <= 0) {
      // Reiniciar: guardamos nueva hora de inicio
      startTime = Date.now();
      localStorage.setItem(key, startTime);
      remaining = originalDuration;

      // Llamar otro script aquí
      console.log("Tiempo agotado. Ejecutando script...");

    }

    const hours = String(Math.floor(remaining / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, '0');
    const seconds = String(remaining % 60).padStart(2, '0');

    display.textContent = `${hours}:${minutes}:${seconds}`;
  }

  updateTimer(); // Ejecuta inmediatamente
  setInterval(updateTimer, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector("#temporizador");
  const duration = 32 * 60 + 10; // 32 minutos y 10 segundos
  if (display) startCountdown(duration, display);
});

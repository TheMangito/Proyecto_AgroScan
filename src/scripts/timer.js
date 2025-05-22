async function startSyncedCountdown(display) {
  // ① Pide la hora exacta del servidor
  const t0Client = Date.now();
  const { now: t0Server } = await fetch('/api/servertime')
                                    .then(r => r.json());
  const drift = t0Client - t0Server;   // ms que adelanta el reloj local

  // ② Calcula el próximo “top-of-hour” (minuto 0)
  const nextTick = Math.ceil(t0Server / 3.6e6) * 3.6e6; // 3.6e6 = 60 min

  function update() {
    // hora real = reloj local - drift
    const diff   = nextTick - (Date.now() - drift);  // ms hasta el siguiente tick
    const secs   = Math.max(0, Math.floor(diff / 1000));

    const hh = String(Math.floor(secs / 3600)).padStart(2, '0');
    const mm = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
    const ss = String(secs % 60).padStart(2, '0');
    display.textContent = `${hh}:${mm}:${ss}`;

    if (secs === 0) {
      // ③ Llegó a cero → tu acción y reinicio
      doSomething();                   // <-- tu función
      while (nextTick <= (Date.now() - drift)) nextTick += 3.6e6;
    }
  }

  update();
  setInterval(update, 1000);
}

function doSomething() {
  console.log('¡Hora completada! Ejecutando acción…');
  // Por ejemplo:
  // fetch('/api/genera-reporte', { method: 'POST' });
}

document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('#temporizador');
  if (display) startSyncedCountdown(display);
});

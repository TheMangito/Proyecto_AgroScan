document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("filtro-select");
    const filas = document.querySelectorAll("#inventario-body tr");

    if (select) {
        select.addEventListener("change", () => {
            const filtro = select.value.toLowerCase();

            filas.forEach((fila) => {
                const tipo = fila.getAttribute("data-tipo");
                fila.style.display = (filtro === "todos" || filtro === tipo) ? "" : "none";
            });
        });
    }
});
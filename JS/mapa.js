document.addEventListener("DOMContentLoaded", function () {
    const estados = document.querySelectorAll("#map .state");
    const seletor = document.getElementById("seletory");

    estados.forEach(function (estadoEl) {
        estadoEl.addEventListener("click", function (e) {
            e.preventDefault();

            const estado = estadoEl.getAttribute("data-state");
            const boxEstado = document.getElementById("box_" + estado);

            console.log(".state_" + estado + " .shape");

            // Resetar cores
            document.querySelectorAll(".state .label_icon_state").forEach(el => {
                el.style.fill = "#666";
            });
            document.querySelectorAll(".state .shape").forEach(el => {
                el.style.fill = "#ddd";
            });

            // Destacar estado selecionado
            const label = document.querySelector("#state_" + estado + " .label_icon_state");
            const shape = document.querySelector("#state_" + estado + " .shape");
            if (label) label.style.fill = "#FFF";
            if (shape) shape.style.fill = "#fd7132";

            // Mostrar box do estado
            document.querySelectorAll(".parca .estado").forEach(el => {
                el.classList.add("some");
                el.style.opacity = "0";
                el.style.visibility = "hidden";
            });

            if (boxEstado) {
                boxEstado.classList.remove("some");
                boxEstado.style.opacity = "1";
                boxEstado.style.visibility = "visible";
            } else {
                console.log("Não existe");
            }
        });
    });

    // Select responsivo
    if (seletor) {
        seletor.addEventListener("change", function () {
            document.querySelectorAll(".parca .estado").forEach(el => {
                el.style.opacity = "0";
                el.style.visibility = "hidden";
            });

            const box = document.getElementById("box_" + seletor.value);
            if (box) {
                box.style.opacity = "1";
                box.style.visibility = "visible";
            }
        });
    }
});

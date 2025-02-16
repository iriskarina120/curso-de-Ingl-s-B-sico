// Recuperar el progreso almacenado al cargar la página  
window.onload = function() {  
    const savedProgress = localStorage.getItem('moduleProgress');  
    if (savedProgress) {  
        const progressElement = document.getElementById("progress");  
        progressElement.style.width = savedProgress + "%";  
        progressElement.textContent = savedProgress + "%";  
    }  

    // Recuperar el estado de las actividades completadas  
    const completedActivities = JSON.parse(localStorage.getItem('completedActivities')) || {};  
    Object.keys(completedActivities).forEach(activity => {  
        if (completedActivities[activity]) {  
            document.querySelector(`button[data-activity="${activity}"]`).disabled = true; // Deshabilitar botón  
        }  
    });  
};  

// Funcionalidad para mostrar y ocultar contenido desplegable  
document.querySelectorAll('h2').forEach(header => {  
    header.addEventListener("click", () => {  
        const content = header.nextElementSibling; // El siguiente elemento que sigue al encabezado  
        if (content.style.display === "block") {  
            content.style.display = "none"; // Ocultar el contenido  
            header.querySelector('.toggle-arrow').classList.remove('open'); // Cambiar la flecha  
        } else {  
            content.style.display = "block"; // Mostrar el contenido  
            header.querySelector('.toggle-arrow').classList.add('open'); // Cambiar la flecha  
        }  
    });  
});  

// Actualiza la barra de progreso  
function updateProgress(additionalProgress) {  
    const progressElement = document.getElementById("progress");  
    let currentProgress = parseInt(progressElement.style.width);  
    currentProgress = currentProgress + additionalProgress;  

    if (currentProgress > 100) {  
        currentProgress = 100; // Limitar el progreso al 100%  
    }  

    progressElement.style.width = currentProgress + "%";  
    progressElement.textContent = currentProgress + "%"; // Actualiza el texto con el porcentaje  

    // Guardar el progreso en localStorage  
    localStorage.setItem('moduleProgress', currentProgress);  
}  

// Funcionalidad para reiniciar el progreso  
document.getElementById("resetButton").addEventListener("click", function() {  
    localStorage.removeItem('moduleProgress'); // Elimina el progreso guardado  
    localStorage.removeItem('completedActivities'); // Elimina el estado de actividades completadas  
    const progressElement = document.getElementById("progress");  
    progressElement.style.width = "0%"; // Restablecer la barra de progreso a 0  
    progressElement.textContent = "0%"; // Actualizar el texto a 0%  

    // Habilitar todos los botones nuevamente  
    document.querySelectorAll('.check-button').forEach(button => {  
        button.disabled = false; // Habilitar todos los botones  
    });  
});  

// Función para marcar una actividad como hecha  
function markAsDone(activity) {  
    const completedActivities = JSON.parse(localStorage.getItem('completedActivities')) || {};  

    if (!completedActivities[activity]) { // Solo permitir marcar si no estaba completada  
        updateProgress(20); // Cada actividad suma un 20%  
        completedActivities[activity] = true; // Marcar actividad como completada  
        localStorage.setItem('completedActivities', JSON.stringify(completedActivities)); // Guardar estado  

        // Deshabilitar el botón correspondiente  
        const button = document.querySelector(`button[data-activity="${activity}"]`);  
        button.disabled = true; // Deshabilitar el botón de check  
        button.classList.add('completed'); // Añadir la clase que cambia el color  
    }  
}  



// Redirección al hacer clic en el botón "Volver a los Módulos"  
document.getElementById("backButton").addEventListener("click", function() {  
    window.location.href = "index.html"; // Cambia a la página principal de módulos  
});  
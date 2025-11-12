// playbook.js

document.addEventListener("DOMContentLoaded", () => {

    /**
     * Lógica para el botón de copiar al portapapeles.
     * Utiliza el API asíncrono navigator.clipboard para una mejor experiencia.
     * Proporciona feedback visual al usuario cambiando el texto y el ícono del botón.
     */
    const allCopyButtons = document.querySelectorAll(".copy-btn");

    allCopyButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Encuentra el elemento <pre> asociado con este botón
            const preElement = button.nextElementSibling;
            if (preElement && preElement.tagName === 'PRE') {
                const textToCopy = preElement.textContent;

                // Usa el API del portapapeles
                navigator.clipboard.writeText(textToCopy).then(() => {
                    // Feedback de éxito
                    const originalIcon = button.querySelector('i').className;
                    const originalText = button.childNodes[1].nodeValue.trim();

                    button.innerHTML = '<i class="fa-solid fa-check"></i> Copiado';
                    button.classList.add('copied');
                    
                    // Revertir al estado original después de 2 segundos
                    setTimeout(() => {
                        button.innerHTML = `<i class="${originalIcon}"></i> ${originalText}`;
                        button.classList.remove('copied');
                    }, 2000);

                }).catch(err => {
                    // Manejo de errores (útil para depuración)
                    console.error("Error al copiar el texto: ", err);
                    alert("No se pudo copiar el texto. Revisa los permisos o la consola.");
                });
            }
        });
    });

    /**
     * La funcionalidad de acordeón es manejada nativamente por los elementos <details> y <summary>.
     * No se requiere JavaScript adicional para su funcionamiento básico, lo que
     * mejora la accesibilidad y reduce la complejidad del código.
     * 
     * Se podrían añadir mejoras aquí como cerrar otros acordeones al abrir uno,
     * pero para mantener la simplicidad, se deja el comportamiento por defecto.
     */

});

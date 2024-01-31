/**
 * Gestione del tema chiaro/scuro
 */

/**
 * Imposta il tema chiaro/scuro in base alle preferenze dell'utente.
 * @param override Valore del tema impostato manualmente. light, dark o auto
 */
function toggleColorScheme(override) {
    const body = document.body;
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if(override){
        if(override === 'auto'){
            body.classList.toggle('light', !prefersDarkMode);
            body.classList.toggle('dark', prefersDarkMode);
            document.getElementById("label-auto").classList.toggle("checked", true);
            document.getElementById("label-light").classList.toggle("checked", false);
            document.getElementById("label-dark").classList.toggle("checked", false);
        } else if (override === 'light') {
            body.classList.toggle('light', true);
            body.classList.toggle('dark', false);
            document.getElementById("label-auto").classList.toggle("checked", false);
            document.getElementById("label-light").classList.toggle("checked", true);
            document.getElementById("label-dark").classList.toggle("checked", false);
        } else if (override === 'dark') {
            body.classList.toggle('light', false);
            body.classList.toggle('dark', true);
            document.getElementById("label-auto").classList.toggle("checked", false);
            document.getElementById("label-light").classList.toggle("checked", false);
            document.getElementById("label-dark").classList.toggle("checked", true);
        }
    } else {
        document.getElementById("label-auto").classList.toggle("checked", true);
        document.getElementById("label-light").classList.toggle("checked", false);
        document.getElementById("label-dark").classList.toggle("checked", false);

        body.classList.toggle('light', !prefersDarkMode);
        body.classList.toggle('dark', prefersDarkMode);
    }
}

/**
 * Imposta il tema chiaro all'apertura della pagina
 */
document.addEventListener("DOMContentLoaded", function () {
    toggleColorScheme('light');
});
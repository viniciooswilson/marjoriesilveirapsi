/**
 * Menu lateral do site - Marjorie Silveira Psicóloga
 * Liga/desliga o menu em telas menores (max-width: 768px).
 */
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".menu-toggle");
    const sidebar = document.getElementById("sidebar");

    function toggleMenu() {
        sidebar.classList.toggle("open");
    }

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener("click", toggleMenu);
    }
});

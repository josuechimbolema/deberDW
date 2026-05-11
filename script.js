document.addEventListener('DOMContentLoaded', () => {
    const sections = { inicio: document.getElementById('sec-inicio'), cursos: document.getElementById('sec-cursos'), registro: document.getElementById('form-container') };
    const links = { inicio: document.getElementById('link-inicio'), cursos: document.getElementById('link-cursos'), registro: document.getElementById('link-registro') };
    let estaRegistrado = false;

    function showSection(id) {
        if (id === 'cursos' && !estaRegistrado) {
            alert("⚠️ Acceso denegado: Debes registrarte primero.");
            showSection('registro'); return;
        }
        Object.keys(sections).forEach(key => sections[key].style.display = (key === id) ? 'block' : 'none');
    }

    links.inicio.onclick = (e) => { e.preventDefault(); showSection('inicio'); };
    links.cursos.onclick = (e) => { e.preventDefault(); showSection('cursos'); };
    links.registro.onclick = (e) => { e.preventDefault(); showSection('registro'); };

    document.getElementById('userForm').onsubmit = function(e) {
        e.preventDefault();
        if (!this.checkValidity()) {
            alert("❌ Dato no válido: Por favor rellene todos los campos correctamente.");
            this.reportValidity(); return;
        }
        estaRegistrado = true;
        alert(`✅ ¡Registro exitoso!`);
        this.reset(); // Limpia el formulario
        showSection('cursos'); // Abre los cursos automáticamente
    };
});
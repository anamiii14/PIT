// Mostrar/ocultar contraseña
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.showpass');
  const passInput = document.getElementById('pass');

  toggleBtn.addEventListener('click', () => {
    passInput.type = (passInput.type === 'password') ? 'text' : 'password';
  });

  // Manejo del submit
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const pass  = passInput.value.trim();

    if (!email || !pass) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Aquí después conectás con tu API (fetch POST a /api/auth/login)
    alert(`Login OK\nEmail: ${email}`);
    // window.location.href = './panel-profesor.html';
  });
});

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    var menuIcon = document.getElementById("menu-icon");
  
    navbar.classList.toggle("open");
    menuIcon.classList.toggle("close");
  }

function incrementarContador() {
  var visitas = localStorage.getItem("visitas");
  if (visitas) {
    visitas = parseInt(visitas) + 1;
  } else {
    visitas = 1;
  }
  localStorage.setItem("visitas", visitas);
  document.getElementById("contadorVisitas").textContent = "Visitas: " + visitas;
}



window.onload = function() {
  incrementarContador();
};


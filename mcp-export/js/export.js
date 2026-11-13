// Navegación local mínima. El formulario conserva los elementos gráficos del MCP.
document.querySelectorAll('body > div > div a, body > div > div p').forEach(function (element) {
  var destinations = {'Inicio':'mis-proyectos.html','Proyectos':'mis-proyectos.html','Sobre mí':'sobre-mi.html','Contacto':'contacto.html'};
  var target = destinations[element.textContent.trim()];
  if (target) { element.style.cursor = 'pointer'; element.addEventListener('click', function () { window.location.href = target; }); }
});

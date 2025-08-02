function initContenedor(){
    // ------------------------ Inicialización de Contenedor
    let Contenedor = document.getElementById("contenedor"); 

    const anchoPantalla = window.innerWidth;
    const altoPantalla = window.innerHeight;
    minValue = Math.min(anchoPantalla,altoPantalla);
    if(minValue == altoPantalla){
      Contenedor.style.width=String(minValue*.79)+"px";
      Contenedor.style.height=String(minValue*.96)+"px";
    }else{
      Contenedor.style.width=String(minValue*.79)+"px";
      Contenedor.style.height=String(minValue*1.3)+"px";
    }
}

document.addEventListener('DOMContentLoaded', function() {
  const miDiv = document.getElementById('ubicacion');
  if (miDiv){
    miDiv.addEventListener('click', function() {
      window.location.href = 'https://www.google.com/maps/place/El+Socav%C3%B3n+Pachuca/@20.1351953,-98.7296777,17z/data=!3m1!4b1!4m6!3m5!1s0x85d109ea8f1e8d11:0x9d2a880419ac3fdf!8m2!3d20.1351953!4d-98.7271028!16s%2Fg%2F11ckqjhhtg?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D';
    });
  }

  const botonReproducir = document.getElementById('btn-reproducir');
  const miAudio = document.getElementById('mi-audio');
  botonReproducir.addEventListener('click', function() {
    miAudio.play()
    const currentActivePage = document.querySelector(".pagina.active");
    currentActivePage.classList.remove("active");
    const nextPage = document.getElementById("pagina_1");
    nextPage.classList.add("active");
    initContenedor()

  });

})
/* -------------------- Funciones para dinámicas -------------------- */
window.addEventListener("load", initContenedor);
window.addEventListener("resize", initContenedor);


// ----------------------- Mostrar la primera página por defecto
window.onload = function() {
    initContenedor();
    document.getElementById("pagina_0").classList.add("active");
}












/*
document.addEventListener('DOMContentLoaded', function() {
  const botonReproducir = document.getElementById('btn-reproducir');
  const miAudio = document.getElementById('mi-audio');
  botonReproducir.addEventListener('click', function() {
      miAudio.play()
  });
});
*/
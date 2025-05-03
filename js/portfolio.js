function codigoAjedrez(){ // Para que cuando le pinches al botón te lleve al código subido en github
  window.open("https://github.com/paramo98/AntonioAjedrez", "_blank");
}

function codigoAreas(){
  window.open("https://github.com/paramo98/AntonioAreas", "_blank");
}

function codigoCubos(){
  window.open("https://github.com/paramo98/AntonioCubos", "_blank");
}

function codigoDados(){
  window.open("https://github.com/paramo98/AntonioDados", "_blank");
}

function codigoZodiaco(){
  window.open("https://github.com/paramo98/AntonioZodiaco", "_blank");
}

function codigoTienda(){
  window.open("https://github.com/paramo98/AntonioTienda", "_blank");
}

function codigoBootstrap(){
  window.open("https://github.com/paramo98/AntonioBootstrap", "_blank");
}

let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let asunto = document.getElementById('asunto');
let mensaje = document.getElementById('texto');
let errorNombre = document.getElementById('errorNombre');
let errorEmail = document.getElementById('errorEmail');
let errorAsunto = document.getElementById('errorAsunto');
let errorMensaje = document.getElementById('errorMensaje');
emailjs.init("7rhPZoauV-nzwesRj");

formulario.addEventListener('submit', (e) => {
  e.preventDefault()

  if (nombre.value.trim() === '') { // Validamos que el nombre no está vacío
    errorNombre.textContent = 'Debes de poner tu nombre';
  } else {
    errorNombre.textContent = '';
  }

  if (asunto.value.trim() === '') { // Validamos que el asunto no está vacío
    errorAsunto.textContent = 'Debes de poner un asunto';
  } else {
    errorAsunto.textContent = '';
  }

  if (mensaje.value.trim() === '') { // Validamos que el mensaje no está vacío
    errorMensaje.textContent = 'Debes de poner un mensaje';
  } else {
    errorMensaje.textContent = '';
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email.value.trim() === '') { // Validamos que el email no está vacío y esté bien escrito
    errorEmail.textContent = 'Debes de poner tu email';
  } else if (!email.value.includes('@')) {
    errorEmail.textContent = 'El email debe contener "@"';
  } else if (!emailRegex.test(email.value.trim())) {
    errorEmail.textContent = 'El email no es válido';
  } else {
    errorEmail.textContent = '';
  }

  document.getElementById("formulario").addEventListener("submit", function(e) {
  emailjs.sendForm("service_d9hm1ud", "template_r4podpn", this)
    .then(() => {
      // alert("Mensaje enviado correctamente");
      Swal.fire({
        title: "Mensaje enviado",
        icon: "success",
        text: "El mensaje fue enviado correctamente",
      });
      this.reset();
    })
    .catch(error => {
      // alert("Error al enviar el mensaje: " + JSON.stringify(error));
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Hubo un error" + JSON.stringify(error),
      });
    });
  });
});
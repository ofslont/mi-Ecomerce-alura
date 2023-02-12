const form = document.querySelector("[msg-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  

  if (nombre.length !=0) {
    window.location.href = "../screens/Mensage.html";
  } else {
    alert("Por favor, escriva su nomre");
  }
});
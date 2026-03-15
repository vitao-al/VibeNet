const janela = document.getElementById("janela");
const barra = document.getElementById("barra-titulo");

let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

barra.onmousedown = dragMouseDown;

function dragMouseDown(e) {
  e.preventDefault();
  // Pega a posição inicial do mouse
  pos3 = e.clientX;
  pos4 = e.clientY;
  
  document.onmouseup = closeDragElement;
  document.onmousemove = elementDrag;
}

function elementDrag(e) {
  e.preventDefault();
  // Calcula o deslocamento
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  
  // Define a nova posição da janela
  janela.style.top = (janela.offsetTop - pos2) + "px";
  janela.style.left = (janela.offsetLeft - pos1) + "px";
}

function closeDragElement() {
  // Para de mover quando o mouse é solto
  document.onmouseup = null;
  document.onmousemove = null;
}
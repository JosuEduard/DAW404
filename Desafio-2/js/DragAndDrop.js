
/**
 * Código utilizado para la función de arrastrar y soltar en el archivo carreras.html
 *  Ventanas movibles DOM
 */

let draggedCard = null;

document.querySelectorAll('.card-item').forEach(card => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragover', dragOver);
  card.addEventListener('drop', drop);
  card.addEventListener('dragend', dragEnd);
});

function dragStart(e) {
  draggedCard = this; 
  setTimeout(() => {
    this.style.display = 'none'; 
  }, 0);
}

function dragOver(e) {
  e.preventDefault();
}
function drop(e) {
  e.preventDefault();
  if (this !== draggedCard) {
    let cardContainer = document.getElementById('card-container');
    let allCards = Array.from(cardContainer.children);

    //Obtengo el contenedor de las cards y en la otra convierto en un array los elementos
    let draggedIndex = allCards.indexOf(draggedCard);
    let targetIndex = allCards.indexOf(this);

    // En esta condicion se evaluan las posiciones y se intercambian
    if (draggedIndex < targetIndex) {
      this.after(draggedCard);
    } else {
      this.before(draggedCard);
    }
  }
}

function dragEnd() {
  this.style.display = 'block';
  draggedCard = null;
}

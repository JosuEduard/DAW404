
alert('Taller Practico 01 - DAW');

document.addEventListener('DOMContentLoaded', function() {

  let items = document.getElementsByClassName('menu-item');
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
      let details = this.nextElementSibling;
      if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
      } else {
        details.style.display = 'none';
      }
    });
  }
});

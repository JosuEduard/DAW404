document.onkeydown = keyHit;
let thisPic = 0;

function keyHit(evt) {
  let myPix = [
    "img/lion.jpg",
    "img/tigger.jpg",
    "img/puma.jpg",
    "img/leopard.jpg",
    "img/lince.jpg"
  ];
  let imgCt = myPix.length - 1;
  // 37 y 39 son los códigos de las teclas que representan
  //la presión de las teclas de cursor izquierda y derecha
  let ltArrow = 37;
  let rtArrow = 39;

  let thisKey = (evt) ? evt.which : window.event.keyCode;
  if (thisKey == ltArrow) {
    chgSlide(-1);
  }
  else if (thisKey == rtArrow) {
    chgSlide(1)
  }
  return false;

  function chgSlide(direction) {
    thisPic += direction;
    if (thisPic > imgCt) {
      thisPic = 0;
    }
    if(thisPic < 0){
      thisPic = imgCt;
    }
    document.getElementById("myPicture").src = myPix[thisPic];
  }
}
console.log('funguju!');

//Pomocí JavaScriptu zařiďte, aby se při stisknutí 
//libovolné klávesy na stránce přidala k elementu žárovky CSS třída bulb--on. 
//Žárovka by se takto měla rozsvítit.
document.addEventListener('keydown', function(event) {
    const bulb_ = document.querySelector('.bulb');
  bulb_.classList.add('bulb--on');
}); 

//Vylepšete program tak, aby na následné stisknutí 
//libovolné klávesy žárovka opět zhasnula. 
//Opakovaným mačkáním kláves ji tak můžeme rozsvěcovat a zhasínat.
let isBulbOn = false;
document.addEventListener('keydown', function(event) {
    const bulb = document.querySelector('.bulb');
  isBulbOn = !isBulbOn;
  if (isBulbOn) {
    bulb.classList.add('bulb--on');
  } else {
    bulb.classList.remove('bulb--on');
  }
});


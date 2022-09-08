
var $no = document.querySelector('#no');
var $open = document.querySelector('#open');
var $bg = document.querySelector('.bg');

$open.addEventListener('click', function () {
  $bg.className = 'bg row';
});

$no.addEventListener('click', function () {
  $bg.className = 'bg row off';
});

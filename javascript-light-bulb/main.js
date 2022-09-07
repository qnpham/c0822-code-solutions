var on = true;
var $button = document.querySelector('button');
var $container = document.querySelector('.container');
$button.addEventListener('click', function () {
  if (on === true) {
    $container.className = 'container off';
    $button.className = 'off';
    on = false;
  } else if (on === false) {
    $container.className = 'container';
    $button.className = '';
    on = true;
  }
});

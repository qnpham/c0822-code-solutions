var $span = document.querySelectorAll('span');
var $html = document.querySelector('html');
var index = 0;
$html.addEventListener('keydown', function (event) {
  if (event.key === $span[index].textContent) {
    $span[index].className = 'correct';
    index++;
    $span[index].className = 'underline';
  } else {
    $span[index].className = 'incorrect underline';
  }
});

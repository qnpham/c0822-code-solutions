var count = 3;
var $h1 = document.querySelector('h1');
function countDown() {
  if (count === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
    return;
  }

  $h1.textContent = count;
  count--;
}

var interval = setInterval(countDown, 1000);

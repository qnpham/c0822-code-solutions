var scrollIndex = 0;
var secondInterval = null;
var $img = document.querySelectorAll('img');
var $radio = document.querySelectorAll('input');
var $rightChevron = document.querySelector('.fa-chevron-right');
var $leftChevron = document.querySelector('.fa-chevron-left');
var $form = document.querySelector('form');
function nextScroll() {
  if (scrollIndex === 5) {
    $img[scrollIndex - 1].classList.add('hidden');
    $img[0].classList.remove('hidden');
    scrollIndex = 0;
  }

  radioCheck(scrollIndex);

  if (scrollIndex === 0) {
    scrollIndex++;
    return;
  }
  $img[scrollIndex - 1].classList.add('hidden');
  $img[scrollIndex].classList.remove('hidden');
  ++scrollIndex;

}

function radioCheck(index) {
  for (var i = 0; i < $radio.length; i++) {
    $radio[i].checked = false;
  }
  $radio[index].checked = true;
}

$rightChevron.addEventListener('click', function () {
  clearInterval(firstInterval);
  clearInterval(secondInterval);
  nextScroll();
  secondInterval = setInterval(nextScroll, 3000);
});

$leftChevron.addEventListener('click', previousScroll);

function previousScroll() {
  clearInterval(firstInterval);
  clearInterval(secondInterval);
  if (scrollIndex === 0) {
    scrollIndex = 4;
    $img[scrollIndex].classList.remove('hidden');
    $img[0].classList.add('hidden');
    radioCheck(scrollIndex);
    secondInterval = setInterval(nextScroll, 3000);
    return;
  }

  $img[scrollIndex - 1].classList.remove('hidden');
  $img[scrollIndex].classList.add('hidden');
  radioCheck(scrollIndex - 1);
  --scrollIndex;
  secondInterval = setInterval(nextScroll, 3000);

}

$form.addEventListener('click', function (event) {
  clearInterval(firstInterval);
  clearInterval(secondInterval);
  for (var i = 0; i < $radio.length; i++) {
    $radio[i].checked = false;
    if ($radio[i].matches('#' + event.target.id)) {
      for (var z = 0; z < $img.length; z++) {
        $img[z].classList.add('hidden');
        $radio[z].checked = false;
      }
      scrollIndex = i;
      $img[scrollIndex].classList.remove('hidden');
      $radio[scrollIndex].checked = true;

      secondInterval = setInterval(nextScroll, 3000);
    }
  }
});

var firstInterval = setInterval(nextScroll, 3000);

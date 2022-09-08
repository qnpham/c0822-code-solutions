var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab') === true) {
    for (var i = 0; i < $tab.length; i++) {
      $tab[i].classList.remove('active');
      if (event.target === $tab[i]) {
        event.target.classList.add('active');

        var dataView = event.target.getAttribute('data-view');

        for (var j = 0; j < $view.length; j++) {
          $view[j].className = 'view hidden';
          if ($view[j].getAttribute('data-view') === dataView) {
            $view[j].className = 'view';
          }
        }
      }
    }
  }
});

var $contact = document.querySelector('form');
$contact.addEventListener('submit', function (event) {
  event.preventDefault();
  var controls = {};
  controls.name = this.elements.name.value;
  controls.email = this.elements.email.value;
  controls.message = this.elements.message.value;
  this.reset();

  console.log('controls:', controls);
});

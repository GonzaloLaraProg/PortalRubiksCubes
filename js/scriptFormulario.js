$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      var name = $('#inputName').val();
      var email = $('#inputEmail').val();
      var message = $('#inputMessage').val();
      if (name === '' || email === '' || message === '') {
        swal({
            title: 'Por favor, completa todos los campos',
            icon: 'warning'
        })
      } else if (!isValidEmail(email)) {
        swal({
            title: 'Por favor, ingresa un correo electrónico válido',
            icon: 'warning'
        })
      } else {
        swal({
            title: 'Formulario enviado correctamente',
            icon: 'success'
        })
        $('form')[0].reset();
      }
    });
  
    function isValidEmail(email) {
      var emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    }
  });




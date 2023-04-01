$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      var name = $('#inputName').val();
      var lastName = $('#inputLastName').val();
      var email = $('#inputEmail').val();
      var edad = $('#inputEdad').val();
      var message = $('#inputMessage').val();
      var edadParseado = parseInt(edad);
      

      if (name === ''|| lastName === '' || email === ''|| message === '' || edad === '') {
        swal({
            title: 'Por favor, completa todos los campos',
            icon: 'warning'
        })
      } else if (!isValidEmail(email)) {
        swal({
            title: 'Por favor, ingresa un correo electrónico válido',
            icon: 'warning'
        })
      } else if(edadParseado < 9){
        swal({
          title: 'Debes ser mayor de 9 años.',
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




// $(document).ready(function() {
//     $('#password').on('blur', function() {
//       var password = $(this).val();
//       var passwordError = $('#password-error');
      
//       if (password.length < 8) {
//         passwordError.html('<br>La contraseña debe tener al menos 8 caracteres.');
//       } else if (password !== $('#confirm-password').val()) {
//         passwordError.html('<br>Las contraseñas no coinciden.');
//       } else {
//         passwordError.html('');
//       }
//     });
//   });

// $(document).ready(function() {

//   // Función para validar el formulario
//   function validarFormulario() {

//     // Obtener los valores de los campos
//     var nombre = $("#inputName").val().trim();
//     var apellido = $("#inputLastName").val().trim();
//     var edad = $("#inputEdad").val().trim();
//     var correo = $("#inputEmail").val().trim();
//     var password = $("#inputPassword").val();
//     var repeatPassword = $("#inputRepeatPassword").val();

//     // Validar que se ingresen valores en los campos
//     if (nombre === '' || apellido === '' || edad === '' || correo === '' || password === '' 
//     || repeatPassword === '') {
//       swal({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Por favor, complete todos los campos.'
//       });
//       return false;
//     }

//     // Validar que la contraseña tenga al menos 8 caracteres
//     if (password.length < 8) {
//       $("#passwordError").text("La contraseña debe tener al menos 8 caracteres.");
//       return false;
//     }

//     // Validar que las contraseñas sean iguales
//     if (password != repeatPassword) {
//       $("#repeatPasswordError").text("Las contraseñas no coinciden.");
//       return false;
//     }

//     // Si se superan todas las validaciones, enviar el formulario
//     return true;
//   }

//   // Validar el formulario cuando se envía
//   $("form").submit(function() {
//     if (validarFormulario()) {
//       swal({
//         icon: 'success',
//         title: 'Formulario enviado',
//         showConfirmButton: false,
//         timer: 3000
//       });
//     }
//   });

//   // Limpiar los mensajes de error cuando se cambia el valor de los campos
//   $("#inputPassword, #inputRepeatPassword").change(function() {
//     $("#passwordError, #repeatPasswordError").text("");
//   });

// });

// $(document).ready(function() {
//   $('form').submit(function(event) {
//     event.preventDefault();
//     var name = $('#inputName').val();
//     var lastName = $('#inputLastName').val();
//     var email = $('#inputEmail').val();
//     var edad = $('#inputEdad').val();
//     var password = $('#inputPassword').val();
//     var password1 = $('#inputRepeatPassword').val();
//     var message = $('#inputMessage').val();
//     var edadParseado = parseInt(edad);
    

//     if (name === '' || lastName === '' || email === '' || message === '' || edad === '' || password === '' || password1 === '') {
//       swal({
//         title: 'Por favor, completa todos los campos',
//         icon: 'warning'
//       });
//     } else if (!isValidEmail(email)) {
//       swal({
//         title: 'Por favor, ingresa un correo electrónico válido',
//         icon: 'warning'
//       });
//     } else if (edadParseado < 9) {
//       swal({
//         title: 'Debes ser mayor de 9 años.',
//         icon: 'warning'
//       });
//     } else if (password.length < 8 || password1.length < 8) {
//       swal({
//         title: 'La contraseña debe contener al menos 8 caracteres.',
//         icon: 'warning'
//       });
//     } else if (password !== password1) {
//       swal({
//         title: 'Las contraseñas no coinciden.',
//         icon: 'warning'
//       });
//     } else {
//       swal({
//         title: 'Formulario enviado correctamente',
//         icon: 'success'
//       });
//       $('form')[0].reset();
//     }
//   });

//   function isValidEmail(email) {
//     var emailRegex = /\S+@\S+\.\S+/;
//     return emailRegex.test(email);
//   }
// });

// 
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var name = $('#inputName').val();
    var lastName = $('#inputLastName').val();
    var email = $('#inputEmail').val();
    var edad = $('#inputEdad').val();
    var password = $('#inputPassword').val();
    var password1 = $('#inputRepeatPassword').val();
    var message = $('#inputMessage').val();
    var edadParseado = parseInt(edad);

    if (name === '' || lastName === '' || email === '' || message === '' || edad === '' || password === '' || password1 === '') {
      swal({
        title: 'Por favor, completa todos los campos',
        icon: 'warning'
      });
    } else if (!isValidEmail(email)) {
      swal({
        title: 'Por favor, ingresa un correo electrónico válido',
        icon: 'warning'
      });
    } else if (edadParseado < 9) {
      swal({
        title: 'Debes ser mayor de 9 años.',
        icon: 'warning'
      });
    } else if (password.length < 8 || password1.length < 8) {
      swal({
        title: 'La contraseña debe contener al menos 8 caracteres.',
        icon: 'warning'
      });
    } else if (password !== password1) {
      swal({
        title: 'Las contraseñas no coinciden.',
        icon: 'warning'
      });
    } else {
      swal({
        title: 'Formulario enviado correctamente',
        icon: 'success'
      });
      $('form')[0].reset();
    }
  });

  function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
});

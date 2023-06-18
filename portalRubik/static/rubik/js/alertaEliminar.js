// custom.js
function eliminarUsuario(id) {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción no se puede deshacer",
        icon: "question",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Eliminar",
        reverseButtons: true,
        confirmButtonColor:"#dc3545"
    }).then(function(result) {
        if (result.isConfirmed) {
            window.location.href =  id + "/delete/";
        }
    });
}

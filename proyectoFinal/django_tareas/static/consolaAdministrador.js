function editarUsuario(idEditar) 
{
    fetch(`/conseguirInfoUsuario?idEditar=${idEditar}`)
    .then(response => response.json())
    .then(data =>{
        let nombreDetalle = document.getElementById('nombreDetalle')
        let apellidoDetalle = document.getElementById('apellidoDetalle')
        let emailDetalle = document.getElementById('emailDetalle')
        let nroCelularDetalle = document.getElementById('nroCelularDetalle')
        let profesionUsuarioDetalle = document.getElementById('profesionUsuarioDetalle')
        let fechaIngresoDetalle = document.getElementById('fechaIngresoDetalle')

        nombreDetalle.value = data.nombre
        apellidoDetalle.value = data.apellido
        emailDetalle.value = data.email 
        nroCelularDetalle.value = data.nroCelular 
        profesionUsuarioDetalle.value = data.profesionUsuario
        fechaIngresoDetalle.valur = data.fechaIngreso
        console.log(data)
    })
}


function actualizarUsuario() 
{
  const idEditar = document.getElementById('cargaId').innerHTML;
  const nroCelularDetalle = document.getElementById('nroCelularDetalle').value;
  const profesionUsuarioDetalle = document.getElementById('profesionUsuarioDetalle').value;

  fetch(`/actualizarUsuario?idEditar=${idEditar}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nroCelular: nroCelularDetalle,
      profesionUsuario: profesionUsuarioDetalle
    })
    })
  .then(response => {
    console.log(response);
  })
}
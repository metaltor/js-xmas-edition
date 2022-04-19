function validarNombre (nombre){
    if (nombre.length === 0 ){
        return "Este campo debe tener al menos 1 caracter";
    }
    if(nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres";
    }
    return "";
}

function validarCiudad (ciudad){
    if(ciudad.length === 0){
        return "Tienes que seleccionar una ciudad"
    }
    return ""
}

function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length === 0 ){
        return "Este campo debe tener al menos 1 caracter"
    }
    if (descripcionRegalo.length >= 100){
        return "El campo de descripcion es muy largo"
    }
    return ""
}
function validarFormulario (event){
const $form = document.querySelector("#carta-a-santa");
const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const descripcionRegalo = $form["descripcion-regalo"].value;
const errorNombre = validarNombre(nombre);
const errorCiudad = validarCiudad(ciudad);
const errorDescripcionRegalo =  validarDescripcionRegalo(descripcionRegalo);

const errores = {
    nombre : errorNombre,
    ciudad : errorCiudad,
    "descripcion-regalo": errorDescripcionRegalo
};

const esExito = manejarErrores(errores) === 0 

if(esExito){
    $form.className='oculto'
    //es este de aca si pongo document.querySelector(#exito).className ='' ->si funciona pero de esta manera no
    //$form.exito.className=''
}

event.preventDefault();
}

function manejarErrores(errores){
// removerErroresAnteriores()
const keys = Object.keys(errores);
const $errores = document.querySelector('#errores');
let cantErrores = 0;

keys.forEach(function(key){
    const error = errores[key]
    
    if(error){
        cantErrores ++;
        $form[key].className='error';
        const $error = document.createElement("li");
        $error.className=key
        $error.innerHTML=error;
        $errores.appendChild($error);
    }else{
        $form[key].className='';
        //y aca trato de remover solo los que tienen la clase igual que el key que se la puse anteriormente pero se que hay un error
        //$errores[key].remove()
    };
});
return cantErrores
// const errorNombre= errores.nombre
// const errorCiudad=errores.ciudad
// const errorDescripcionRegalo = errores["descripcion regalo"]

// if(errorNombre){
//     $form.nombre.className = "error"
// }else{
//     $form.nombre.className = ""
// }

// if(errorCiudad){
//     $form.ciudad.className = 'error'
// }else{
//     $form.ciudad.className =''
// }
// if(errorDescripcionRegalo){
//     $form["descripcion-regalo"].className = 'error'
// }else{
//     $form["descripcion-regalo"].className = ''
// }

}

//  function removerErroresAnteriores (){
//  const $errores =  document.querySelector('#errores')
//  while ($errores.firstChild) {
//     $errores.removeChild($errores.firstChild);
//    }

//  }
const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;

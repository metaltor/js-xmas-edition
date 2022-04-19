/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


document.querySelector("#siguiente-paso").onclick = function(event){
    const $cantIntegrantes = document.querySelector("#cantidad-integrantes")
    const cantIntegrantes = Number($cantIntegrantes.value)
    borrarIntegrantesAnteriores()
    crearIntegrantes(cantIntegrantes)
   
    event.preventDefault()
}
document.querySelector("#calcular").onclick = function(event) {
   const arrayEdades = obtenerEdadesIntegrantes()
   mostrarEdad("mayor", obtenerMayor(arrayEdades))
   mostrarEdad("menor", obtenerMenor(arrayEdades))
   mostrarEdad("promedio", obtenerPromedio(arrayEdades))
   mostrarAnalisis ()




}

document.querySelector("#resetear").onclick = resetear

function borrarIntegrantesAnteriores() {
    const $integrante = document.querySelectorAll(".integrante")

    for(let i= 0; i<  $integrante.length; i++){
        $integrante[i].remove()
    }

}
function crearIntegrantes (cantIntegrantes){

    if(cantIntegrantes>0) {
        mostrarBotonCalculo()
        mostrarBotonAgregarSalario()
    }else {
        resetear()
    }
    
    for (i=0 ; i<cantIntegrantes ; i++){
    crearIntegrante(i)}
    
}

function crearIntegrante (indice){
    const $div = document.createElement("div")
    $div.className ="integrante"
    const $input = document.createElement("input")
    $input.type ="number"
    const $label =document.createElement("label")
    $label.textContent = "Integrante #"+ (indice+1)
     
    $div.appendChild($label)
    $div.appendChild($input)
    const $integrantes = document.querySelector("#integrantes")
    $integrantes.appendChild($div)

}
function resetear (){
    borrarIntegrantesAnteriores()
    ocultarBotonCalculo()
    ocultarAnalisis()

}

function ocultarBotonCalculo(){
    document.querySelector("#calcular").className = "oculto"
}
function mostrarBotonCalculo(){
    document.querySelector("#calcular").className = ""
}
function mostrarEdad(tipo, valor){
    document.querySelector(`#${tipo}-edad`).textContent=valor
}
function mostrarAnalisis (){
    document.querySelector("#analisis").className = "" 
}
function ocultarAnalisis (){
    document.querySelector("#analisis").className = "oculto" 
}
function obtenerEdadesIntegrantes (){
    const $integrantes = document.querySelectorAll(".integrante input")
    const edades = []
    for ( i=0 ; i< $integrantes.length ; i++ ){
        edades.push(Number($integrantes[i].value))
    }
    return edades
}
function obtenerMayor (array1){
    
    let mayorNumero = 0
    for (let i=0 ; i<array1.length ; i++){
        if (array1[i]> mayorNumero)
        mayorNumero = array1[i]
        
    }return mayorNumero
}
function obtenerMenor (array1){
    
    let menorNumero = array1[0]
    for (let i=0;i<array1.length;i++){
        if (array1[i]<menorNumero){
            menorNumero = array1[i]
        }
        
    }
    return menorNumero
}

function obtenerPromedio(array1){
    
    let suma = 0
    for(let i=0;i<array1.length;i++){
        suma += array1[i]
    }
    const promedio = suma/array1.length

    return promedio
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector("#agregar-salarios").onclick = function () {
    const $cantIntegrantes = document.querySelector("#cantidad-integrantes")
    const cantIntegrantes = Number($cantIntegrantes.value)
    ocultarCalculadorEdades()
    mostrarCalculadorSalarios()
    agregarSalarios(cantIntegrantes)
}

document.querySelector("#calcular-salarios").onclick=function(){
    const cantSalarios = obtenerCantSalarios()
    mostrarSalario ("mayor", obtenerMayor(cantSalarios))
    mostrarSalario ("menor", obtenerMenor(cantSalarios))
    mostrarSalario ("promedio", obtenerPromedio(cantSalarios))
    mostrarSalario ("promedio-mensual", obternerPromedioMensual(cantSalarios))
    mostrarAnalisisSalario()
    console.log(cantSalarios)
}
function mostrarSalario(tipo,valor){
    document.querySelector(`#${tipo}-salario`).textContent = valor
}


function obtenerCantSalarios(){
    const $salario = document.querySelectorAll(".salario input")
    let cantSalario=[]

    for(i=0;i<$salario.length;i++){
        if(Number($salario[i].value) != 0){
            cantSalario.push(Number($salario[i].value))
        }
    }
    return cantSalario
} 

document.querySelector("#volver-inicio").onclick = function (){
    
    borrarSalario()
    ocultarCalculadorSalarios()
    ocultarBotonAgregarSalario()
    mostrarCalculadorEdades()
    resetear()
    borrarCantIntegrantes()
}
function borrarSalario(){
    const cantSalarios = document.querySelectorAll(".salario")
    for(i=0;i<cantSalarios.length;i++){
        cantSalarios[i].remove()
    }

}
function agregarSalarios(cantIntegrantes){
    if(cantIntegrantes>0) {

    }
    for (i=0;i<cantIntegrantes;i++) {
        crearSalarioIntegrante(i+1)
    }
    
}

function crearSalarioIntegrante(integrante){
    const $div = document.createElement("div")
    $div.className ="salario"

    const $input = document.createElement("input")
    $input.type = "number"
    const $label= document.createElement("label")
    $label.textContent = `Salario del integrante ${integrante} :` 

    $div.appendChild($label)
    $div.appendChild($input)

    const $divSalarios = document.querySelector("#salarios")
    $divSalarios.appendChild($div)
}

function borrarCantIntegrantes(){
    document.querySelector("#cantidad-integrantes").value= ""
}
function ocultarCalculadorEdades() {
    document.querySelector("#calculador-edades").className= "oculto"
}
function mostrarCalculadorEdades() {
    document.querySelector("#calculador-edades").className= ""
}
function ocultarCalculadorSalarios(){
    document.querySelector("#calculador-salarios").className="oculto"
}
function mostrarCalculadorSalarios(){
    document.querySelector("#calculador-salarios").className=""
}
function ocultarBotonAgregarSalario(){
    document.querySelector("#agregar-salarios").className= "oculto"
}
function mostrarBotonAgregarSalario(){
    document.querySelector("#agregar-salarios").className= ""
}
function ocultarAnalisisSalario(){
    document.querySelector("#analisis-salario").className= "oculto"
}
function mostrarAnalisisSalario(){
    document.querySelector("#analisis-salario").className= ""
}

function obternerPromedioMensual(arraySalarios){
    let suma= 0
    for(i=0;i<arraySalarios.length;i++){
        suma += (arraySalarios[i]/12)
    }
    const promMensual= suma/arraySalarios.length
    return promMensual
}

/*
boton agregar salarios
    ocultar calculador de edades 
    mostrar calculador de salarios
    agregar salarios  
        crear labels para salario des integrante
        crear inputs para salario del integrante
        agregar los inputs y label a un div
       
boton quitar salarios
    borrar inputs y labels creados
    ocultar calculador de salario
    mostrar calculador de edaddes
boton calcular
    calcular mayor salario anual
    mostrar
    calcular menor salario anual
    calcular promedio salario anual
    calcular promedio salario mensual 


boton siguiente
    funcion borrar integrantes anteriores
        
    funcion crear integrantes nuevos
        crear integrante 
        montrar boton de calcular

boton calculador
    crear el analisis
        obtener edades en array
        crear funciones de mayor numero
        crear funciones de menor numero
        crear funciones de promedio

        mostrar resultados
    
boton reset
    borrar integrantes
    ocultar boton calcular
    ocultar analisis


*/
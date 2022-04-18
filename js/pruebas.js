function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
    console.assert(
      validarNombre("Gustavo")  === '','validarNombra fallo con un nombre valido'       
    );
  }
  function probarValidarCiudad(){
      console.assert(
         validarCiudad('') === 'Tienes que seleccionar una ciudad', 'Validar ciudad no valido que ciudad no este vacio'
      );
      console.assert(
          validarCiudad('Salta') === '','validarCiudad fallo con una ciudad valida'
      );
  }
  
  function probarValidarDescripcionRegalo(){
      console.assert(
         validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter', 'Validar descripcion regalo no valido que descripcion-regalo no este vacio'
      );
      console.assert(
          validarDescripcionRegalo('ahahahahahahajshaskajhsalkjshajhkljsahdashdkjasbhdakshdbasdyasudyasudyasdusyadksuadksaydkasduyaskdasdukbdasuyd') === 'El campo de descripcion es muy largo', 'validar descripcion regalo no valido que la descripcion tenga menos de 100 carateres'
      );
      console.assert(
          validarDescripcionRegalo('Regalo') === '','validarDescripcionRegalo fallo con una descripcion valida'
      );
  
  }
  
  
  probarValidarNombre();
  probarValidarCiudad();
  probarValidarDescripcionRegalo();
  
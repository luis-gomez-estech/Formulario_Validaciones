
	// Valido el Usuario
  	function validarUsuario(){

  		var compruebaUsuario = document.getElementById("usuario").value;

  		if (compruebaUsuario==''|| /^\s+$/.test(compruebaUsuario)){

  		   	//document.getElementById('usuario').value = texto_error();

  		   	document.getElementById('campo_error_usuario').innerHTML = texto_error();
          document.getElementById('usuario').classList.remove('campo_validado'); // Elimina la class
  		   	document.getElementById('usuario').classList.add('campo_marca_error');	//Añade la class marca errores
           document.getElementById('campo_error_usuario').style.color="red";  	

  		    //  document.getElementById("usuario").style.color = "red";

  		} else if (compruebaUsuario.length<5||compruebaUsuario.length > 12) {

  		   	document.getElementById('campo_error_usuario').innerHTML = "Debes introducir entre 5 y 12 caracteres";
          document.getElementById('usuario').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('usuario').classList.add('campo_marca_error'); // Añade la class
          document.getElementById('campo_error_usuario').style.color="red";

  		} else  {

        
  			  //document.getElementById('campo_error_usuario').innerHTML = "";
  		    document.getElementById('usuario').classList.add('campo_validado'); // Añade la class
          document.getElementById('campo_error_usuario').innerHTML ="Usuario válido";
          document.getElementById('campo_error_usuario').style.color="green";
          
    	
  	    }
	  }

    // Valido la contraseña
  	function validarPassword(){

  		var compruebaPassword = document.getElementById("password").value;

  		if (compruebaPassword==''|| /^\s+$/.test(compruebaPassword)){

  		   	document.getElementById('campo_error_password').innerHTML = texto_error();
          document.getElementById('password').classList.remove('campo_validado'); // Elimina la class
  		   	document.getElementById('password').classList.add('campo_marca_error');	//Añade la class marca errores	
          document.getElementById('campo_error_password').style.color="red";   		
  	
  		} else if (compruebaPassword.length<7||compruebaPassword.length > 12) {

  		  	document.getElementById('campo_error_password').innerHTML = "Debes introducir entre 7 y 12 caracteres";
  		  	document.getElementById('password').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('password').classList.add('campo_marca_error'); // Añade la class
          document.getElementById('campo_error_password').style.color="red";


  		} else {
  			  //document.getElementById('campo_error_password').innerHTML = "";
  		    document.getElementById('password').classList.add('campo_validado');
          document.getElementById('campo_error_password').innerHTML ="Password válida";
          document.getElementById('campo_error_password').style.color="green";
    	}

	  }


  	// Valido nombre

  	//Aqui he usado una funcion que no conocia, pero se me ocurrio de como hacerlo para impedir o no dejar escribir si detecta que es un numero
  	// y di con este metodo, y me parecio muy util y por eso lo he usado, lo vi como algo estandar y usable, y lo que siempre comentas ya inventado y
  	// y que esta muy completo
   	function soloLetras(e){

      var key = window.event ? e.which : e.keyCode;

         key = e.keyCode || e.which;
         tecla = String.fromCharCode(key).toLowerCase();
         letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
         especiales = "8-37-39-46";

         tecla_especial = false
         for(var i in especiales){
              if(key == especiales[i]){
                  tecla_especial = true;
                  break;
              }
          }
          if(letras.indexOf(tecla)==-1 && !tecla_especial){
  		
  		return false;
  		ValidarNombre();
  		}
    }

	  // y aqui valido si esta vacio
  	function validarNombre(){

  		var compruebaNombre = document.getElementById("nombre").value; 		

  		if (compruebaNombre==''|| /^\s+$/.test(compruebaNombre)){

  		   	document.getElementById('campo_error_nombre').innerHTML = texto_error();  		  
          document.getElementById('nombre').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('nombre').classList.add('campo_marca_error'); // Añade la class 

          document.getElementById('campo_error_nombre').style.color="red";
  	
  		} else {
  			  //document.getElementById('campo_error_nombre').innerHTML = "";
  		    document.getElementById('nombre').classList.add('campo_validado');
          document.getElementById('campo_error_nombre').innerHTML ="Nombre válido";
          document.getElementById('campo_error_nombre').style.color="green";
    	}
	  }

		// Valido CP
  	function validarPais(){

    		var compruebaLista = document.getElementById('selector').selectedIndex;

    		   //Test comboBox
  	    if(compruebaLista == null || compruebaLista == 0){
  	      
  		   	document.getElementById('campo_error_pais').innerHTML = texto_error();
          document.getElementById('selector').classList.remove('campo_validado'); // Elimina la class marca_errores
  		   	document.getElementById('selector').classList.add('campo_marca_error');	//Añade la class marca errores	
           document.getElementById('campo_error_pais').style.color="red";	
  	
  		}  else {
  			  //document.getElementById('campo_error_pais').innerHTML = "";
  		    document.getElementById('selector').classList.add('campo_validado');
          document.getElementById('campo_error_pais').innerHTML ="País validado";
          document.getElementById('campo_error_pais').style.color="green";
    	
  	    }
	  }

	  // Valido CP
  	function validarCp(){

    		var compruebaCp = document.getElementById("cp").value;
        var compruebaCp2 =  document.getElementById('cp').innerHTML
        compruebaCp2 = document.getElementById("cp").value.length;

  		if (compruebaCp==''|| /^\s+$/.test(compruebaCp)){

  		   	document.getElementById('campo_error_cp').innerHTML = texto_error();
          document.getElementById('cp').classList.remove('campo_validado'); // Elimina la class
  		   	document.getElementById('cp').classList.add('campo_marca_error');	//Añade la class marca errores	
          document.getElementById('campo_error_cp').style.color="red";		
  	
  		} else if (isNaN(compruebaCp)){

  		   	document.getElementById('campo_error_cp').innerHTML = "Debes ingresar solo números";
  		   	document.getElementById('cp').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('cp').classList.add('campo_marca_error'); // Añade la class
          document.getElementById('campo_error_cp').style.color="red";
  	
  		} 

      else if (compruebaCp2<5||compruebaCp2>5){

          document.getElementById('campo_error_cp').innerHTML = "Debes ingresar 5 números";
          document.getElementById('cp').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('cp').classList.add('campo_marca_error'); // Añade la class
          document.getElementById('campo_error_cp').style.color="red";
    
      }
      else {
  			  //document.getElementById('campo_error_cp').innerHTML = "";
  		    document.getElementById('cp').classList.add('campo_validado');
          document.getElementById('campo_error_cp').innerHTML ="CP válido";
          document.getElementById('campo_error_cp').style.color="green";
    	
  	  }
	  }

  	function validarEmail() {

    	var compruebaEmail = document.getElementById("email").value;
    	if (compruebaEmail==''){

 		   	document.getElementById('campo_error_email').innerHTML = texto_error();
        document.getElementById('email').classList.remove('campo_validado'); // Elimina la class
 		   	document.getElementById('email').classList.add('campo_marca_error');	//Añade la class marca errores		
 		   	document.getElementById('campo_error_email').style.color="red";

    	} else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(compruebaEmail)){
    		document.getElementById('campo_error_email').innerHTML ="Debe introducir un email válido";
    		document.getElementById('email').classList.remove('campo_validado'); // Elimina la class
        document.getElementById('email').classList.add('campo_marca_error'); // Añade la class   

    		document.getElementById('campo_error_email').style.color="red";
    	
    	} else {
    		//document.getElementById('campo_error_email').innerHTML = "";
    		document.getElementById('email').classList.add('campo_validado');
    		document.getElementById('campo_error_email').innerHTML ="Email válido";
    		document.getElementById('campo_error_email').style.color="green";
    	}
    }

        //Contador para el textArea
    function validarSexo(){

    var isChecked = document.getElementById('radioButton1').checked;
    
    
    if(!isChecked){
      document.getElementById('campo_error_sexo').innerHTML = "Debes checkear al menos una opción";
      document.getElementById('campo_error_sexo').style.color="red";
    } else {
      document.getElementById('campo_error_sexo').innerHTML ="Sexo validado";
      document.getElementById('campo_error_sexo').style.color="green";
    }
    }
   

    //Contador para el textArea
    function validarIdioma(){

    var isChecked = document.getElementById('checkBox1').checked;
    var isChecked2 = document.getElementById('checkBox2').checked;
    
    if(!isChecked&&!isChecked2){
      document.getElementById('campo_error_idioma').innerHTML = "Debes checkear al menos una opción";
      document.getElementById('campo_error_idioma').style.color="red";
    } else {
      document.getElementById('campo_error_idioma').innerHTML ="Idioma validado";
      document.getElementById('campo_error_idioma').style.color="green";
    }
    }
   

    //Contador para el textArea
    function contador(){
      
      document.getElementById('digitosIntroducidos').innerHTML = document.getElementById("mensaje").value.length;

      var digitosIntroducidos = document.getElementById("mensaje").value.length;
      var contenido_textarea = ""
      
        if (digitosIntroducidos>=241){
          document.getElementById("digitosIntroducidos").style.color = "#ff0000";
           
        } else {
          document.getElementById("digitosIntroducidos").style.color = "green";
         
        }
    }

    // metodo comun para usarlo dentro de varios metodos para mostrar el texto, Debe rellenar este campo...
	  function texto_error(){ 

  	  var texto_error = "Debe rellenar este campo";
  		return texto_error;

	  }


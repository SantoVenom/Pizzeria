/* Define una array vacía llamada nombre_alumno_array para contener el nombre de los alumnos */

var nombre_alumno_array= [];

function submit()
{
    /* Definir un array vacía para mostrar el nombre de los alumnos */

   var ver_alumno_array= [];

    /*Crear Bucle for */
          for (var j = 1; j <= 4; j++) 
    {
        /*Obtener el valor del nombre del alumno según id */
        var nombre_alumno= document.getElementById("nombre_alumno_"+j).value;
        console.log(nombre_alumno);

        /*Poner el valor en el array nombre_alumno_array*/
        nombre_alumno_array.push(nombre_alumno);
    }

    console.log(nombre_alumno_array);

    /* Completar la línea al final con el metodo para medir la lóngitud del nombre */

    var longitud_nombre_alumnos_array =  nombre_alumno_array.length;
    console.log(longitud_nombre_alumnos_array);

    /*Valor iniciar en 0*/
    for (var k = 0; k < longitud_nombre_alumnos_array; k++)     
    {
        /*mostrar la palabra nombre dentro de la etiqueta <h4> y cerrarla al final*/
        ver_alumno_array.push("<h4>NOMBRE - "+ nombre_alumno_array[k] + "</h4>");
        console.log(ver_alumno_array);
    }


    /*Llamar el div con id con comas que está en el html */
    console.log(ver_alumno_array);
    document.getElementById("ver_nombre_con_comas").innerHTML = ver_alumno_array;

    /*Poner al final el metodo .join para ver sin comas que está en el html*/
    var remove_commas = ver_alumno_array.join("");
    console.log(remove_commas);
    /*Llamar el div con id sin comas */
    document.getElementById("ver_nombre_sin_comas").innerHTML = remove_commas;


    document.getElementById("botón_enviar").style.display = "none";

}

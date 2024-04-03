// Vector para almacenar los enlaces de las imágenes
var enlacesImagenes = [];
// Lista para almacenar los nombres de las películas
var nombresPeliculas = [];
var contador=1;
function agregarPelicula() {
    // Obtener el enlace de la película ingresado por el usuario
    var enlacePelicula = document.getElementById("pelicula").value;

    // Verificar si el enlace es de una imagen
    if (enlacePelicula.endsWith(".jpg") || enlacePelicula.endsWith(".jpeg") || enlacePelicula.endsWith(".png") || enlacePelicula.endsWith(".gif")) {
        // Actualizar el atributo src de la imagen dentro del contenedor peliculas-caja
        var peliculaImagen = document.querySelector(".peliculas-caja .pelicula");
        var nombrePelicula = document.querySelector(".nombrePelicula")
        nombrePelicula.textContent="Nombre de la Pelicula"
        peliculaImagen.src = enlacePelicula;
        enlacesImagenes.push(enlacePelicula);
        nombresPeliculas.push("Nombre de la Pelicula");
        contador=contador+1;
        // Limpiar el campo de entrada
        document.getElementById("pelicula").value = "";

        // Incrementar el contador de películas
    console.log("Cantidad de películas: " + nombresPeliculas.length);

    // Mostrar los valores de los vectores en la consola
    console.log("Valores del vector enlacesImagenes:");
    enlacesImagenes.forEach(function(valor, indice) {
        console.log("Índice: " + indice + ", Valor: " + valor);
    });

    console.log("Valores de la lista nombresPeliculas:");
    nombresPeliculas.forEach(function(valor, indice) {
        console.log("Índice: " + indice + ", Valor: " + valor);
    });
    } else {
        // Si el enlace no es de una imagen, mostrar un mensaje de error
        alert("El enlace ingresado no es una imagen válida.");
    }
}

function cambiarNombrePelicula() {
    // Solicitar al usuario que ingrese un nombre para la película
    var nombrePelicula = prompt("Por favor, ingrese el nombre de la película:");
    var peliculaNombre = document.querySelector(".nombrePelicula");
    if (contador > 0) {
            // Eliminar el último nombre de la lista de nombres
            nombresPeliculas.pop();
            // Agregar el nuevo nombre a la lista de nombres
            nombresPeliculas.push(nombrePelicula);
            
            // Mostrar mensaje de éxito
            alert("El nombre de la película se ha actualizado correctamente.");
             // Actualizar el texto del botón con el nombre de la película
            peliculaNombre.textContent = nombrePelicula;
        } 
        else {
            alert("No hay películas agregadas para asignar un nombre.");
        }
    }

    function peliculaDerecha() {
        var peliculaActual = document.querySelector(".peliculas-caja .pelicula");
        var indicePeliculaActual = enlacesImagenes.indexOf(peliculaActual.src);
        var indicePeliculaSiguiente = indicePeliculaActual + 1;
        if (indicePeliculaSiguiente < enlacesImagenes.length && indicePeliculaActual >= 0) {
            peliculaActual.src = enlacesImagenes[indicePeliculaSiguiente]; 
            var nombreActual = document.querySelector(".nombrePelicula");
            nombreActual.textContent = nombresPeliculas[indicePeliculaSiguiente];
        } else {
            alert("No hay más películas hacia la derecha.");
        }
    }
    
    function peliculaIzquierda() {
        var peliculaActual = document.querySelector(".peliculas-caja .pelicula");
        var indicePeliculaActual = enlacesImagenes.indexOf(peliculaActual.src);
        var indicePeliculaAnterior = indicePeliculaActual - 1;
        if (indicePeliculaAnterior >= 0 && indicePeliculaActual >= 0) {
            peliculaActual.src = enlacesImagenes[indicePeliculaAnterior];
            var nombreActual = document.querySelector(".nombrePelicula");
            nombreActual.textContent = nombresPeliculas[indicePeliculaAnterior];
        } else {
            alert("No hay más películas hacia la izquierda.");
        }        
    }
    function eliminarPelicula() {
        var peliculaActual = document.querySelector(".peliculas-caja .pelicula");
        var indicePeliculaActual = enlacesImagenes.indexOf(peliculaActual.src);
    
        if (indicePeliculaActual >= 0) {
            // Eliminar la película del vector de enlaces e nombres
            enlacesImagenes.splice(indicePeliculaActual, 1);
            nombresPeliculas.splice(indicePeliculaActual, 1);
    
            var cantidadPeliculas = enlacesImagenes.length;
    
            if (cantidadPeliculas > 0) {
                // Mostrar la siguiente película si existe
                if (indicePeliculaActual < cantidadPeliculas) {
                    peliculaActual.src = enlacesImagenes[indicePeliculaActual];
                    var nombreActual = document.querySelector(".nombrePelicula");
                    nombreActual.textContent = nombresPeliculas[indicePeliculaActual];
                } else {
                    // Si no hay una siguiente película, mostrar la anterior
                    peliculaActual.src = enlacesImagenes[indicePeliculaActual - 1];
                    var nombreActual = document.querySelector(".nombrePelicula");
                    nombreActual.textContent = nombresPeliculas[indicePeliculaActual - 1];
                }
            } else {
                // Si no quedan películas, borrar la imagen y el nombre
                peliculaActual.src = "";
                var nombreActual = document.querySelector(".nombrePelicula");
                nombreActual.textContent = "";
            }
            
            alert("Película eliminada correctamente.");
        } else {
            alert("No se encontró la Película.");
        }
    }
        
    

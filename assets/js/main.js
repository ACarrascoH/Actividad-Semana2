$(document).ready(function () { })


function getPeliculas() {
    console.log("ejecución func. getPeliculaAleatoria")
    $.ajax({
        url: "https://www.codigo-alfa.cl/aglo/Tester/listasPeliculas",
        method: "GET",
        success: function (data) {
            console.log(data)
            const lista = data.peliculas;
            console.log(lista)
            let cadenaOption = '<option>Listado Película</option>';
            lista.map((data, index) => {
                console.log(data, index)

                cadenaOption += '<option value="' + data.id + '">' + data.title + '</option>';
            })

            $("#peliculas").html(cadenaOption);
        }
    })

}

function getPeliculaAleatoria() {
    console.log("ejecución func. getPeliculaAleatoria")
    $.ajax({
        url: "https://www.codigo-alfa.cl/aglo/Tester/peliculaAleatoria",
        method: "GET",
        success: function (data) {
            $("#imagen").html(
                '<img src="assets/images/pelicula.png" width="100" height="100">'
            )
            $("#pelicula").html(
                '<h4>' + data.pelicula.title + '</h4>' +
                '<h5>' + data.pelicula.year + ' - ' +data.pelicula.genre + '</h5>'
            )

        }
    })

}

function getPelicula(idPelicula) {
    console.log("ejecución func. getPelicula")
    $.ajax({
        url: "https://www.codigo-alfa.cl/aglo/Tester/listasPeliculas",
        method: "GET",
        success: function (data) {
            const peli=data.peliculas[idPelicula - 1];
            $("#imagen2").html(
                '<img src="assets/images/film.png" width="200" height="100">'
            )
            $("#pelicula2").html(
                '<h4>' + peli.title + '</h4>' +
                '<h5>' + peli.year +' - '+ peli.genre+'</h5>'
            )

        }
    })

}


getPeliculas()
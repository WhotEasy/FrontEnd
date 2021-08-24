var canciones = [];
var song = [];
var nombre;
var filtro;


$(document).ready(function() {
    // Funcion de filtro
    const filtrar = () => {
        var html = "";
        var nombre_input = $("#bus").val().toLowerCase();

        $.ajax({
            url: "datos.json"
        }).done(function(resultado) {
            canciones = resultado.canciones;

            for (let cancion of canciones) {
                let nombres = cancion.nombre.toLowerCase();
                // filtro
                if (nombres.indexOf(nombre_input) !== -1) {
                    html += `
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <div class="card">
                                <div class="card-header text-center">
                                    <img class="logo3" src=./imagenes/icon_${cancion.icono}.svg />
                                </div> 
                                <div class="card-body text-center">
                                    <h5 class="card-title">${cancion.nombre}</h5>
                                    <p class="card-text"><audio src="./canciones/${cancion.ruta}" preload="none" controls></audio></p>
                                </div>
                            </div>
                            <hr>
                        </div>  
                      `
                    document.getElementById("songs").innerHTML = html
                }
            }
        });
    }

    // Llamma a la función
    $("#bus").keyup(filtrar);

    // Trigger Bus
    $("#bus").trigger("keyup");
});
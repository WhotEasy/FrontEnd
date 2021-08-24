var canciones = [];
var song = [];
let pos = 0;
let numElementos = 3;
$(document).ready(function() {

    //Carga los datos que estan en el JSON (info.json) usando AJAX
    $.ajax({
        url: "datos.json"
    }).done(function(resultado) {

        //Guarda el resultado en variables
        canciones = resultado.canciones;
        //Ordenar de mayor a menor reproducciones
        song = canciones.sort(function(a, b) {
            if (a.reproducciones < b.reproducciones) {
                return 1;
            }
            if (a.reproducciones > b.reproducciones) {
                return -1;
            }
            // igual a 0
            return 0;
        });
        //Extrae tres dos cacniones
        let tresSong = song.splice(pos, numElementos);

        //Crea un string que contenga el HTML que describe el detalle del evento
        var html = ""

        //Recorre el arreglo y concatena el HTML para cada evento
        for (var j = 0; j < tresSong.length; j++) {
            var getUrl = window.location;
            var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
            var link = baseUrl + '/detalle.html' + '?id=' + tresSong[j].id
            html += `
        <div class="row justify-content-center">
            <div class="col-md-12 pb-1">
                <div class="bg-white">
                    <div class="row">
                        <div class="col-md-6 d-none d-md-block "><a href="${link}">${tresSong[j].nombre}</a></div>
                        <div class="d-col-block col-sm-block col-md-6 "><audio src=./canciones/${tresSong[j].ruta} preload="none" controls></audio></div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
                `
        }

        //Modifica el DOM agregando el html generado
        document.getElementById("top3").innerHTML = html
    })
});
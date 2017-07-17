var dulce_aux_arrastrado = "";
var dulce_aux_contenedor = "";
var dulce_arrastrado = "";
var imagen_arrastrada = "";
var dulce_contenedor = "";
var imagen_contenedor ="";
var left_dulce_arrastrado = 0;
var top_dulce_arrastrado = 0;
var left_dulce_contenedor = 0;
var top_dulce_contenedor = 0;

var indice_array = 0;
var vector_NRO_Id = new Array(49);
var vector_NRO_Dulce = new Array(49);
var vector_Aux_NRO_Id = new Array(7);
var vector_Aux_NRO_Dulce = new Array(7);

var COINCIDENCIAS_Id = new Array(49);
var COINCIDENCIAS_Dulce = new Array(49);


var posL_dulce_arrastrado = 0;
var posT_dulce_arrastrado = 0;

var movimientos = 0;
var puntos = 0;

var fila_arrastrable = "";
var orden_arrastrable = 0;
var fila_contenedor = "";
var orden_contenedor = 0;


//CARGO LOS ARRAYS con ID y NRO dulce
var cargar_vector = function(){
    
    var indice_array = 0;
    for( var i = 1 ; i <= 7 ; i++){
        for( var j = 1 ; j <= 7 ; j++) {
            var nro_imagen_dulce = $('#' + (i) + (j)).attr("src");
            var i_car = i;
            var j_car = j;
            i_car = i_car.toString();
            j_car = j_car.toString();
            
            vector_NRO_Dulce[indice_array] = nro_imagen_dulce.substr(6,1);
            vector_NRO_Id[indice_array] = i_car + j_car;
            
            indice_array = indice_array + 1;
        }
    }
    
}

//Fin de la carga de los arrays

//VERIFICACION DE ACIERTOS
var verificar_aciertos = function(){
    var indice_array = 0;
    var columna_actual = "1";
    var fila_actual = "1";
    
    
    //BUSCO COINCIDENCIAS x COLUMNA
    var indice_array = 0;
    var indice_aux = 0;
    var aciertos = 0;
    var dulce_evaluar = "";
    
    for( var j = 0 ; j <= 7  ; j++) {
        vector_Aux_NRO_Dulce[j] = "";
        vector_Aux_NRO_Id[j] = "";
    }
    
    for( var i = 0 ; i < 49 ; i++) {
        if (i = 0) {
            dulce_evaluar = vector_NRO_Dulce[i];
            columna_actual = vector_NRO_Id[i].substr(0,1);
            aciertos = 1;
            vector_Aux_NRO_Dulce[indice_aux] = vector_NRO_Dulce[i];
            vector_Aux_NRO_Id[indice_aux] = vector_NRO_Id[i];
            indice_aux = indice_aux + 1;
        } else {
            if (vector_NRO_Id[i].substr(0,1) != columna_actual) {
                if (aciertos >= 3) {
                    aciertos = aciertos * 10;
                    $('#score-text').text(aciertos);
                    dulce_evaluar = vector_NRO_Dulce[i];
                    columna_actual = vector_NRO_Id[i].substr(0,1);
                    aciertos = 1;
                    
                    //Paso de Vector auxiliar a vector coincidencias y borro vector auxiliar
                    indice_aux = 0;
                    for( var j = 0 ; j <= 7  ; j++) {
                        if (vector_Aux_NRO_Id[j] != "") {
                            COINCIDENCIAS_Id[indice_array] = vector_Aux_NRO_Id[indice_aux];
                            COINCIDENCIAS_Dulce[indice_array] = vector_Aux_NRO_Dulce[indice_aux];    
                            indice_array = indice_array + 1;    
                            indice_aux = indice_aux + 1;
                        }
                    }
                    //Borro vector auxiliar
                    for( var j = 0 ; j <= 7  ; j++) {
                        vector_Aux_NRO_Dulce[j] = "";
                        vector_Aux_NRO_Id[j] = "";
                    }
                    indice_aux = 0;
                    //Fin de traspaso y borrado del vector auxiliar
                    
                }
            } else {
                vector_Aux_NRO_Dulce[indice_aux] = vector_NRO_Dulce[i];
                vector_Aux_NRO_Id[indice_aux] = vector_NRO_Id[i];
                aciertos = aciertos + 1;
                indice_aux = indice_aux + 1;
            }
        }    
    }
    //FIN DE BUSQUEDA DE COINCIDENCIAS COLUMNA 
    
    
    
}
//FIN DE VERIFICACION DE ACIERTOS

$( document ).ready(function() {

//FILAS --- CONTENEDORAS DE TODAS LAS IMAGENES
    var o = 1;
	for( var i = 0 ; i < 7 ; i++) {
        $('<div class="filas fila_1' + (i+1) + '"></div>').appendTo('.col-1');

        $('<div class="filas fila_2' + (i+1) + '"></div>').appendTo('.col-2'); 
        
        $('<div class="filas fila_3' + (i+1) + '"></div>').appendTo('.col-3'); 
        
        $('<div class="filas fila_4' + (i+1) + '"></div>').appendTo('.col-4'); 
        
        $('<div class="filas fila_5' + (i+1) + '"></div>').appendTo('.col-5'); 
        
        $('<div class="filas fila_6' + (i+1) + '"></div>').appendTo('.col-6'); 
        
        $('<div class="filas fila_7' + (i+1) + '"></div>').appendTo('.col-7'); 
        
    }
    $('.filas').css('margin-top',0);
    $('.filas').css('margin-left',5);
    
	

//CELDAS ----  CREO TODA LA MATRIZ DE DULCES
    for( var i = 0 ; i < 7 ; i++){
        for( var j = 0 ; j < 7 ; j++) {
            var numero = Math.floor((Math.random() * 4) + 1); 
            $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + ' src=image/' + numero + '.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1));
        }
    }
    
//CARGO VECTOR PARA VERIFICAR ACIERTOS
    cargar_vector();
//VERIFICO SI HAY ACIERTOS
    verificar_aciertos();
    
//CAMBIA COLOR DEL TITULO
    function cambiar_color(){
        if ($('h1').css("color") == "rgb(255, 255, 255)"){
            $('h1').css("color", "#DCFF0E");
        } else {
            $('h1').css("color", "#FFFFFF");
        }   
    }

    var titulo_juego = setInterval(function(){
            cambiar_color();
    }, 1000);
//FIN CAMBIA COLOR DEL TITULO
$('.filas').mousedown(function(){    
//MANEJO DE LAS IMAGENES ---------------------------
    if ($('.btn-reinicio').text() == "Iniciar"){
        return;
    }
    $('.dulces').draggable( {
        containment: '.panel-tablero',
        cursor: 'move'

    } );
    $(".dulces").droppable({
       accept: ".dulces",
       drop: function( evento, ui ) {

            dulce_arrastrado = ui.draggable.attr("id");
            imagen_arrastrada = ui.draggable.attr("src");
            dulce_contenedor = $(this).attr("id");
            imagen_contenedor = $(this).attr("src");

            var coordenadas_A = $(ui.draggable).offset();
            var coordenadas_C = $(this).offset();

            var columna_A = dulce_arrastrado[0];
            var columna_C = dulce_contenedor[0];

            /*var coordenadas_A_izq = parseInt(coordenadas_A.left);
            var coordenadas_A_top = parseInt(coordenadas_A.top);

            var coordenadas_C_izq = parseInt(coordenadas_C.left);
            var coordenadas_C_top = parseInt(coordenadas_C.top);*/

            dulce_aux_arrastrado = dulce_arrastrado;
            dulce_aux_contenedor = dulce_contenedor;

             $('#' + dulce_arrastrado).detach();
            $('<img class="dulces ui-draggable ui-draggable-handle ui-droppable"' + 'id=' + dulce_aux_arrastrado + ' src=' + imagen_contenedor + ' width=82%">').appendTo('.col-' + columna_A + ' .fila_' + dulce_arrastrado);

            $('#' + dulce_contenedor).detach();
            $('<img class="dulces ui-draggable ui-draggable-handle ui-droppable"' + 'id=' + dulce_aux_contenedor + ' src=' + imagen_arrastrada + ' width=82%">').appendTo('.col-' + columna_C + ' .fila_' + dulce_contenedor);

            $('.dulces').draggable({containment: '.panel-tablero', cursor: 'move'});
            
            movimientos = movimientos +1;
            $('#movimientos-text').text(movimientos);
           
            
       }
    });
//FIN DE MANEJO DE IMAGENES ------------------------
});
//EL JUEGO ---------------------------------------------------------------------------------------------
    $(".btn-reinicio").click(function(){
        //CHEQUEO QUE TEXTO CONTIENE EL BOTON
        if ($('.btn-reinicio').text() == "Iniciar"){
            //INICIO DEL JUEGO --------------------------------------------------------------------------
            var minutos_txt = "01";
            var segundos_txt = "59";
            var minutos = 1;
            var segundos = 59;
            
            $('.btn-reinicio').text("Reiniciar")
            $('.dulces').draggable( {
                containment: '.panel-tablero',
                cursor: 'move'

            } );
            
            cargar_vector();
            
            //RELOJ
            function cambiar_reloj(){
                if (segundos != 0){
                    $('#timer').text(minutos_txt + ":" + segundos_txt);
                    segundos = segundos -1;
                    if (segundos <= 9){
                        segundos_txt = "0" + segundos.toString();
                    } else {
                        segundos_txt = segundos.toString();
                    }
                } else {
                    if (minutos == 1){
                        $('#timer').text(minutos_txt + ":" + segundos_txt);
                        minutos = 0;
                        segundos = 59;
                        segundos_txt = "59";
                        minutos_txt = "00";
                    } else {
                        if (segundos > 0){ 
                            $('#timer').text(minutos_txt + ":" + segundos_txt);
                            minutos = 0;
                            segundos = segundos - 1;
                            if (segundos <= 9){
                                segundos_txt = "0" + segundos.toString();
                            } else {
                                segundos_txt = segundos.toString();
                            } 
                            minutos_txt = "00"; 
                        } else {
                            $('#timer').text("00:00");
                            clearInterval(titulo_juego);
                            //Fin del Juego
                        }
                    }
                }   
            }
            var titulo_juego = setInterval(function(){
                    cambiar_reloj();
            }, 1000);
            //FIN RELOJ
            
        } else {
            //REINICIAR EL JUEGO Y CARGAR LA PAGINA NUEVAMENTE
            $('.btn-reinicio').text("Iniciar");
            location.reload();
        }
        //FIN DEL MANEJO DEL BOTON INICIO Y REINICIAR ----------------------------------------------------
        
        
    });
//FIN DEL JUEGO ------------------------------------------------------------------------------------------
    
    
}); //ready jquery


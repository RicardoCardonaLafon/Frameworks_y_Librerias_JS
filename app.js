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
var vector_dulces =new Array();
var vector_auxiliar = new Array();

var posL_dulce_arrastrado = 0;
var posT_dulce_arrastrado = 0;

var movimientos = 0;
var aciertos = 0;
var puntos = 0;

var z = 0;
var x = 0;

var fila_arrastrable = "";
var orden_arrastrable = 0;
var fila_contenedor = "";
var orden_contenedor = 0;

//FUNCION PARA ORDENAR VECTOR_DULCES
function ordenar_dulces_Filas(a,b) {
  if(a.Id_Fila < b.Id_Fila) {
    return 1;
  } else if (a > b) {
    return -1;
  }
  return 0;
}
//FIN DE ORDENACION x Filas VECTOR_DULCES

//FUNCION PARA ORDENAR VECTOR_DULCES
function ordenar_dulces_Columnas(a,b){
  if(a.Id_Columna < b.Id_Columna) {
    return 1;
  } else if (a > b) {
    return -1;
  }
  return 0;
}

//FIN DE ORDENACION x Columnas VECTOR_DULCES


//PRIMERA BUSQUEDA DE COINCIDENCIAS CUANDO ES CLIC EN EL BOTON INICIAR--------------------------------------
function Busqueda_Coincidencias() {
 
    var puntos = 0;
    var cantidad_coincidencias = 0;
   
    //ORDENO EL VECTOR POR COLUMNA
    vector_dulces.sort(ordenar_dulces_Columnas);
    
    
    var imagen_anterior = vector_dulces[0].Id_Imagen;
    var columna_anterior = vector_dulces[0].Id_Columna;
    var fila_anterior = vector_dulces[0].Id_Fila;
    
    var vector_auxiliar = new Array();
    
    var i_aux = 0;
    
    var cant = 1;
    
    vector_auxiliar.push(i);         
    
    for (var i = 1 ; i < 49 ; i++) {     
            
            if (vector_dulces[i].Id_Columna == columna_anterior) {
                //El Dulce alctual y el anterior están en la misma columna 
                if (vector_dulces[i].Id_Imagen == imagen_anterior) {
                    cant = cant + 1;
                    vector_auxiliar.push(i); 
                } else {
                    if (cant >=3){                
                        z = 0;
                        while (z < vector_auxiliar.length) {
                            if (typeof x === 'undefined') {
                                z = 0;   
                            }
                            if (typeof x === 'undefined') {
                                x = parseInt(vector_auxiliar[z]);    
                            } else { 
                                x = parseInt(vector_auxiliar[z]);
                            }
                            if (!(isNaN(x))) {
                                if (x < 49 ){
                                    vector_dulces[x].Para_Borrar = "S";
                                }    
                            }    
                            z = z + 1;   
                        }
                    } 
                    vector_auxiliar.length = 0;
                    cant = 1;   
                    vector_auxiliar.push(i); 
                    imagen_anterior = vector_dulces[i].Id_Imagen;
                    columna_anterior = vector_dulces[i].Id_Columna;
                    fila_anterior = vector_dulces[i].Id_Fila;  
                }
                
            } 
            if (vector_dulces[i].Id_Columna != columna_anterior) {
               if (cant >=3){                
                    z = 0;
                    while (z < vector_auxiliar.length) {
                        if (typeof x === 'undefined') {
                            z = 0;   
                        }
                        if (typeof x === 'undefined') {
                            x = parseInt(vector_auxiliar[z]);    
                        } else { 
                            x = parseInt(vector_auxiliar[z]);
                        }
                        if (!(isNaN(x))) {
                            if (x < 49 ){
                                vector_dulces[x].Para_Borrar = "S";
                            }    
                        }
                        z = z + 1;   
                    }
                } 
                vector_auxiliar.length = 0;
                cant = 1;   
                vector_auxiliar.push(i); 
                imagen_anterior = vector_dulces[i].Id_Imagen;
                columna_anterior = vector_dulces[i].Id_Columna;
                fila_anterior = vector_dulces[i].Id_Fila;  
            }
            
             
             
        //FIN DE TRATAMIENTO DE LA COLUMNA
        
    } //Fin del For recorrido de array dulces
    //Verifico si hay aciertos en la última búsqueda...
    if (cant >=3){                
        z = 0;
        while (z < vector_auxiliar.length) {
            if (typeof x === 'undefined') {
                z = 0;   
            }
            if (typeof x === 'undefined') {
                x = parseInt(vector_auxiliar[z]);    
            } else { 
                x = parseInt(vector_auxiliar[z]);
            }
            if (!(isNaN(x))) {
                if (x < 49 ){
                    vector_dulces[x].Para_Borrar = "S";
                }    
            }
            z = z + 1;   
        }
    } 
    //FIN DEL RECORRIDO DEL VECTOR DULCES X   C O L U M N A S===============================================================
  
    
    //BUSCO EN LAS FILAS =============================================================
    //ORDENO EL VECTOR POR FILA
    
    vector_dulces.sort(ordenar_dulces_Filas);
    var imagen_anterior = vector_dulces[0].Id_Imagen;
    var columna_anterior = vector_dulces[0].Id_Columna;
    var fila_anterior = vector_dulces[0].Id_Fila;
    
    var vector_auxiliar = new Array();
    
    var i_aux = 0;
    
    var cant = 1;
    
    vector_auxiliar.push(i);         
    
    for (var i = 1 ; i < 49 ; i++) {     
            
            if (vector_dulces[i].Id_Fila == fila_anterior) {
                //El Dulce actual y el anterior están en la misma columna 
                if (vector_dulces[i].Id_Imagen == imagen_anterior) {
                    cant = cant + 1;
                    vector_auxiliar.push(i); 
                } else {
                    if (cant >=3){                
                        z = 0;
                        while (z < vector_auxiliar.length) {
                            if (typeof x === 'undefined') {
                                z = 0;   
                            }
                            if (typeof x === 'undefined') {
                                x = parseInt(vector_auxiliar[z]);    
                            } else { 
                                x = parseInt(vector_auxiliar[z]);
                            }
                            if (!(isNaN(x))) {
                                if (x < 49 ){
                                    vector_dulces[x].Para_Borrar = "S";
                                }    
                            }
                            z = z + 1;   
                        }
                    } 
                    vector_auxiliar.length = 0;
                    cant = 1;   
                    vector_auxiliar.push(i); 
                    imagen_anterior = vector_dulces[i].Id_Imagen;
                    columna_anterior = vector_dulces[i].Id_Columna;
                    fila_anterior = vector_dulces[i].Id_Fila;  
                }
                
            } 
            if (vector_dulces[i].Id_Fila != fila_anterior) {
               if (cant >=3){                
                    z = 0;
                    while (z < vector_auxiliar.length) {
                        if (typeof x === 'undefined') {
                            z = 0;   
                        }
                        if (typeof x === 'undefined') {
                            x = parseInt(vector_auxiliar[z]);    
                        } else { 
                            x = parseInt(vector_auxiliar[z]);
                        }
                        if (!(isNaN(x))) {
                            if (x < 49 ){
                                vector_dulces[x].Para_Borrar = "S";
                            }    
                            
                        }
                        z = z + 1;   
                    }
                } 
                vector_auxiliar.length = 0;
                cant = 1;   
                vector_auxiliar.push(i); 
                imagen_anterior = vector_dulces[i].Id_Imagen;
                columna_anterior = vector_dulces[i].Id_Columna;
                fila_anterior = vector_dulces[i].Id_Fila;  
            }
            
             
             
        //FIN DE TRATAMIENTO DE LA COLUMNA
        
    } //Fin del For recorrido de array dulces
    //Verifico si hay aciertos en la última búsqueda...
    if (cant >=3){                
        z = 0;
        while (z < vector_auxiliar.length) {
            if (typeof x === 'undefined') {
                z = 0;   
            }
            if (typeof x === 'undefined') {
                x = parseInt(vector_auxiliar[z]);    
            } else { 
                x = parseInt(vector_auxiliar[z]);
            }
            if (!(isNaN(x))) {
                if (x < 49 ){
                    vector_dulces[x].Para_Borrar = "S";
                }    
            }
            z = z + 1;   
        }
    } 
    
    //FIN DEL RECORRIDO DEL VECTOR DULCES x F I L A S===============================================================
    
    //Coincidencia en última posición
    if (cant >= 3) {
        z = 0;
        while (z < vector_auxiliar.length) {
            if (typeof x === 'undefined') {
                z = 0;   
            }
            if (typeof x === 'undefined') {
                x = parseInt(vector_auxiliar[z]);    
            } else { 
                x = parseInt(vector_auxiliar[z]);
            }
            if (!(isNaN(x))) {
               if (x < 49 ){
                    vector_dulces[x].Para_Borrar = "S";
                }    
            }
            z = z + 1;   
        }
    }    
    /*var dulce_efecto = "";
    function Efecto_Dulce(){
            if (vector_dulces[i].Para_Borrar == "S"){
                if ($('#' + vector_dulces[i].Id_Tabla).css("width") == "100%"){
                    $('#' + vector_dulces[i].Id_Tabla).css("width", "50%");
                } else {
                    $('#' + vector_dulces[i].Id_Tabla).css("widthr", "100%");
                }   
                veces = veces + 1;
                if (veces >=5){
                    clearInterval(var_tiempo);
                } else {
                //var_tiempo = setInterval(Efecto_Dulce(),500)
                }
            }        
        }
    for(var i = 0 ; i < 49 ; i++) {
        
            if (vector_dulces[i].Para_Borrar == "S"){
                dulce_efecto = $('#' + vector_dulces[i].Id_Tabla);
                var_tiempo = setInterval(Efecto_Dulce(),1000)
            }        
        
    }
    var var_tiempo = setInterval(function(){
        Efecto_Dulce();
    }, 1000);*/
    
    //Borro las coincidencias y hago efecto--------------------------------------------------------------
    puntos = 0;
    var veces = 0;
    var var_tiempo = "";
    for (var i = 0 ; i < 49 ; i++) {
        if (vector_dulces[i].Para_Borrar == "S"){
            var numero = Math.floor((Math.random() * 4) + 1); 
            var columna = vector_dulces[i].Id_Tabla.substr(0,1);        
            var fila = vector_dulces[i].Id_Tabla.substr(1,1);
            var id_de_celda = vector_dulces[i].Id_Tabla;
            
    
            $('#' + vector_dulces[i].Id_Tabla).attr('style', 'display: none');
            $('#' + columna + fila + numero).attr('style', 'display: inline; position: relative');
            
            vector_dulces[i].Id_Tabla = columna + fila + numero;
            vector_dulces[i].Id_Imagen = numero;
            vector_dulces[i].Para_Borrar = "N";
            
            puntos = puntos + 1;
        }
    }
    //Modifico los puntos alcanzados
    puntos = puntos * 10 + parseInt($('#score-text').text());
    $('#score-text').text(puntos);
    
    
    
    
}
//FIN DE LA BUSQUEDA DE COINCIDENCIAS ---------------------------------------------------------


//========================================================================================================================================
// DOCUMENT READY!!! 
//========================================================================================================================================

$( document ).ready(function() {

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
/*$("#ejemplo2").change(function(){
            
});    
function pantalla_final(){
    $('<h3 style="font-family: gameFont; color: #DCFF0E;">Juego Terminado</h3>').appendTo('.main-titulo');
    $('.panel-score').css({"width": "80%", "display": "flex", "flex-flow" : "column nowrap", "justify-content" : "space-between"}); 
    $('.panel-tablero').remove();
    $('.time').remove();
    
}
$('#timer').change(pantalla_final()){
    
}    
var final_juego = setTimeout(function(){
    if ($('#timer').text() == "00:00"){
        pantalla_final();    
    }
}, 2500);
    
*/
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

	
var indice_array = -1;
//CELDAS ----  CREO TODA LA MATRIZ DE DULCES
for( var i = 0 ; i < 7 ; i++){
    for( var j = 0 ; j < 7 ; j++) {
        var numero = Math.floor((Math.random() * 4) + 1); 
        var i_car = i+1;
        var j_car = j+1;
        var numero_car = numero;
        i_car = i_car.toString();
        j_car = j_car.toString();
        numero_car = numero_car.toString();
        indice_array = indice_array + 1;
        //$('<img class="dulces"' + 'id=' + (i+1) + (j+1) + ' src=image/' + numero + '.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1));
        
        switch (numero){
            case 1:            
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '1' + ' src=image/' + numero + '.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1));
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '2' + ' src=image/2.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1)).hide();
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '3' + ' src=image/3.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1)).hide();
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '4' + ' src=image/4.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1)).hide();
                //CARGO COLUMNA, FILA y DULCE al vector
                vector_dulces.push({
                    Id_Tabla: i_car + j_car + numero_car,
                    Id_Columna: i,
                    Id_Fila: j,
                    Id_Imagen:numero,
                    Para_Borrar:"N"
                }); 
                break;             
            case 2:
                
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '1' + ' src=image/1.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1)).hide();
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '2' + ' src=image/' + numero + '.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1));
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '3' + ' src=image/3.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1)).hide();
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '4' + ' src=image/4.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1)).hide();
                //CARGO COLUMNA, FILA y DULCE al vector
                vector_dulces.push({
                    Id_Tabla: i_car + j_car + numero_car,
                    Id_Columna: i,
                    Id_Fila: j,
                    Id_Imagen:numero,
                    Para_Borrar:"N"
                }); 
                break;
            case 3:
                
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '1' + ' src=image/1.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1)).hide();
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '2' + ' src=image/2.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1)).hide();
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '3' + ' src=image/' + numero + '.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1));
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '4' + ' src=image/4.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1)).hide();
                //CARGO COLUMNA, FILA y DULCE al vector
                vector_dulces.push({
                    Id_Tabla: i_car + j_car + numero_car,
                    Id_Columna: i,
                    Id_Fila: j,
                    Id_Imagen:numero,
                    Para_Borrar:"N"
                }); 
                break;
            case 4:
                
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '1' + ' src=image/1.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1)).hide();
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '2' + ' src=image/2.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1)).hide();
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '3' + ' src=image/3.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1)).hide();
                $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + '4' + ' src=image/' + numero + '.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1));
                //CARGO COLUMNA, FILA y DULCE al vector
                vector_dulces.push({
                    Id_Tabla: i_car + j_car + numero_car,
                    Id_Columna: i,
                    Id_Fila: j,
                    Id_Imagen:numero,
                    Para_Borrar:"N"
                }); 
                break;
        }
        
    }
}

vector_dulces.sort(ordenar_dulces_Columnas);    
    


    
            
//CONTROL DE MOVIMIENTOS DE DULCES********************************************************
$('.filas').mousedown(function(){    
//MANEJO DE LAS IMAGENES ---------------------------
    if ($('.btn-reinicio').text() == "Iniciar"){
        return;
    }
    
    $('.dulces').draggable({
        containment: '.panel-tablero',
        cursor: 'move',
        revert: true

    });
    
    $('.dulces').droppable({
       accept: '.dulces',
       drop: function( evento, ui ) {
            var dulce_arrastrado = ui.draggable.attr("id");
            var imagen_arrastrada = ui.draggable.attr("src");
            var dulce_contenedor = $(this).attr("id");
            var imagen_contenedor = $(this).attr("src");

            var coordenadas_A = $(ui.draggable).offset();
            var coordenadas_C = $(this).offset();
            
            var coordenada_L = ui.position.left;
            var coordenada_T = ui.position.top;
            

            var columna_A = dulce_arrastrado[0];
            var columna_C = dulce_contenedor[0];
           
            var nro_img_arrastrada = imagen_arrastrada.substr(6,1);
            var nro_img_contenedor = imagen_contenedor.substr(6,1);

            
            //Saco Fila y Columna
            var dulce_aux_arrastrado = dulce_arrastrado.substr(0,2);
            var dulce_aux_contenedor = dulce_contenedor.substr(0,2);
           
            if (dulce_arrastrado.substr(0,1) != dulce_contenedor.substr(0,1)) {
                //Columna Diferente
                if (dulce_arrastrado.substr(1,1) != dulce_contenedor.substr(1,1)) {
                    //Fila Diferente
                    return;
                } else {
                    //Columna Diferente e Igual fila
                    if (Math.abs(dulce_arrastrado.substr(0,1) - dulce_contenedor.substr(0,1)) != 1){
                        //Pero separados mas de un casillero
                        return;
                    }    
                }
            } else { 
                //Misma Columna y distinta fila
                if (Math.abs(dulce_arrastrado.substr(1,1) - dulce_contenedor.substr(1,1)) != 1){
                    //Pero separados mas de un casillero
                    return;
                } 
                
            }
            
            $('#' + dulce_arrastrado).attr('style', 'display: none');
            $('#' + dulce_aux_arrastrado + nro_img_contenedor).attr('style', 'display: inline; position: relative');
            $('#' + dulce_contenedor).attr('style', 'display: none');
            $('#' + dulce_aux_contenedor + nro_img_arrastrada).attr('style', 'display: inline; position: relative');
            
           
            movimientos = movimientos +1;
            $('#movimientos-text').text(movimientos);

            for(var i = 0 ; i < 49 ; i++){

                if (vector_dulces[i].Id_Tabla == dulce_arrastrado){
                    vector_dulces[i].Id_Tabla = dulce_aux_arrastrado + nro_img_contenedor;
                    vector_dulces[i].Id_Imagen = nro_img_contenedor;
                    vector_dulces[i].Para_Borrar = "N";
                }

                if (vector_dulces[i].Id_Tabla == dulce_contenedor) {
                    vector_dulces[i].Id_Tabla = dulce_aux_contenedor + nro_img_arrastrada;
                    vector_dulces[i].Id_Imagen = nro_img_arrastrada; 
                    vector_dulces[i].Para_Borrar = "N";
                }    

            }

            Busqueda_Coincidencias();
                
       }
    });
//FIN DE MANEJO DE IMAGENES ------------------------
});
//FIN DE CONTROL DE MOVIMIENTOS DE DULCES*************************************************

//EL JUEGO COMIENZA==================================================================================================================================
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

        }); 

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
                        clearInterval(contenido_reloj);
                        //Fin del Juego
                        if ($('#timer').text("00:00")){
                            $('<h3 style="font-family: gameFont; color: #DCFF0E;">Juego Terminado</h3>').appendTo('.main-titulo');
                            $('.panel-score').css({"width": "80%", "display": "flex", "flex-flow" : "column nowrap", "justify-content" : "space-between"}); 
                            $('.panel-tablero').remove();
                            $('.time').remove();
                        }
                        
                    }
                }
            }   
        }
        
        var contenido_reloj = setInterval(function(){
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
    
    
}); 
//========================================================================================================================================
//FIN DE DOCUMENT READY
//========================================================================================================================================

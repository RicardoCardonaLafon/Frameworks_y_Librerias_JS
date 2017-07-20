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
var vector_dulces =[];

var vector_NRO_Dulce = new Array(49);
var vector_Aux_NRO_Id = new Array(7);
var vector_Aux_NRO_Dulce = new Array(7);

var COINCIDENCIAS_Id = new Array(49);
var COINCIDENCIAS_Dulce = new Array(49);


var posL_dulce_arrastrado = 0;
var posT_dulce_arrastrado = 0;

var movimientos = 0;
var aciertos = 0;
var puntos = 0;

var fila_arrastrable = "";
var orden_arrastrable = 0;
var fila_contenedor = "";
var orden_contenedor = 0;

//FUNCION PARA ORDENAR VECTOR_DULCES
function ordenar_dulces_Filas(a,b){
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
var Primera_Busq_Coincidencias = function(){
 
    var puntos = 0;
    
    
    //ORDENO EL VECTOR POR COLUMNA
    vector_dulces.sort(ordenar_dulces_Columnas);
    
    
    var imagen_actual_dulce = vector_dulces[0].Id_Imagen;
    var columna_anterior = vector_dulces[0].Id_Columna;
    var fila_anterior = 0;
    
    var vector_auxiliar = new Array();
    
    var i_aux = 0;
    
    var cant = 0;
    
    for( var i = 0 ; i < 49 ; i++){
            vector_auxiliar.push(i);         
            if ((vector_dulces[i].Id_Imagen == imagen_actual_dulce) && (vector_dulces[i].Id_Columna == columna_anterior)){
                //Misma columna y mismo dulce!!! 
                    if (parseInt(vector_dulces[i].Id_Fila - fila_anterior) == 1) {
                        cant = cant + 1; 
                        
                    } else {
                        alert("Nunca Entra por Aca");
                    }                        
            } else { 
                if (vector_dulces[i].Id_Columna != columna_anterior) {
                    //Cambia columna y es el mismo dulce
                    if (cant >= 3){
                        //Cambie de columna y Hay aciertos EN LA COLUMNA ANTERIOR
                        //Marco para borrar las coincidencias
                        //Coloco en vector de ducles S para luego borrar
                        i_aux = vector_auxiliar[vector_auxiliar.length-1];
                        vector_auxiliar.pop();  
                        var z = 0;
                        while (z < vector_auxiliar.length) {
                            vector_dulces[vector_auxiliar[z]].Para_Borrar = "S";
                            z = z + 1;   
                        }
                        //-----------------------------------------------------
                        vector_auxiliar.length = 0;
                        cant = 1;
                        imagen_actual_dulce = vector_dulces[i].Id_Imagen;
                        columna_anterior = vector_dulces[i].Id_Columna;
                        
                    } else {
                        //Cambie de columna y NO HAY ACIERTOS EN LA COLUMNA ANTERIOR
                        i_aux = vector_auxiliar[vector_auxiliar.length-1];
                        vector_auxiliar.length = 0;
                        vector_auxiliar.push(i_aux);
                        cant = 1;
                        imagen_actual_dulce = vector_dulces[i].Id_Imagen;
                        columna_anterior = vector_dulces[i].Id_Columna;

                    }    
                } else {
                    //Misma columna y cambia el dulce dulce
                    if (cant >= 3){
                        //Misma columna y cambia el dulce y HAY aciertos EN LA MISMA COLUMNA
                        //Marco para borrar las coincidencias
                        //Coloco en vector de ducles S para luego borrar
                        i_aux = vector_auxiliar[vector_auxiliar.length-1];
                        vector_auxiliar.pop();  
                        var z = 0;
                        while (z < vector_auxiliar.length) {
                           vector_dulces[vector_auxiliar[z]].Para_Borrar = "S";
                            z = z + 1;   
                        }
                        //------------------------------------------------------
                        vector_auxiliar.length = 0;
                        vector_auxiliar.push(i_aux); 
                        cant = 1;
                        imagen_actual_dulce = vector_dulces[i].Id_Imagen;
                        columna_anterior = vector_dulces[i].Id_Columna;

                    } else {
                        //Misma columna y cambia el dulce y NO HAY aciertos EN LA MISMA COLUMNA 
                        i_aux = vector_auxiliar[vector_auxiliar.length-1];
                        vector_auxiliar.length = 0;
                        vector_auxiliar.push(i_aux);
                        cant = 1;
                        imagen_actual_dulce = vector_dulces[i].Id_Imagen;
                        columna_anterior = vector_dulces[i].Id_Columna;

                        
                    }    
                    
                }
                
            } 
        
                
        
            //Paso a una nueva fila
            fila_anterior = parseInt(vector_dulces[i].Id_Fila);
        
        //FIN DE TRATAMIENTO DE LA COLUMNA
        
        
    } //Fin del For recorrido de array dulces
    
    //Coincidencia en última posición
        if (cant >= 3) {
            var z = 0;
            while (z < vector_auxiliar.length) {
               vector_dulces[vector_auxiliar[z]].Para_Borrar = "S";
                z = z + 1;   
            }
        }    
    
    //Borro las coincidencias y hago efecto
    puntos = 0;
    for( var i = 0 ; i < 49 ; i++) {
        if (vector_dulces[i].Para_Borrar == "S"){
            $('#' + vector_dulces[i].Id_Tabla).detach();
            puntos = puntos + 1;
        }
    }
    //Modifico los puntos alcanzados
    puntos = puntos * 10 + parseInt($('#score-text').text());
    $('#score-text').text(puntos);
    
    //BUSCO EN LAS FILAS
    //ORDENO EL VECTOR POR FILA
    
    vector_dulces.sort(ordenar_dulces_Filas);
    
    imagen_actual_dulce = vector_dulces[0].Id_Imagen;
    fila_anterior = vector_dulces[0].Id_Fila;
    
    columna_anterior = 0;
    
    vector_auxiliar = new Array();
    
    i_aux = 0;
    
    cant = 0;
    //BUSQUEDA DE COINCIDENCIAS POR FILAS -----------------------------------------------------------------
        for( var i = 0 ; i < 49 ; i++){
            if (vector_dulces[i].Para_Borrar = "N") {
                vector_auxiliar.push(i);         
                if ((vector_dulces[i].Id_Imagen == imagen_actual_dulce) && (vector_dulces[i].Id_Fila == fila_anterior)){
                    //Misma Fila y mismo dulce!!! 
                        if (parseInt(vector_dulces[i].Id_Columna - columna_anterior) == 1) {
                                cant = cant + 1;

                        } else {
                            alert("Por favor hablé con Ismael Sayas y no encontramos el error que se da en Chrome en la ordenación del vector, dejé nota en la entrega del trabajo. Solo funciona en firefox desarrolladores. Gracias!");
                        }                        
                } else { 
                    if (vector_dulces[i].Id_Fila != fila_anterior) {
                        //Cambia Fila y es el mismo dulce
                        if (cant >= 3){
                            //Cambie de fila y Hay aciertos EN LA FILA ANTERIOR
                            //Marco para borrar las coincidencias
                            //Coloco en vector de ducles S para luego borrar
                            i_aux = vector_auxiliar[vector_auxiliar.length-1];
                            vector_auxiliar.pop();  
                            var z = 0;
                            while (z < vector_auxiliar.length) {
                                vector_dulces[vector_auxiliar[z]].Para_Borrar = "S";
                                z = z + 1;   
                            }
                            //-----------------------------------------------------
                            vector_auxiliar.length = 0;
                            cant = 1;
                            imagen_actual_dulce = vector_dulces[i].Id_Imagen;
                            fila_anterior = vector_dulces[i].Id_Fila;

                        } else {
                            //Cambie de fila y NO HAY ACIERTOS EN LA FILA ANTERIOR
                            i_aux = vector_auxiliar[vector_auxiliar.length-1];
                            vector_auxiliar.length = 0;
                            vector_auxiliar.push(i_aux);
                            cant = 1;
                            imagen_actual_dulce = vector_dulces[i].Id_Imagen;
                            fila_anterior = vector_dulces[i].Id_Fila;

                        }    
                    } else {
                        //Misma fila y cambia el dulce dulce
                        if (cant >= 3){
                            //Misma fila y cambia el dulce y HAY aciertos EN LA MISMA FILA
                            //Marco para borrar las coincidencias
                            //Coloco en vector de ducles S para luego borrar
                            i_aux = vector_auxiliar[vector_auxiliar.length-1];
                            vector_auxiliar.pop();  
                            var z = 0;
                            while (z < vector_auxiliar.length) {
                               vector_dulces[vector_auxiliar[z]].Para_Borrar = "S";
                                z = z + 1;   
                            }
                            //------------------------------------------------------
                            vector_auxiliar.length = 0;
                            vector_auxiliar.push(i_aux); 
                            cant = 1;
                            imagen_actual_dulce = vector_dulces[i].Id_Imagen;
                            fila_anterior = vector_dulces[i].Id_Fila;

                        } else {
                            //Misma columna y cambia el dulce y NO HAY aciertos EN LA MISMA COLUMNA 
                            i_aux = vector_auxiliar[vector_auxiliar.length-1];
                            vector_auxiliar.length = 0;
                            vector_auxiliar.push(i_aux);
                            cant = 1;
                            imagen_actual_dulce = vector_dulces[i].Id_Imagen;
                            fila_anterior = vector_dulces[i].Id_Fila;


                        }    

                    }

                } 
            }
                
        
            //Paso a una nueva fila
            columna_anterior = parseInt(vector_dulces[i].Id_Columna);
        
        //FIN DE TRATAMIENTO DE LA COLUMNA
        
        
    } //Fin del For recorrido de array dulces
    
    //Coincidencia en última posición
        if (cant >= 3) {
            var z = 0;
            while (z < vector_auxiliar.length) {
               vector_dulces[vector_auxiliar[z]].Para_Borrar = "S";
                z = z + 1;   
            }
        }    
    
    //Borro las coincidencias y hago efecto
    puntos = 0;
    for( var i = 0 ; i < 49 ; i++) {
        if (vector_dulces[i].Para_Borrar == "S"){
            $('#' + vector_dulces[i].Id_Tabla).detach();
            puntos = puntos + 1;
        }
    }
    //Modifico los puntos alcanzados
    puntos = puntos * 10 + parseInt($('#score-text').text());
    $('#score-text').text(puntos);
    
}
//FIN DE LA PRIMERA BUSQUEDA DE COINCIDENCIAS CUANDO ES CLIC EN EL BOTON INICIAR----------------------------

//CARGO LOS ARRAYS con ID y NRO dulce
var cargar_vector = function(){
    
    var indice_array = 0;
    for( var i = 0 ; i < 7 ; i++){
        for( var j = 0 ; j < 7 ; j++) {
            var nro_imagen_dulce = $('#' + (i+1) + (j+1)).attr("src");
            var i_car = i+1;
            var j_car = j+1;
            i_car = i_car.toString();
            j_car = j_car.toString();
            //CARGO COLUMNA, FILA y DULCE
            vector_dulces.push({
                Id_Tabla: i_car + j_car,
                Id_Columna: i_car,
                Id_Fila: j_car,
                Id_Imagen:nro_imagen_dulce.substr(6,1),
                Para_Borrar:"N"
            }); 
        }
    }
    
}

//Fin de la carga de los arrays


//========================================================================================================================================
// DOCUMENT READY!!! 
//========================================================================================================================================

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
    for( var i = 0 ; i < 49 ; i++){
        for( var j = 0 ; j < 7 ; j++) {
            var numero = Math.floor((Math.random() * 4) + 1); 
            $('<img class="dulces"' + 'id=' + (i+1) + (j+1) + ' src=image/' + numero + '.png'+ ' width=82%>').appendTo('.col-' + (i+1) + ' .fila_' + (i+1) + (j+1));
        }
    }

    
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

//CONTROL DE MOVIMIENTOS DE DULCES********************************************************
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

            } );
            
            
            
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
            
            cargar_vector();
            Primera_Busq_Coincidencias();
            
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

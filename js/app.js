$( document ).ready(function() {

var cantidadCeldas = 7;
	
//FILAS
	var altoFilas = 0.9*100/cantidadCeldas;
	var marginTopFilas = 0.1*100/(cantidadCeldas - 1);
	var anchoFilas = 100/1;
	
	for( var i = 0 ; i < cantidadCeldas ; i++) {
        $('<div class="filas fila_' + (i+1) + '"></div>').appendTo('.col-1');
        $('<div class="filas fila_' + (i+1) + '"></div>').appendTo('.col-2'); 
        $('<div class="filas fila_' + (i+1) + '"></div>').appendTo('.col-3'); 
        $('<div class="filas fila_' + (i+1) + '"></div>').appendTo('.col-4'); 
        $('<div class="filas fila_' + (i+1) + '"></div>').appendTo('.col-5'); 
        $('<div class="filas fila_' + (i+1) + '"></div>').appendTo('.col-6'); 
        $('<div class="filas fila_' + (i+1) + '"></div>').appendTo('.col-7'); 
    }

	$('.filas').each( function() {
		$(this).css('width', anchoFilas + '%');	$(this).css('height', altoFilas + '%');
		//if( ! $(this).is(':first-child') ) { $(this).css('margin-top', marginTopFilas + '%'); }
        $(this).css('margin-top', marginTopFilas + '%');
	});
//

//CELDAS
	var altoCeldas = 100/1;
	var anchoCeldas = 0.9*100/cantidadCeldas;
	var leftCeldas = 0.1*100/(cantidadCeldas - 1);
    
    for( var i = 0 ; i < cantidadCeldas ; i++){
        for( var j = 0 ; j < cantidadCeldas ; j++) {
            var numero = Math.floor((Math.random() * 4) + 1); 
            $('<img src=image/' + numero + '.png' + ' width=70%>').appendTo('.col-' + (i+1) + ' .fila_' + (j+1));
        }
    }

}); //ready jquery


$( document ).ready(function() {
	
	
	
//Definición del lado
var d;
if($(document).width() > $(document).height()) { d = $(document).height(); } else { d = $(document).width(); }
d*=0.9;
	

var cantidadCeldas = 7;
	
	

//BORDE	
	$('<div id="grilla-borde"></div>').appendTo('body');
	$('#grilla-borde').css('width', d + 'px');
	$('#grilla-borde').css('height', d + 'px');
//

//INTERIOR
	$('<div id="grilla-interna"></div>').appendTo('#grilla-borde');
	$('#grilla-interna').css('width', 90 + '%');
	$('#grilla-interna').css('height', 90 + '%');
	$('#grilla-interna').css('margin', 5 + '%');
//

//ABAJO 
$('<div id="info" style="text-align:center; font-size:3em;"></div>').appendTo('body');
//

//FILAS
	var altoFilas = 0.9*100/cantidadCeldas;
	var marginTopFilas = 0.1*100/(cantidadCeldas - 1);
	var anchoFilas = 100/1;
	
	for( var i = 0 ; i < cantidadCeldas ; i++) 
		{ $('<div class="filas ' + 'fila_' + (i+1) + '"></div>').appendTo('#grilla-interna'); }

	$('.filas').each( function() {
		$(this).css('width', anchoFilas + '%');	$(this).css('height', altoFilas + '%');
		if( ! $(this).is(':first-child') ) { $(this).css('margin-top', marginTopFilas + '%'); }
	});
//

//CELDAS
	var altoCeldas = 100/1;
	var anchoCeldas = 0.9*100/cantidadCeldas;
	var leftCeldas = 0.1*100/(cantidadCeldas - 1);
	
	for( var i = 0 ; i < cantidadCeldas ; i++) 
		for( var j = 1 ; j <= cantidadCeldas ; j++) 
		{ $('<div class="celdas ' + 'columna_' + (i+1) + ' "></div>').appendTo('#grilla-interna .filas:nth-child(' + j + ')'); }
	
	$('.celdas').each( function() {
		$(this).css('width', anchoCeldas + '%'); $(this).css('height', altoCeldas + '%');
		if( ! $(this).is(':first-child') ) { $(this).css('margin-left', leftCeldas + '%'); }
	});
//	

//LLENAR
	for( var i = 1 ; i <= cantidadCeldas ; i++) 
		for( var j = 1 ; j <= cantidadCeldas ; j++) {
            var numero = Math.floor((Math.random() * 4) + 1); 
			$('<div class="ficha">' + '<img src=image/' + numero + '.png' + ' width=70%>' + '</div>').appendTo('.filas:nth-child(' + i + ') .celdas:nth-child(' + j + ')');
            
		}



}); //ready jquery


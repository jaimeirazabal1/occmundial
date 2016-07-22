$(document).ready(function(){
	//window.localStorage.clear();
	$("#nuevoEvento-button6").click(function(event) {
		event.preventDefault();
	//$("body").on("click","#nuevoEvento-button6",function()){
		//event.preventDefault();
		var radio_evento = "";
		var nombre_evento = $("#nombre_evento").val();
		radio_evento = $('input:radio[name=radio-evento]:checked').val();
		var fecha_evento = $('#fecha_evento').val();
		var ubicacion_evento = $("#ubicacion_evento").val();
		if (nombre_evento && radio_evento && fecha_evento && ubicacion_evento) {

			window.localStorage.setItem("nombre_evento",nombre_evento);
			//window.localStorage.setItem("tipo_evento",radio_evento);
			window.localStorage.setItem("fecha_evento",fecha_evento);
			window.localStorage.setItem("ubicacion_evento",ubicacion_evento);

			if(radio_evento === "empresa"){
				window.location="comenzarregistroexpo.html";
			}else{
				window.location="comenzarregistrouni.html";
			}
		}else{
			$("#alert").html("<p>Todos los datos son obligatorios</p>");
			$("#alert").addClass("alert alert-danger")
		}


		/*console.log(nombre_evento);
		console.log(radio);
		console.log(fecha_evento);
		console.log(ubicacion_evento);*/

///		window.location="comenzarregistroexpo.html";
//		window.location="comenzarregistrouni.html";
	});

	$("#atras").click(function(){
		console.log("evento")
		window.location="bienvenida.html";
	});
});
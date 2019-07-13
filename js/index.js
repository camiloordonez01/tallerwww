
$(document).ready( function () {
	$.fn.dataTable.ext.errMode = 'none';
	var table = $('#table_id').DataTable({
		 "scrollX": true
	});
    $('#buscar').click(function(){
    	let urlDatos = "https://www.datos.gov.co/resource/i7cb-raxc.json";
    	jQuery.ajax({
    		type: "GET",
    		url: urlDatos,
    		dataType: "json",
    		success: function (response) {
				table.destroy();
				table = $('#table_id').DataTable( {
					data: response,
					"scrollX": true,
					"dataSrc":"errorLoglist",
					"lengthMenu": [[3,10, 25, 50, -1], [3,10, 25, 50, "All"]],
					columns: [
				        { data: 'expediente' },
				        { data: 'producto' },
				        { data: 'titular' },
				        { data: 'registrosanitario' },
				        { data: 'fechaexpedicion' },
				        { data: 'fechavencimiento' },
				        { data: 'estadoregistro' },
				        { data: 'expedientecum' },
				        { data: 'consecutivocum' },
				        { data: 'cantidadcum' },
				        { data: 'descripcioncomercial' },
				        { data: 'estadocum' },
				        { data: 'fechaactivo' },
				        { data: 'fechainactivo' },
				        { data: 'muestramedica' },
				        { data: 'unidad' },
				        { data: 'atc' },
				        { data: 'descripcionatc' },
				        { data: 'viaadministracion' },
				        { data: 'concentracion' },
				        { data: 'principioactivo' },
				        { data: 'unidadmedida' },
				        { data: 'cantidad' },
				        { data: 'unidadreferencia' },
				        { data: 'formafarmaceutica' },
				        { data: 'nombrerol' },
				        { data: 'tiporol' },
				        { data: 'modalidad' },				
				    ]
				});
    			/*$('#table_id').DataTable( {
				    data: response,
				    "scrollX": true
				    
				});*/
    			console.log(response);
    		},
    		error: function (response) {
    			console.log(response);
    		}
    	});
    });
});
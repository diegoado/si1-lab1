$(document).ready(function(){
	
	// Adicionar Elementos na Tabela
	$("#add").submit(function(event){
			var assunto = $("#aprender").val();
			
        	if(assunto.trim() != "") {
        		
        		var radio = $('input[name=assuntos]');
        		var checkedValue = radio.filter(':checked').val();
        		var index = $("#list tr").length + 1;
        		
        		if(checkedValue == "sim"){
                    $("#list").append(
                    		"<tr class='aprendi'>" +
                    		"<td><input type=checkbox name=chk></td>" +
                    		"<td>" + index + "</td>" +
                    		"<td>"+ assunto + "</td>" +
                    		"<td>J\u00e1 Aprendi</td>" +
                    	    "</tr>");
        		}else{
        			$("#list").append(
                    		"<tr class='aprender'>" +
                    		"<td><input type=checkbox name=chk></td>" +
                    		"<td>" + index + "</td>" +
                    		"<td>"+ assunto + "</td>" +
                    		"<td>Gostaria de Aprender</td>" +
                    	    "</tr>");
        		}
        	}
        	event.preventDefault();
        });
});
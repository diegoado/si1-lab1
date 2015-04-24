$(document).ready(function() {
	
	// Adicionar Elementos na Tabela
	$("#add").submit(function(event) {
			var assunto = $("#aprender").val();
			
        	if(assunto.trim() != "") {
        		
        		var radio = $('input[name=assuntos]');
        		var checkedValue = radio.filter(':checked').val();
        		
        		if(checkedValue == "sim") {
                    $("#list").append(
                    		"<tr class='aprendi'>" +
                    		"<td><input type=checkbox name=chk></td>" +
                    		"<td>"+ assunto + "</td>" +
                    		"<td>J\u00e1 Aprendi</td>" +
                    	    "</tr>");
        		}else{
        			$("#list").append(
                    		"<tr class='aprender'>" +
                    		"<td><input type=checkbox name=chk></td>" +
                    		"<td>"+ assunto + "</td>" +
                    		"<td>Gostaria de Aprender</td>" +
                    	    "</tr>");
        		}
        	}
        	event.preventDefault();
        });
	
	// Remove N itens da lista de assuntos
	$("#dl-btn").on("click", function(event) {
		var ch = $("input[name='chk']");
		var sel = false;
		var c = confirm("Continue delete?");

		if(c) {
			ch.each(function() {
				var $this = $(this);
				if($this.is(":checked")) {
					sel = true;
					$this.parents("tr").fadeOut(function() {
						$this.remove();
					});
				}
			});
			if(!sel) {
				alert("Nenhuma linha selecionada");
			}
		}
	});
	
	// Alterar os assuntos
	$("#alt-btn").on("click", function(event) {
		var ch = $("input[name='chk']");
		var sel = false;
		var c = confirm("Continue alteração?");
		
		if(c) {
			ch.each(function() {
				var $this = $(this);
				if($this.is(":checked")) {
					sel = true;
					var tr = $this.parents("tr");
					if(tr.attr("class") == "aprendi") {
						tr.addClass("aprender").removeClass("aprendi");
						tr.children(":last").text("Gostaria de Aprender");
					} else {
						tr.addClass("aprendi").removeClass("aprender");
						tr.children(":last").text("J\u00e1 Aprendi");
					}
				}
			});
			if(!sel) {
				alert("Nenhuma linha selecionada");
			}
		}
	});
});
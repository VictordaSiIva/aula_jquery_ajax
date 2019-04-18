function consultaCep()
{
	$(".barra_progresso").show();
	var cep = document.getElementById("cep").value;
	var url= "https://viacep.com.br/ws/" + cep + "/json/";

	$.ajax({

		url:url,
		type:"GET",
		success: function(response) {
			$("#logradouro").html(response.logradouro);
			$("#uf").html(response.uf);
			$("#localidade").html(response.localidade);
			$("#bairro").html(response.bairro);
			$("#titulo_cep").html("CEP" + response.cep);
			$(".cep").show();
			$(".barra_progresso").hide();
		

		}
	})
}
$(function(){
$(".cep").hide();
$(".barra_progresso").hide();

}

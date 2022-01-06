function consultaCep(){

    var cep = document.getElementById("cep").value;
    var url = "http://viacep.com.br/ws/" + cep + "/json/";

    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);

            $(".cep").html(response.cep);
            $(".logradouro").html(response.logradouro);
            $(".complemento").html(response.complemento);
            $(".bairro").html(response.bairro);
            $(".localidade").html(response.localidade);
            $(".uf").html(response.uf);
            $(".ibge").html(response.ibge);
            $(".gia").html(response.gia);
            $(".ddd").html(response.ddd);
            $(".siafi").html(response.siafi);
           
        }
    })
}
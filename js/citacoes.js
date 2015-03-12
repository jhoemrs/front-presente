$(document).ready(function ()  {
    
    var number = Math.floor(Math.random() * 40);
    
    $.ajax({
    type: 'GET',
    url: "/../pages/citacoes/mensagens.json",
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    cache:false,
    success: function(data) 
    {
        $.each(data, function(i, citacao) {
            item = "<h3>" + citacao.cita +" id " + citacao.id + "</h3>";

            if (citacao.id == number) {
                $('#boxcita').append(item);
            }
        });
    },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
        console.log(errorThrown);
    }
});
    
});
$(document).ready(function ()  {
    
    var number = Math.floor(Math.random() * 23);
    
    $.ajax({
    type: 'GET',
    url: "/../pages/desafio/desafiando.json",
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    cache:false,
    success: function(data) 
    {
        $.each(data, function(i, desafio) {
            item = "<center><h4>" + desafio.meta + "</h4></center>";

            if (desafio.id == number) {
                $('#blocodesafio').append(item);
            }
        });
    },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
        console.log(errorThrown);
    }
});
    
});
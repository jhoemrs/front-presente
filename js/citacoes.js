$(document).ready(function ()  {
    
    var number = Math.floor(Math.random() * 51);
    
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
            item = "<center><h4>" + citacao.cita + "</h4></center>"+ "<br />" + "<right><h6>"+ citacao.autor + "</h6></right>"

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
    
$('#btRandom').on("click", function (e) {
    var number = Math.floor(Math.random() * 51);
    
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
            item = "<center><h4>" + citacao.cita + "</h4></center>"+ "<br />" + "<right><h6>"+ citacao.autor + "</h6></right>"

            if (citacao.id == number) {
                $('#boxcita').html(''),
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

});

    
$(document).ready(function ()  {
    
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
            item = "<option value="+ desafio.id + ">" + desafio.data + "</option>";
            $('#selectDesafio').append(item);
            });
    },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
        console.log(errorThrown);
    }
});
    
$('#selectDesafio').on('change', function() {
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
            
            if (desafio.id == $('#selectDesafio').val() ) {
                $('#blocodesafio').html(''),
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

});


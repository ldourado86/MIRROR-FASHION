$(".novidades button").click(function(){
    $(".novidades").toggleClass("painel-aberto");// esse metodo toggleClass adiciona uma classe se ela nao existir, 
                                                 //e se a classe ja existir ele remove.
});


$(".mais-vendidos button").click(function(){
    $(".mais-vendidos").toggleClass("painel-aberto");
});
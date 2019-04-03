
var inputQuantidade = document.querySelector("#qtd");
var outputTotal = document.querySelector("#total");

inputQuantidade.oninput = function(){
    var preco = document.querySelector("#preco").textContent;
    
    preco = preco.replace("R$", " ");
    preco = preco.replace(",", ".");
    preco = parseFloat(preco);

    var quantidade = inputQuantidade.value;
    var total = quantidade * preco;
    
    total = "R$" + total.toFixed(2); // toFixed é um metodo para botar numero de casas decimais;
    total = total.replace(".", ",");

    outputTotal.value = total;
}
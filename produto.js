
var inputTamanho = document.querySelector("[name=tamanho]");
var outputTamanho = document.querySelector("[name=valortamanho]");

/*function mostraTamanho(){
    outputTamanho.value = inputTamanho.value;   
}

inputTamanho.oninput = mostraTamanho;*/



inputTamanho.oninput = function(){ //fazendo uma função anonima é o mesmo resultado mostrado acima.
    outputTamanho.value = inputTamanho.value;
}
tela = "";
atual = "";


let atualizatela = function()
{
    document.getElementById("inputID").value = tela;
    cursor(document.getElementById("inputID"));
}


//pega numero e coloca na tela
let addnumero = function()
{
    atual+=this.innerHTML;
    tela+=this.innerHTML;
    atualizatela();
    
}
let numeros = document.getElementsByClassName("numero");
for(i = 0;i<numeros.length;i++)
{
    numeros[i].addEventListener("click",addnumero);
}

//adiciona operação

let addop = function()
{
    if(atual[atual.length - 1] >= '0' && atual[atual.length - 1] <= '9')
    {
    atual+=this.innerHTML;
    tela+= (" " + this.innerHTML + " ");
    }
    atualizatela();
}
let ops = document.getElementsByClassName("op");
for(i = 0;i<ops.length;i++)
{
    ops[i].addEventListener("click",addop)
}


//https://www.geeksforgeeks.org/how-to-place-cursor-position-at-end-of-text-in-text-input-field-using-javascript/
let cursor = function PosEnd(end) {
    var len = end.value.length;
      
    if (end.setSelectionRange) {
        end.focus();
        end.setSelectionRange(len, len);
    } else if (end.createTextRange) {
        var t = end.createTextRange();
        t.collapse(true);
        t.moveEnd('character', len);
        t.moveStart('character', len);
        t.select();
    }
}


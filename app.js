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
    atual+= (" " + this.innerHTML + " ");
    tela = atual;
    }
    atualizatela();
}
let ops = document.getElementsByClassName("op");
for(i = 0;i<ops.length;i++)
{
    ops[i].addEventListener("click",addop)
}

let AC = document.getElementById("opAC").addEventListener("click",
()=>{
    atual = "";
    document.getElementById("inputID").value = "0";
    tela = "";
})

let EC = document.getElementById("opEC").addEventListener("click",
()=>{
    if(atual[atual.length-1] == ' ')
    {
        atual = atual.slice(0,-3);
    }else
    {
        atual = atual.slice(0,-1);
    }
    tela = atual; 
    atualizatela();
})


let converte = function(num)
{
    let r = 0;
    let pow = strnum.length - 1;
    for(const el of strnum)
    {
        let n = el.charCodeAt(0) - 48;
        r+= (n * (10**pow));
        pow--;
    }
    return r;
}

//todo funcao de operacao
let operacao = function(op,arr)
{


}

let calcula = function()
{
    if(atual[atual.length - 1] != ' ')
    {
    let arr = [];
    let aux = "";
    let i = 0;
    while(i < atual.length)
    {
        if(atual[i] >= '0' && atual[i] <= '9')
        {
            aux+=atual[i];
        }else
        {
            arr.push(aux);
            i++;
            aux = atual[i];
            arr.push(aux);
            i++;
            aux = "";
        }
        i++;
    }
    arr.push(aux);
    
    let multi = 0,div = 0,soma = 0,sub = 0;
    for(el of arr)
    {
        if(el == "x")multi++;
        if(el == "÷")div++;
        if(el == "+")soma++;
        if(el == "-")sub++;
    }
    console.log(arr);
    console.log("multi:" + multi);
    while(arr.length > 1)
    {
        while(multi > 0)
        {
            for(i = 0;i<arr.length;i++)
            {
                if(arr[i] == "x")
                {
                    let n1 = arr[i-1];
                    let n2 = arr[i+1];
                    let resultado = n1*n2;
                    resultado = resultado.toString();
                    arr.splice(i+2,0,resultado);
                    arr.splice(i-1,3);
                    break;
                }
            }
            multi--;
        }
        
    }


    }
}

let R = document.getElementById("R").addEventListener("click",calcula);



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


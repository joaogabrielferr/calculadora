tela = "";
atual = "";

let erro = false;

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
    document.getElementById("ans").innerHTML = "Ans";
})

let EC = document.getElementById("opEC").addEventListener("click",
()=>{
    console.log(atual);
    if(atual != ""){
    if(atual[atual.length-1] == ' ')
    {
        atual = atual.slice(0,-3);
    }else
    {
        atual = atual.slice(0,-1);
    }
    }
    tela = atual; 
    atualizatela();
})


let converte = function(num)
{
    let r = 0;
    let pow = num.length - 1;
    for(const el of num)
    {
        let n = el.charCodeAt(0) - 48;
        r+= (n * (10**pow));
        pow--;
    }
    return r;
}

function converteponto(num)
{
    let antes = "";
    let depois = "";
    let a = true;
    let d = false;
    for(el of num)
    {
        if(el != '.' && a && !d)antes+=el;
        if(el != '.' && !a && d)depois+=el;
        if(el == '.')
        {
            a = false;
            d = true;
        }
    }

    let divisor = "1";
    for(el of depois)divisor+='0'

    let n1 = converte(antes);
    let n2 = converte(depois);
    let divnum = converte(divisor);
    console.log(n1 + " " + n2 + " " + divnum);
    return (n1 + (n2/divnum));


}

let operacao = function(op,arr,qtd)
{
    while(qtd > 0)
    {
        for(i = 0;i<arr.length;i++)
        {
            if(arr[i] == op)
            {
                let n1,n2;
                let ponto1 = false,ponto2 = false;
                for(el of arr[i-1])if(el == '.')ponto1 = true;
                for(el of arr[i+1])if(el == '.')ponto2 = true;
                if(ponto1)n1 = converteponto(arr[i-1])
                else n1 = converte(arr[i-1]);
                if(ponto2)n2 = converteponto(arr[i+1]);
                else n2 = converte(arr[i+1]);
                let resultado = 0;
                if(op == "x")resultado = n1*n2;
                if(op == "÷")resultado = n1/n2;
                if(op == "+")resultado = n1 + n2;
                if(op == "-")resultado = n1 - n2;
                resultado = resultado.toString();
                arr.splice(i+2,0,resultado);
                arr.splice(i-1,3);
                break;
            }
        }
        qtd--;      
    }
    return arr;

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
        if((atual[i] >= '0' && atual[i] <= '9') || atual[i] == '.')
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
        arr = operacao("x",arr,multi);
        arr = operacao("÷",arr,div);
        arr = operacao("+",arr,soma);
        arr = operacao("-",arr,sub);
        console.log(arr);
    }
    tela = arr[0].toString();
    atual = tela;
    atualizatela();
    document.getElementById("ans").innerHTML = arr[0];


    }
}

let ans = document.getElementById("ans").addEventListener("click",
()=>{
    if(document.getElementById("ans").value != "Ans")
    {
        atual+= document.getElementById("ans").innerHTML;
        tela = atual;
        atualizatela();
    }
});

let R = document.getElementById("R").addEventListener("click",calcula);

function addponto()
{
    if(atual[atual.length - 1] == ' ' || atual.length == 0)return;
    let ponto = 0;
    let i = atual.length - 1;
    while(atual[i] != ' ' && i > 0)
    {
        if(atual[i] == '.')
        {
            ponto = 1;
            break;
        }
        i--;
    }
    if(ponto >= 1)return;
    atual+=this.innerHTML;
    tela+=this.innerHTML;
    atualizatela();
}

document.getElementById("ponto").addEventListener("click",addponto);

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


let telastr = "";
let currstr = "";
const arraystr = [];


//coloca os numeros na tela
let numeros = document.getElementsByClassName("botao");
let addnumero = function()
{
    telastr+=this.innerHTML;
    currstr+=this.innerHTML;
    document.getElementById("inputID").value = telastr;
    cursor(document.getElementById("inputID"));

}
for(i = 0;i<numeros.length;i++)
{
    numeros[i].addEventListener("click",addnumero)
}

//apaga a conta atual clicando no botao AC
let ac = document.getElementById("opAC");
ac.addEventListener("click",()=>{
    telastr = "";
    document.getElementById("inputID").value = "0";
    arraystr.length = 0;
})

let addop = function(){
    if(currstr != ""){
    telastr += " " + this.innerHTML + " ";
    arraystr.push(currstr);
    arraystr.push(this.innerHTML)
    currstr = "";
    document.getElementById("inputID").value = telastr;
    cursor(document.getElementById("inputID"));  
    }
}

let opbts = document.getElementsByClassName("op");
for(i = 0;i<opbts.length;i++)
{
    opbts[i].addEventListener("click",addop);
}

//converte string para numero
const converte = function(strnum)
{
    //for(const el of strnum)console.log(el);
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

//calcula a equação
let calcula = function(){

    arraystr.push(currstr);
    currstr = "";
    let multi = 0,div = 0,soma = 0,sub = 0;
    let resultado = 0;
    for(const el of arraystr)
    {
        if(el == "x")multi++;
        if(el == "÷")div++;
        if(el == "+")soma++;
        if(el == "-")sub++;
    }

    while(arraystr.length > 1){
    while(multi > 0)
    {
        for(i = 0;i<arraystr.length;i++)
        {
            if(arraystr[i] == "x")
            {
                let n1 = converte(arraystr[i-1]);
                let n2 = converte(arraystr[i+1]);
                let resultado = n1*n2;
                let resultstring = resultado.toString();
                arraystr.splice(i+2,0,resultstring);
                console.log(arraystr);
                
                break;
            }
        }

        multi--;
    }
    arraystr.length = 1;
    }
    console.log(arraystr);
    
}



let btnR = document.getElementById("R");
btnR.addEventListener("click",calcula);

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


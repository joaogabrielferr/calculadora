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

const converte = function(arrnum)
{
    let r = 0;
    let pow = 0;
    console.log(arrnum);
}

let calcula = function(){

    arraystr.push(currstr);
    currstr = "";
    console.log(arraystr);
    let multi = 0,div = 0,soma = 0,sub = 0;
    for(i = 0;i<arraystr.length;i++)
    {
        if(arraystr[i] == "x")multi++;
        if(arraystr[i] == "÷")multi++;
        if(arraystr[i] == "+")multi++;
        if(arraystr[i] == "-")multi++;
    }  
        while(arraystr.length > 1)
        {
        while(multi > 0)
        {
            //multiplicação primeiro
            for(i = 0;i<arraystr.length;i++)
            {
                if(arraystr[i] == "x")
                {
                    console.log("achou x na pos " + i);
                    converte(arraystr[i-1]);
                    converte(arraystr[i+1]);
                    break;
                }
            }
            multi--;
        }
            arraystr.length = 1;
        }
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


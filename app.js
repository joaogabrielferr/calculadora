let telastr = "";
let currstr = "";
let arraystr = "";


//coloca os numeros na tela
let numeros = document.getElementsByClassName("botao");
let addnumero = function()
{
    telastr+=this.innerHTML;
    currstr+=this.innerHTML;
    document.getElementById("inputID").value = telastr;

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
})



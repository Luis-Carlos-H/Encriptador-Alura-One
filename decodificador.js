
function encriptartexto(){
    var textoriginal=document.getElementById("textar").value;
    textoriginal=textoriginal.replaceAll("a","1");
    textoriginal=textoriginal.replaceAll("e","2");
    textoriginal=textoriginal.replaceAll("i","3");
    textoriginal=textoriginal.replaceAll("o","4");
    textoriginal=textoriginal.replaceAll("u","5");
    textoriginal=textoriginal.replaceAll("2","a");
    textoriginal=textoriginal.replaceAll("1","e");
    textoriginal=textoriginal.replaceAll("4","i");
    textoriginal=textoriginal.replaceAll("5","o");
    textoriginal=textoriginal.replaceAll("3","u");
    valor=textoriginal;
    imprimir(valor);
}
function desencriptartexto(){
    var textoriginal=document.getElementById("textar").value;
    textoriginal=textoriginal.replaceAll("a","2");
    textoriginal=textoriginal.replaceAll("e","1");
    textoriginal=textoriginal.replaceAll("i","4");
    textoriginal=textoriginal.replaceAll("o","5");
    textoriginal=textoriginal.replaceAll("u","3");
    textoriginal=textoriginal.replaceAll("1","a");
    textoriginal=textoriginal.replaceAll("2","e");
    textoriginal=textoriginal.replaceAll("3","i");
    textoriginal=textoriginal.replaceAll("4","o");
    textoriginal=textoriginal.replaceAll("5","u");
    
    valor=textoriginal
    imprimir(valor);

}
function copiartexto(){
    var textoencritado=document.getElementById("textar2").value;
    navigator.clipboard.writeText(valor);


}
function imprimir(valor){
    document.getElementById("muneco").style.visibility = 'collapse';
    document.getElementById("fram").style.visibility = 'collapse';
    document.getElementById("copi").style.visibility = 'visible';
    document.getElementById("textar2").innerHTML=valor;

}
document.getElementById("encri").onclick=function(){encriptartexto();} 
document.getElementById("desencri").onclick=function(){desencriptartexto();}
document.getElementById("copi").onclick=function(){copiartexto();}
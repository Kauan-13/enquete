var largura = 1;
var largura2 = 1;
var margin = 0;
        
function aumentar(opt){    
    if(opt == 'sim'){
        largura += 1;
        
        document.querySelector("#s").style.width = (largura*10) + "px";
        document.querySelector("#s").innerHTML = largura -1;

        if((largura > 15)&&(largura > largura2)){
            margin -=5;
            document.querySelector("#s").style.marginLeft = margin + "px";
            document.querySelector("#n").style.marginLeft = margin + "px";
        }
    }else if(opt == 'nao'){
        largura2 += 1;
            
        document.querySelector("#n").style.width = (largura2*10) + "px";
        document.querySelector("#n").innerHTML = largura2 -1;

        if((largura2 > 15)&&(largura2 > largura)){
            margin -=5;
            document.querySelector("#s").style.marginLeft = margin + "px";
            document.querySelector("#n").style.marginLeft = margin + "px";
        }
    }    
}
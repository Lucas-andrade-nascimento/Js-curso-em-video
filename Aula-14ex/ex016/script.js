function contar(){


var inicio = document.getElementById('txti');
var fim = document.getElementById('txtf');
var salto = document.getElementById('txts');
let res = document.getElementById('res');


if (inicio.value.length == 0 || fim.value.length == 0 || salto.value.lenght){
    res.innerHTML = "Impossivel contar!"
    window.alert("Impossivel fazer a contagem! faltam dados");

} else {
    res.innerHTML = "contando: <br>"
    // let i = Number(inicio.value);
    // let f = Number(fim.value);
    // let s = Number(salto.value);

    // for (let c = i; c <= f; c += s) {
    //     res.innerHTML += ` ${c} `
    // }
    
     var i = Number(inicio.value);
     var f = Number(fim.value);
     var s = Number(salto.value);
     if(s <=0 ){
         window.alert("Salto invalido! Considerando SALTO 1")
         s = 1
     }
    if(i<f){
        //contagem crescente
        while (i <= f){
            res.innerHTML += `${i} \u{1F449}`
            i += s; 
        }

        
    } else {
        //contagem decrescente
        for(let c = i; c >= f; c -= s){
            res.innerHTML += `${c} \u{1F449}`
        }
     }
        res.innerHTML += `\u{1F3C1}`

    }

}
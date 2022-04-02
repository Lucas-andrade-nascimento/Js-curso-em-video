function tabuada() {
var num = document.getElementById('txtn');
var tab = document.getElementById('seltab');


if (num.value.length == 0) {
    window.alert("Erro! insira um numero");

} else {
    let n = Number(num.value);
    //let c = 1
    tab.innerHTML= " "
     for (let c = 1; c <= 10; c++) {
   // while (c <= 10 ) {
        let item = document.createElement('option');
        item.text = ` ${n} x ${c} = ${n*c} `
        item.vale = `tab${c}`
        tab.appendChild(item)
       // c++
    }

}

 

// recebe um numero, multiplica por x++ ate que x=10

}
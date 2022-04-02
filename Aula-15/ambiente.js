let num = [5, 8];
console.log(`Nosso vetor é o: ${num}.`);
num[2] = 6;
num.push(7); // .push é um metodo
console.log(num)
console.log(`O vetor tem ${num.length} posições.`) // length é um atributo
num.sort() // coloca o array em ordem crescente
console.log(`Vetor reorganizado: ${num}.`)
num.push(1);
console.log(num) // o 1 foi por ultimo pq o sort veio antes dele 

/* for (let pos = 0; pos<num.length; pos++) {
    console.log(`Na posição ${pos} esta o: ${num[pos]}.`)

}   maneira de mostrar o percurso do array antes do ECMAS6 */

for (let pos in num){ // esse jeitao diferenciado de lançar um for, so funciona para arrays e objects (no JS é uma redundancia, todo array em JS é um object)
    console.log(`Na posição ${pos} esta o: ${num[pos]}.`)
} 

let pos = num.indexOf(7); //pesquisa valores dentro do array - nao a posição, o valor. se valor for -1 quer dizer que o num procurado nao foi encontrado
console.log(`O 7 esta na posição ${pos}`)


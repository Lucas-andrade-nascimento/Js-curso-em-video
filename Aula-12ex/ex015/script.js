function carregar() {
    var data = new Date();
    var ano = data.getFullYear();
    var nascimento = document.getElementById('txtano');
    var nasc = nascimento.value; 
    var res = document.querySelector('#res');
      
    if(nasc == 0 || nasc > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var gen = document.getElementsByName('radsex');
        var idade = ano - nasc;
        var sexo = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
     
         if (gen[0].checked) {
            sexo = "homem"
            if (idade<=13) { 
                img.setAttribute('src', 'foto-bebe-m.png');
            } else if (idade<=25) {
                img.setAttribute('src', 'foto-jovem-m.png');
            } else if (idade<=50) {
                img.setAttribute('src', 'foto-adulto-m.png');
            } else {
                img.setAttribute('src', 'foto-idoso-m.png');
            }   
        } else {
            sexo = "mulher";
            if (idade<=15) { 
                img.setAttribute('src', 'foto-bebe-f.png');
                } else if (idade<=25) {
                    img.setAttribute('src', 'foto-jovem-f.png');
                } else if (idade<=55) {
                    img.setAttribute('src', 'foto-adulto-f.png');
                } else {
                    img.setAttribute('src', 'foto-idoso-f.png');
                }  

        }  
        res.style.textAlign = 'center';
        res.innerHTML = `Detctamos ${sexo} com ${idade} anos`;
        res.appendChild(img);
    }             
}

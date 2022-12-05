function verificar(){
    var date = new Date()
    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var resu = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente!')
    }else{
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var img = document.createElement('img')
         img.setAttribute('id','foto')
         var genero = ''
         if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade <= 13){
                //Criança
                img.setAttribute('src','criança.jpg')
            }
            else if(idade >13 && idade <= 20){
                //jovem
                img.setAttribute('src','jovemm.jpg')
            }
            else if(idade > 20 && idade <= 50){
                //adulto
                img.setAttribute('src','adulta.jpg')
            }
            else{
                //idoso
                img.setAttribute('src','idosa.jpg')
            }
         }
         else if (fsex[0].checked) {
             genero = 'Homem'
             if(idade >=0 && idade < 13){
                //Criança
                img.setAttribute('src','garoto.jpg')
            }
            else if(idade > 13 && idade < 20){
                //jovem
                img.setAttribute('src','jovem2.jpg')
            }
            else if(idade > 20 && idade <50){
                //adulto
                img.setAttribute('src','adulto2.jpg')
            }
            else{
                //idoso
                img.setAttribute('src','idoso.jpg')
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} com ${idade} anos`
         res.appendChild(img)

        }
}
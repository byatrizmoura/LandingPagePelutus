function analise() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anotxt')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Favor verificar os dados digitados e tentar novamente.')
    } else
    var fsexo = document.getElementsByName('sexo')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img') // mesmo efeito de criar uma tag <img id='foto'> no HTML
    img.setAttribute('id', 'foto')
    if (fsexo[0].checked) {
        genero = 'mulher'
        if (idade >=0 && idade < 12) {
            //criança
            img.setAttribute('src', './imagens/imagem-ursinho-menina.png')
        } else if (idade >= 12 || idade < 60){
            //adulto 
            img.setAttribute('src', './imagens/imagem-ursinho-mulher.png')
        } else {
            //Idoso
            img.setAttribute('src', './imagens/imagem-ursinho-idosa.png')
        }
    } else if (fsexo[1].checked){
        genero = 'homem'
        if (idade >=0 && idade < 12) {
            //criança
            img.setAttribute('src', './imagens/imagem-ursinho-menino.png')
        } else if (idade >= 12 || idade < 60){
            //adulto 
            img.setAttribute('src', './imagens/imagem-ursinho-homem.png')
        } else {
            //Idoso
            img.setAttribute('src', './imagnes/imagem-ursinho-idoso.png')
        }
    }
    res.style.textAlign = 'center' // centraliza o texto sem precisar do css, verificar se posteriormente não poderá conflitar com o css da pagina.
    res.innerHTML = `Olá, verificamos que você é ${genero} e que tem ${idade} anos de idade, conheça seu amiguinho aqui em baixo:`
    res.appendChild(img)
}
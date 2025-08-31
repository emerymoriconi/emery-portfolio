function enviar(event){
    event.preventDefault()

    const email = document.getElementById('email').value
    const mensagem = document.getElementById('mensagem').value
    const telefone = '5586998186419'

    const texto = `Olá! Meu email para contato é ${email} e minha mensagem é: ${mensagem}.`

    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank')
}
 

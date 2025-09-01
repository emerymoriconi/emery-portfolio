function enviar(event){
    event.preventDefault()

    const email = document.getElementById('email').value
    const mensagem = document.getElementById('mensagem').value
    const meuEmail = 'emerymoriconi09@gmail.com'

    if (!email.trim() || !mensagem.trim()){
        alert('Por favor, preencha todos os campos!')
        return
    }

    const assunto = 'Contato através do Portfolio - Émery Moriconi'
    const corpoEmail = `Olá Émery!

    Gostaria de entrar em contato com você através do seu portfolio.

    Meus dados de contato:
    Email: ${email}

    Minha mensagem:
    ${mensagem}

    ---
    Enviado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}`

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(meuEmail)}&su=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`

    window.open(gmailUrl, '_blank')
    
    // Feedback visual para os usuário
    alert('Seu cliente de email será aberto. Complete o envio por lá!')

    document.getElementById('email').value = ''
    document.getElementById('mensagem').value = ''
    document.getElementById('email').focus();
}

const animarElements = document.querySelectorAll('.animar');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        } else {
            entry.target.classList.remove('visivel');
        }
    });
}, {
    threshold: 0.2
});

animarElements.forEach(el => observer.observe(el));
 

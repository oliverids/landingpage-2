const popup = document.getElementById('popup'),
    close = document.getElementById('close'),
    envio = document.getElementById('enviar'),
    email = document.getElementById('email'),
    promo = document.getElementById('promo'),
    nao = document.getElementById('naoquer');
let permissao;

function Cadastro() {
    alert('Email cadastrado com sucesso!!');
    localStorage.setItem("email", email.value);
    localStorage.setItem("permissao", "sim");
    popup.style.display = "none";
    promo.style.display = 'none';
}

function Negado() {
    localStorage.setItem("permissao", "não");
    popup.setAttribute('hidden', 'true')
    popup.style.display = "none";
}

function Perguntar() {
    setTimeout(() => {
        popup.style.display = "flex";
    }, 1000);
}

permissao = localStorage.getItem('permissao');
if (!("permissao" in localStorage)) {
    Perguntar();
}

close.addEventListener('click', () => {
    popup.style.display = "none";
})

envio.addEventListener('click', () => {
    let useremail = email.value;

    if ((useremail.length == 0)) {
        alert('Digite um email!')
    } else if (!(useremail.includes('@')))
        alert('Digite um email válido!')
    else {
        Cadastro();
        return;
    }
})

nao.addEventListener('click', Negado);

promo.addEventListener('click', Perguntar)
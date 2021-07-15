const links = document.querySelectorAll('a');
links.forEach(e => e.addEventListener('click', e => { e.preventDefault() }))

const popup = document.getElementById('popup'),
    close = document.getElementById('close'),
    envio = document.getElementById('enviar'),
    email = document.getElementById('email'),
    promo = document.getElementById('promo'),
    nao = document.getElementById('naoquer');

function Perguntar() {
    setTimeout(() => {
        popup.style.display = "flex";
    }, 2000);
}

function Checa() {
    let useremail = email.value;

    if ((useremail.length == 0)) {
        alert('Digite um email!')
    } else if (!(useremail.includes('@')))
        alert('Digite um email válido!')
    else {
        Cadastro();
        return;
    }
}

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

permissao = localStorage.getItem('permissao');
if (!("permissao" in localStorage)) {
    Perguntar();
}

close.addEventListener('click', () => {
    popup.style.display = "none";
})

envio.addEventListener('click', Checa)
nao.addEventListener('click', Negado);

function inferno() {
    let useremail = email.value;

    if ((useremail.length == 0)) {
        alert('Digite um email!')
    } else if (!(useremail.includes('@')))
        alert('Digite um email válido!')
    else {
        Cadastro();
        return;
    }
}

promo.addEventListener('click', () => {
    popup.style.display = "flex";
    let popped;

    if (popped) {
        let useremail = email.value;

        if ((useremail.length == 0)) {
            alert('Digite um email!')
        } else if (!(useremail.includes('@')))
            alert('Digite um email válido!')
        else {
            Cadastro();
            return;
        }
    }
})






const tela_cadas = document.getElementById('cadastro');
const tela_log = document.getElementById('login');

function tela_cadastro() {
    const form = document.getElementById("formCadastro");

    form.addEventListener("submit", function(evento){
        evento.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('emailCadastro').value;
        const senha = document.getElementById('senhaCadastro').value;
        const confirmarSenha = document.getElementById('confirmarSenha').value;

        if(nome === '' || email === '' || senha === '' || confirmarSenha === ''){
            alert('Preencha todos os campos');
            return;
        }

        if(senha !== confirmarSenha){
            alert('As senhas não coincidem');
            return;
        }

        alert('Cadastro realizado!');
    });
}

function tela_login() {
    const form = document.getElementById('formLogin');

    form.addEventListener("submit", function (evento){
        evento.preventDefault();

        const email = document.getElementById('emailLogin').value;
        const senha = document.getElementById('senhaLogin').value;

        if(email === '' || senha === ''){
            alert('Preencha todos os campos');
            return;
        }

        alert('Login realizado!');
    });
}

function mostrarCadastro() {
    tela_cadas.style.display = 'block';
    tela_log.style.display = 'none';
}

function mostrarLogin() {
    tela_cadas.style.display = 'none';
    tela_log.style.display = 'block';
}

tela_cadastro();
tela_login();
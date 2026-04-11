const tela_cadas = document.getElementById('cadastro');
const tela_log = document.getElementById('login');

function tela_cadastro() {
 
    const form = document.getElementById("formCadastro");
    form.addEventListener("submit", function(evento){
        evento.preventDefault(); 
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if(nome === '' || email === '' || senha === '' || confirmarSenha === ''){
        alert('Preencha todos os campos');
        return;
    }
    if(senha !== confirmarSenha){
        alert('As senhas não coincidem');
        return;
    }
 });

}

function tela_login() {
    const form = document.getElementById('formLogin');
    form.addEventListener("submit", function (evento2){
       evento2.preventDefault(); 
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    })  

}

function mostrarCadastro() {
        tela_cadas.style.display = 'block';
        tela_log.style.display = 'none';
        tela_cadastro();
}

function mostrarLogin() {
        tela_cadas.style.display = 'none';
        tela_log.style.display = 'block';
        tela_login();
}




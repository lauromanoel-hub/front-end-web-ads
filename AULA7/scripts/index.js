function executar(evento) {
    evento.preventDefault();

    limparForm();
    validarForm();
}

function validarForm() {
    const nome = document.querySelector("#nome").value;
    const erroNome = document.querySelector("#erro-nome");
    if (nome === "") {
        erroNome.textContent = "nome nao pode estar vazio!";
        erroNome.classList.add("erro");
        erroNome.classList.remove("oculto");
    }

    const idade = document.querySelector("#idade"). value;
    const erroIdade = document.querySelector("#erro-idade");
    if (idade === "") {
        erroIdade.textContent = "idade nao pode estar vazio!";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    }
    else if (Number(idade) < 18) {
        erroIdade.textContent = "É necessário ter 18 anos!";
        erroIdade.classList.add("erro");
        erroIdade.classList.remove("oculto");
    }

    const termos = document.querySelector("#termos");
    const erroTermos = document.querySelector("#erro-termos");
    if (!termos.checked) {
        erroTermos.textContent = "aceite os termos!";
        erroTermos.classList.add("erro");
        erroTermos.classList.remove("oculto");
}

const concluido = document.querySelector("#concluido");
const valido = document.querySelector(".erro"). length === 0;

if (!valido) {
    concluido.textContent = "corrija os erros antes de proceguir!";
    concluido.classList.add("erro");
    concluido.classList.remove("oculto");
} else {
    concluido.textContent = "cadastro concluido com sucesso!";
    concluido.classList.add("sucesso");
    concluido.classList.remove("oculto");
}
}

// VALIDAR O EMAIL COM REGEX

//() =>{} arrow function
function limparForm() {
    document.querySelectorAll(".erro").forEach( (item) =>{
        item.classList.remove("erro");
        item.classList.add("oculto");
    } );

    document.querySelector("#concluido").classList.add("aculto");
}
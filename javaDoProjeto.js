async function buscarEndereco(CEP){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
    var consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro){
        throw Error('cep todo cagado')
    }
    var cidade = document.getElementById('cidade');
    var lagradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');

    cidade.value = consultaCEPConvertida.localidade;
    lagradouro.value = consultaCEPConvertida.lagradouro;
    estado.value = consultaCEPConvertida.uf;

    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP invalido. tente e novo</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscarEndereco(cep.value));

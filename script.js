var lista = [];
var input_entrada = document.getElementById("entrada");
var btn_entrada = document.getElementById("incluir");
var btn_generate = document.getElementById("generate_button");
var btn_reset = document.getElementById("reset");
var result = document.getElementById("results");
var last_values = document.getElementById("last-values");
var distribuicaoFrequencia;
var table;

//INCLUIR NÚMEROS NA LISTA
btn_entrada.addEventListener("click", function (e) {
    e.preventDefault();
    if (input_entrada.value) {
        lista.push(parseInt(input_entrada.value));
        input_entrada.value = "";
        input_entrada.focus();

        //INSERE A LISTA COM OS ÚLTIMOS 3 VALORES DIGITADOS
        let ultimos3valores = []
        for (let i = lista.length - 1; i > lista.length - 4 && i >= 0; i--)
            ultimos3valores.push(lista[i]);
        last_values.innerHTML = ultimos3valores;
    }
});
//RESETA A TABELA
btn_reset.addEventListener("click", function () {
    distribuicaoFrequencia = null;
    lista = [];
    last_values.innerHTML = '';
    if(table)
        table.delete();
});

//GERAR TABELA E TODO O RESTO
generate_button.addEventListener("click", function () {
    if (lista.length > 0) {
        last_values.textContent = '';
        result.innerHTML = '';
        distribuicaoFrequencia = new DistribuicaoFrequencia(lista);
        table = new TabelaEstatistica(result)
        result.appendChild(createParagraph("Amplitude amostral: " + distribuicaoFrequencia.r_amplitudeAmostral));
        result.appendChild(createParagraph("Amplitude da classe: " + distribuicaoFrequencia.h_amplitudeClasse));
        result.appendChild(createParagraph("Quantidade de classes: " + distribuicaoFrequencia.k_quantidadeClasses))
        table.createTable(distribuicaoFrequencia.classes, distribuicaoFrequencia.frequencias);
    }
});
function createParagraph(text) {
    let p = document.createElement("p");
    p.textContent = text;
    return p;
}

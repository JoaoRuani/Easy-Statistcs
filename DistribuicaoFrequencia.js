class DistribuicaoFrequencia {
    constructor(amostra) {
        this.lista = amostra.sort();
        this.r_amplitudeAmostral = this.lista[lista.length - 1] - this.lista[0];
        this.k_quantidadeClasses = Math.round(1 + 3.32 * Math.log10(this.lista.length)); //regra de Sturges
        this.h_amplitudeClasse = Math.ceil(this.r_amplitudeAmostral / this.k_quantidadeClasses);
        this.classes = this.criarClasses();
        this.frequencias = this.criarFrequencia();
    }

    criarClasses() {
        let primeiroValor = lista[0];
        let classes = [];
        for (let i = 0; i < this.k_quantidadeClasses; i++) {
            classes.push([primeiroValor, primeiroValor += this.h_amplitudeClasse]);
        }
        return classes;
    }
    criarFrequencia() {
        let frequencias = [];
        for (let i in this.classes) {
            let contadorFrequencia = 0;
            let limiteSuperiorClasse = this.classes[i][1];
            let limiteInferiorClasse = this.classes[i][0];
            for (let j = 0; this.lista[j] < limiteSuperiorClasse && j < lista.length; j++)
                if (this.lista[j] >= limiteInferiorClasse && this.lista[j] < limiteSuperiorClasse)
                    contadorFrequencia++;
            frequencias.push(contadorFrequencia);
        }
        return frequencias;
    }
}
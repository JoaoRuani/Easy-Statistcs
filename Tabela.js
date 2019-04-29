class TabelaEstatistica {
    constructor(ref) {
        this.container = ref;
        this.table = document.createElement("table");
    }
    createTable(classes, frequencias) {

        //CRIA E INSERE OS TABLE HEADERS
        let tr = this.createTr(this.createTh("Classes"));
        tr.appendChild(this.createTh("Frequencias"));
        this.table.appendChild(tr);

        //CRIA O TR E INSERE O TD COM AS CLASSES
        for (let i in classes) {
            let td = this.createTd(classes[i][0] + " |-- " + classes[i][1]);
            let tr = this.createTr(td);
            tr.appendChild(this.createTd(frequencias[i]));
            this.table.appendChild(tr);
        }
        this.container.appendChild(this.table);
    }
    delete() {
        this.container.innerHTML = '';
    }   
    createTr(tag) {
        let tr = document.createElement("tr");
        tr.appendChild(tag);
        return tr;
    }
    createTd(text) {
        let td = document.createElement("td");
        td.textContent = text;
        return td;
    }
    createTh(text) {
        let th = document.createElement("th");
        th.textContent = text;
        return th;
    }
}
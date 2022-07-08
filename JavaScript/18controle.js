let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');

function addTarefa() {
    let valorInput = input.value;

    if ((valorInput !=="") && (valorInput !==null) && (valorInput !==undefined)){

        ++contador;

        let novoItem =
    `<div id="${contador}" class="item">

        <div onclick="marcarTarefa(${contador})" class="itemIcone">
            <i id="icone_${contador}" class="mdi mdi-checkbox-blank-circle-outline"></i>
        </div>

        <div onclick="marcarTarefa(${contador})" class="itemNome">
            ${valorInput}
        </div>

        <div class="itemBotao">
            <button onclick="deletar(${contador})" class="delete">
                <i class="mdi mdi-delete-forever"></i>
            </button>
        </div>

    </div>`;
    //ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem;

    //ZERAR CAMPO INPUT E CONTINUAR FOCADO
    input.value = "";
    input.focus();
    }
}

    //FUNÇÃO DE DELETAR TAREFA
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe=="item"){ //ADICIONAR MARCAÇÃO DE CLICADO
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('mdi-checkbox-blank-circle-outline')
        icone.classList.add('mdi-checkbox-marked-circle')

        item.parentNode.appendChild(item);

    } else { //REMOVER MARCAÇÃO DE CLICADO
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('mdi-checkbox-marked-circle')
        icone.classList.add('mdi-checkbox-blank-circle-outline')

        item.parentNode.remove(appendChild(item));
    }
}

input.addEventListener("keyup", function (event){
    //SE TECLOU ENTER(13) 
    if(event.keyCode ===13){
        event.preventDefault();
        btnAdd.click();
    }
});


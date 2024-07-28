


/* ETAPA 01 - 
Quando houver o submit no form, 
irá acontecer um evento, Mas antes precisamos interrromper
o comportamento do submit com o preventDefault(),
o evento são os dados que queremos utilizar
*/
//-----------------------------------
/*

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    console.log(evento)
})
//-----------------------------------

/* ETAPA 02 - 
Precisamos pegar o  data e o valor que queremos armazenar,
podemos fazer assim:

*/
//-----------------------------------
/*
form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    console.log(evento)
    console.log(evento.target.elements['data'].value)
    console.log(evento.target.elements['quantidade'].value)
})
*/
//-----------------------------------

/* ETAPA 03 - CRIAR UM ELEMENTO
Agora vamos criar uma função para criar um elemento
*/

/* até o momentto estamos criando e armazendo os dados no Localstorage, porém
toda vez que um item é adicionado na lista, ele sobrescreve oque já está no local storage 


form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const quantidade = evento.target.elements['quantidade']
    const data = evento.target.elements['data']


    criaElemento(data.value, quantidade.value)
    evento.target.elements['data'].value = ""
    evento.target.elements['quantidade'].value = "" 
})



function criaElemento(data,quantidade) {

    //<li class="lista_item"> <span>26/07/2024</span> 5,00</li>
                    
    const novoItem = document.createElement('li')
    novoItem.classList.add('lista_item')

    const dataSpan = document.createElement('span')
    dataSpan.innerHTML = data
    
    novoItem.appendChild(dataSpan)
    novoItem.innerHTML += quantidade

    // Adicionando os items na lista
   
    lista.appendChild(novoItem)

    localStorage.setItem("data", data)
    localStorage.setItem("quantidade", quantidade)

}

//-----------------------------------

/* Etapa 04 -
Guardar múltiplos items no localstorage */
/*
form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const quantidade = evento.target.elements['quantidade']
    const data = evento.target.elements['data']

    // vamos transformar os dados inseridos em um objeto
    const itemAtual = {
        "data": data.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual)


    /* Antes de enviar para o localstorage é necessário transformar em JSON
    mesmo assim pode sobrescrever, então vamos utilizar um Array de objetos convertidos em json */
    /*itens.push(itemAtual)
    localStorage.setItem("itens", JSON.stringify(itens))


    data.value = ""
    quantidade.value = "" 
})


function criaElemento(item) {

    //<li class="lista_item"> <span>26/07/2024</span> 5,00</li>
                    
    const novoItem = document.createElement('li')
    novoItem.classList.add('lista_item')

    const dataSpan = document.createElement('span')
    dataSpan.innerHTML = item.data
    
    novoItem.appendChild(dataSpan)
    novoItem.innerHTML += item.quantidade

    // Adicionando os items na lista
    lista.appendChild(novoItem)

}
*/

/* ETAPA 05 - Atualizando
vamos supor que em um dia compramos mais uma quantidade de dólar,
entao precisamos atualizar o item para não ter duplicidade.
*/

const form = document.getElementById('addDolar');
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || []; // se tiver itens no localstorage traga, se não, crie um array vazio



itens.forEach((elemento) => {
    criaElemento(elemento);
});

/* ETAPA 05 - Atualizando
vamos supor que em um dia compramos mais uma quantidade de dólar,
entao precisamos atualizar o item para não ter duplicidade.
*/
form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const quantidade = evento.target.elements['quantidade'];
    const data = evento.target.elements['data'];

    // vamos transformar os dados inseridos em um objeto
    const itemAtual = {
        "data": data.value,
        "quantidade": quantidade.value
    };

    // verificando se o item existe na lista
    const existe = itens.find(elemento => elemento.data === data.value);
    if (existe) {
        itemAtual.id = existe.id;
        atualizaElemento(itemAtual);

        // Atualizar o item na lista de itens
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;
    } else {
        itemAtual.id = itens.length > 0 ? itens[itens.length - 1].id + 1 : 0;

        criaElemento(itemAtual);
        itens.push(itemAtual);
    }

    localStorage.setItem("itens", JSON.stringify(itens));

    data.value = "";
    quantidade.value = "";

    location.reload();
});

function criaElemento(item) {
    //<li class="lista_item"> <span>26/07/2024</span> 5,00</li>
                    
    const novoItem = document.createElement('li');
    novoItem.classList.add('lista_item');

    const dataSpan = document.createElement('span');
    dataSpan.innerHTML = item.data;
    dataSpan.dataset.id = item.id; // adicionando um id às datas 
    novoItem.appendChild(dataSpan);
    
    novoItem.innerHTML += item.quantidade;

    novoItem.appendChild(botaoDeleta(item.id));

    // Adicionando os items na lista
    lista.appendChild(novoItem);
}

function atualizaElemento(item) {
    const elemento = document.querySelector("[data-id='" + item.id + "']");
    if (elemento) {
        elemento.innerHTML = item.data;
        elemento.nextSibling.nodeValue = item.quantidade;
    }
}







/* ETAPA 06 -
AGORA VAMOS REMOVER UM ITEM DA MOCHILA 
Ao clicar em cada um item podemos remover
*/

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button");
    elementoBotao.innerHTML= 'X'

    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id);
    });

    return elementoBotao;
}

function deletaElemento(tag, id) {
    tag.remove();

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);
    
    localStorage.setItem("itens", JSON.stringify(itens));
}






/* Função para somar todos valores da lista */

let jsonString = localStorage.getItem('itens');

if(jsonString) {
    let dataArray = JSON.parse(jsonString)

    var totalQuantidade = 0;

    dataArray.forEach(item => {
        totalQuantidade += parseInt(item.quantidade,10)
    });

 
    document.getElementById('saldoTotal').textContent = totalQuantidade.toFixed(2)

} else {
    console.log('Nenhum dado encontrado no localstorage com a chave "dados".')
}


console.log("Se apareceu essa mensagem é porque deu tudo certo, pode ir dormir!")
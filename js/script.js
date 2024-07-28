const form  = document.getElementById('addDolar');
const lista = document.getElementById("lista")

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

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    criaElemento(evento.target.elements['data'].value, evento.target.elements['quantidade'].value)
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

 

}
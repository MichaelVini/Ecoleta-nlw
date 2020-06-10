function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(function(res){return res.json()})
    .then(function(states){
            for(const content of states){
                ufSelect.innerHTML = ufSelect.innerHTML + `<option value = "${content.id}">${content.nome}</option>`
            }
    })
}

    populateUFs()

function getCity(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    const idCity = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

     const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idCity}/municipios`
     citySelect.innerHTML = "<option value>Selecione a cidade<option>"
     citySelect.disabled = true

    fetch(url)
    .then(function(res){return res.json()})
    .then(function(cities){
        for(const content of cities){
            citySelect.innerHTML = citySelect.innerHTML + `<option value = "${content.nome}">${content.nome}</option>`
        } 
        citySelect.disabled = false
    })

    }

document
    //seleciona o seletor de nome uf
    .querySelector("select[name=uf]")
    //acionado quando tiver uma mudança
    .addEventListener("change", getCity)

    //itens de coleta
    //pegar todos os li's
    const itemsToCollect = document.querySelectorAll(".itens-grid li")

    for (const item of itemsToCollect) {
        console.log(item)
        item.addEventListener("click", handleSelectedItem)
    }

const collectedItems = document.querySelector("input[name=items]")
let selectedItems = []

function handleSelectedItem() {
    const itemLi = event.target
    const itemId = event.target.dataset.id

     //adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")

    //verificar se existem items selecionados, se sim
    // pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex(function (item){
    const itemFound = item == itemId
        return itemFound
    })
            
        //caso estaja selecionado,
    if(alreadySelected >= 0){
        //tirar da seleção
        const filteredItems = selectedItems.filter(function (item){
        const itemIsDifferent = item != itemId
            return itemIsDifferent
          })

          selectedItems = filteredItems

        } else{
         //caso n esteja selecionado adicionar a seleção
             selectedItems.push(itemId)
        }
         //atualizar o campo escondido com os itens selecionados
        collectedItems.value = selectedItems
    }
   
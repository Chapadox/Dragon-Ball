const url = 'http://localhost:3000/'

// selecting items
const buttonSearch= document.getElementById('botao')
const productName = document.getElementById('productName')
const productPrice = document.getElementById('productPrice2')
const inputSearch = document.getElementById('pesquisar')
// 

async function get() {
  const getUrl = await fetch('http://localhost:3000')
  const data = await getUrl.json()
  console.log(data)
  showData(data)
}

function showData(dado) {
  if (inputSearch.value == dado[0].codigo_bar) {
    productName.innerHTML = dado[0].nome
    productPrice.innerHTML = dado[0].preço
    inputSearch.value = ''

  } else {
    alert('Codigo de barra não encontrado')
  }
}


buttonSearch.addEventListener('click', get) 
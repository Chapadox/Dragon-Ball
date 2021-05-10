const url = 'http://localhost:3000/'

// selecting items
const buttonSearch = document.getElementById('botao')
const inputSearch = document.getElementById('pesquisar')
const main = document.getElementById('main')
const persoImg = document.getElementById('image')
const testediv = document.getElementById('teste')
// 

// "New Page"
const desc = document.getElementById('description')
const img  = document.getElementById('img') 
// 

async function get() {
  const getUrl = await fetch('http://localhost:3000')
  const data = await getUrl.json()
  console.log(data)
  search(data)
}

function search(dado) {
  for (var i = 0; i < dado.length; i++) {
    if (dado[i].nome === inputSearch.value) {
      inputSearch.value = ''
      main.innerHTML = ''
      desc.innerHTML = dado[i].descrição
      img.src = dado[i].imagem
    }
  }
}


buttonSearch.addEventListener('click', get)
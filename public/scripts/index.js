const url = 'http://localhost:3000/'

// selecting items
const buttonSearch= document.getElementById('botao')
const inputSearch = document.getElementById('pesquisar')
const dv = document.getElementById('main')
// 

async function get() {
  const getUrl = await fetch('http://localhost:3000')
  const data = await getUrl.json()
  console.log(data)
  showData(data)
}

function showData(dado) {
  if (inputSearch.value == dado[0].nome) {
    inputSearch.value = ''
    main.innerHTML = ''

  } else {
    alert('Desculpa, Pokémon não encontrado. ')
  }
}
buttonSearch.addEventListener('click', get) 
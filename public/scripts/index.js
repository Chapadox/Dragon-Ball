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
const descPt2 = document.getElementById('description-pt2') 
// 

async function get() {
  const getUrl = await fetch('http://localhost:3000')
  const data = await getUrl.json()
  console.log(data)
  search(data)
  convert(data)
}

function search(dado) {
  for (var i = 0; i < dado.length; i++) {
    if (dado[i].nome === inputSearch.value) {

      inputSearch.value = ''
      main.innerHTML = ''

      convertDatas(dado[i].descrição, dado[i].descrição_pt2)

      img.src = dado[i].imagem
    }
  }
}

function convertDatas(data, data2) {

  const convertPt2 = JSON.stringify(data2)
  const formatedJsonPt2 = convertPt2.replace(/<br>/g, '<br>')
  const finalStringPt2 = formatedJsonPt2.replace(/"/g, " ")

  const convert = JSON.stringify(data)
  const formatedJson = convert.replace(/<br>/g, '<br>')
  const finalString = formatedJson.replace(/"/g, " ")

  desc.innerHTML = finalString
  descPt2.innerHTML = finalStringPt2
}


buttonSearch.addEventListener('click', get)
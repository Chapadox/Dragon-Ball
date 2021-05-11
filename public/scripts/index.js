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
const divTransfo = document.getElementById('trasforms')
const divDead = document.getElementById('mortes')
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

      convertDatas(dado[i].descrição, dado[i].descrição_pt2)
      trasforms(dado[i].transforms, dado[i].tecnicas)
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

function trasforms(dado, dado2) {
  const convertData = JSON.stringify(dado)
  const replace = convertData.replace(/<br>/g, '<br>')

  const html = '<p><button class="btn btn-success mr-3" type="button" data-toggle="collapse" data-target="#collapseExample"aria-expanded="false" aria-controls="collapseExample">Transformações</button><button class="btn btn-success"type="button" data-toggle="collapse" data-target="#tecnicas" aria-expanded="false" aria-controls="collapseExample">Principais Técnicas</button></p><div class="collapse" id="collapseExample"><div class="card card-body">'+ dado +'</div></div><div class="collapse" id="tecnicas"><div class="card card-body">'+ dado2 +'</div></div></div>'
  divTransfo.innerHTML = html


  // const deadButton = '<p><button class="btn btn-danger" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Mortes</button></p><div class="collapse" id="collapseExample"><div class="card card-body">'+ dado2 + '</div></div>'
  // divDead.innerHTML = deadButton
}


buttonSearch.addEventListener('click', get)
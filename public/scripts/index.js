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
// 

async function get() {
  const requestApi = await fetch(url)
  const data = await requestApi.json()
  search(data)
}

function search(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].nome === inputSearch.value) {

      inputSearch.value = ''
      main.innerHTML = ''

      convertDatas(data[i].descrição, data[i].descrição_pt2)
      extraInfo(data[i].transforms, data[i].tecnicas, data[i].nvlPoder)
      img.src = data[i].imagem
    }
  }
}


function convertDatas(descr, descr2) {

  const convert = JSON.stringify(descr)
  const replace = convert.replace(/<br>/g, '<br>')
  const finalString = replace.replace(/"/g, " ")

  const convertDescr2 = JSON.stringify(descr2)
  const replaceDescr2 = convertDescr2.replace(/<br>/g, '<br>')
  const finalString2 = replaceDescr2.replace(/"/g, " ")

  desc.innerHTML = finalString
  descPt2.innerHTML = finalString2
}

function extraInfo(transformações, tecnicas, nivelDPoder) {
  const convertData = JSON.stringify(transformações)

  const html = '<p><button class="btn btn-primary mr-3" type="button" data-toggle="collapse" data-target="#nvlPoder" aria-expanded="false" aria-controls="collapseExample">Nivel De Poder</button><button class="btn btn-primary mr-3" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Transformações</button><button class="btn btn-primary"type="button" data-toggle="collapse" data-target="#tecnicas" aria-expanded="false" aria-controls="collapseExample">Principais Técnicas</button></p><div class="collapse" id="collapseExample"><div class="card card-body">'+ transformações +'</div></div><div class="collapse" id="tecnicas"><div class="card card-body">'+ tecnicas +'</div></div><div class="collapse" id="nvlPoder"><div class="card card-body">'+ `Ultimo registro: ${nivelDPoder}` +'</div></div></div>'
  divTransfo.innerHTML = html
}


buttonSearch.addEventListener('click', get)
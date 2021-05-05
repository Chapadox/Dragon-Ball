const fs = require('fs')
const path = require('path')

const db = path.join(__dirname, '../db/produtos.json')

function getProdutos() {
  const data = fs.readFileSync(db)

  try {
      return JSON.parse(data)
  } catch (err) {
      return []
  }
}

function postProducts(prodcts) {
  fs.writeFileSync(db, JSON.stringify(prodcts, null, '\t'))
}



const Api = app => {
  app.route('/')
    .get((req, res) => {
      res.send(getProdutos())
    })

    .post((req, res) => {
      const prodcts = getProdutos()
      const bdy = req.body

      prodcts.push(bdy)
      postProducts(prodcts)
      res.send('Produto adicionado')
    })
}

module.exports = Api
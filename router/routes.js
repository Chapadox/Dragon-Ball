const fs = require('fs')
const path = require('path')

const db = path.join(__dirname, '../db/db.json')

function getPokemons() {
  const data = fs.readFileSync(db)

  try {
      return JSON.parse(data)
  } catch (err) {
      return []
  }
}

function postPokemon(prodcts) {
  fs.writeFileSync(db, JSON.stringify(prodcts, null, '\t'))
}



const Api = app => {
  app.route('/')
    .get((req, res) => {
      res.send(getPokemons())
    })

    .post((req, res) => {
      const prodcts = getPokemons()
      const bdy = req.body

      prodcts.push(bdy)
      postPokemon(prodcts)
      res.send('Pokémon adicionado')
    })
}

module.exports = Api
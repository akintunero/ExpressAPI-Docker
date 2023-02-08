const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([{
  name: 'Olumayowa',
  email: 'akintunero101@gmail.com',
  Twitter: '@akintunero'
}]))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
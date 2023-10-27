const express = require('express')
const app = express()
const port = 5000

app.get('/api/rosa', (req, res) => {
  res.send('{Hello ROSA! - v4}')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

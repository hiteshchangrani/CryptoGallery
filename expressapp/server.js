const express = require('express')
const cors= require('cors');
const axios= require('axios')
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

// app.get('/', async (req, res) => {
//   const param= req.query
//   console.log(param);
  
//   const {data}= await axios.get(`${param.server}/coins/markets?vs_currency=${param.currency}&page=${param.page}`);
//   res.json(data);
  
// })

app.get('/', async (req, res) => {
  const param= req.query
  console.log(param);
  
  const {data:charData}= await axios.get(`${param.server}/coins/${param.id}/market_chart?vs_currency=${param.currency}&days=${param.days}`);
  console.log(charData)
  res.json(charData.prices);
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
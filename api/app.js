require('dotenv').config()
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')
//const fileUpload = require('express-fileupload')


const apiRoutes = require('./routes')

const app = express()

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(cors())
app.use(bodyParser.json())

app.use('/', apiRoutes)

app.get('/', (req, res) => {
  res.send({
    message: 'hi',
  })
})


/*app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: './tmp/'
  })
)*/

app.use(express.static('./client/public/img'))

app.listen(process.env.API_PORT, () => {
  console.log(`Starting server in PORT ${process.env.PORT}`)
})

let fs = require('fs')
let axios = require('axios')
require('dotenv').config()

const typeMods = [
  'accept',
  'address',
  'boom',
  'code',
  'cryptiles',
  'file',
  'formula',
  'hoek',
  'iron',
  'lab',
  'pinpoint',
  'teamwork',
  'topo',
  'wreck'
]

for (let mod of typeMods) {
  let dir = './static/lib/types/' + mod
  if (!fs.existsSync(dir)) {
    fs.mkdir(dir, err => {
      if (err) throw err
    })
  }
  getIndexes(mod)
}

async function getIndexes(mod) {
  const options = {
    headers: {
      accept: 'application/vnd.github.v3.raw+json',
      authorization: 'token ' + process.env.GITHUB_TOKEN
    }
  }
  let res = await axios.get('https://api.github.com/repos/hapijs/' + mod + '/contents/lib/index.d.ts', options)
  await fs.appendFile('./static/lib/types/' + mod + '/index.d.ts', res.data, function(err) {
    if (err) throw err
  })
}

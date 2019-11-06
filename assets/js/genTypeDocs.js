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
  let dir = './static/lib/typeIndexes/' + mod
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
  let branches = await axios.get(
    "https://api.github.com/repos/hapijs/" + mod + "/branches",
    options
  )
  for (let branch of branches.data) {
    let packageJSON = await axios.get('https://api.github.com/repos/hapijs/' + mod + '/contents/package.json?ref=' + branch.name, options)
    if (packageJSON.data.types) {
      let dir = './static/lib/typeIndexes/' + mod + '/' + packageJSON.data.version
      if (!fs.existsSync(dir)) {
        fs.mkdir(dir, err => {
          if (err) throw err
        })
      }
      let res = await axios.get('https://api.github.com/repos/hapijs/' + mod + '/contents/lib/index.d.ts?ref=' + branch.name, options)
      await fs.writeFile(dir + '/index.d.ts', res.data, function(err) {
        if (err) throw err
      })
    }
  }
  // let app = await new TypeDoc.Application({
  //   mode: 'file',
  //   target: 'ES6',
  //   readme: 'none',
  //   includeDeclarations: true,
  //   ignoreCompilerErrors: true,
  //   disableOutputCheck: true,
  //   excludeExternals: true,
  //   plugin: 'typedoc-plugin-markdown',
  // })

  // let project = await app.convert(app.expandInputFiles(['./static/lib/typeIndexes/' + mod]))

  // if (project) {
  //   const outputDir = './static/lib/typeDocs/' + mod
  //   await app.generateDocs(project, outputDir)
  // }
}

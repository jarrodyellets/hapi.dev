
let fs = require("fs")

getInfo()

async function getInfo() {
  let today = new Date()
  console.log(today)
  await fs.writeFile('./static/lib/apiTest.md', today, function(err) {
    if (err) throw err
  })
}
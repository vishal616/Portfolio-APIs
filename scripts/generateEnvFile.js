const fs = require('fs')
fs.writeFileSync('../.env', `fromEmail=${process.env.fromEmail}\nfromPassword=${process.env.fromPassword}\nsendToEmail=${process.env.sendToEmail}`)
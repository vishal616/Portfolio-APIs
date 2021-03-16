const fs = require('fs')
fs.writeFileSync('../.env',
    `API_KEY=${process.env.API_KEY}
fromEmail=${process.env.fromEmail}
fromPassword=${process.env.fromPassword}
sendToEmail=${process.env.sendToEmail}
    `)
const express = require('express')

const app = express();

app.use( express.static( `${__dirname}/..`));

const PORT = 5005
app.listen(PORT, console.log(`Listening on port ${PORT}`))
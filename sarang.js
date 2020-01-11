const express_box = require('express')
const app = express_box()

app.get('/', function (req, res) {
    res.send("띠옹")
})

app.get('/min', function (req, res) {
    res.send("뿅")
})

// app.get('/', (req, res) => {
//     res.send("hello world!")
// })

app.listen(3000, function () {
    console.log("System is working")
})
const express = require('express')
const app = express() 
const path = require('path')
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get("/register.html", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get("/productdetail.html", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productdetail.html'))
})

app.get("/shoppingcart.html", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/shoppingcart.html'))
})


app.listen(3050, () => {
    console.log("Escuchando en el servidor 3050")
})
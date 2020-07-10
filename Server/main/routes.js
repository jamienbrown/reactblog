var express = require('express')

//.Router is a given function from express, didn't have to set it up. The result of the router function is what allows us to make http requests
var router = express.Router()

// the /hello is a relative path so you don't have to do the whole http://localhost:5000/hello 
// req is short for request, and res is short for response from the server.
router.get('/hello', function (req, res ) {
    // convert the server response to json of the string 'hello world'
    res.json('hello world')
})


module.exports = router
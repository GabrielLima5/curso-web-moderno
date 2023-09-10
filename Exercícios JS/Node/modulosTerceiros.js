const _ = require('lodash')
setInterval(function(){
    console.log(_.random(1, 1000))
}, 1000)
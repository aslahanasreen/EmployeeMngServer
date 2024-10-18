const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE).then(res=>{
    console.log('Server connected to DataBase')
}).catch(err=>{
    console.log(err)
})
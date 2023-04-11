const express = require('express');
const app =express();

app.use((req, res)=>{
    console.log("WE GOT A REQUEST!")
    res.send("Yow We got your request!!")
})

app.listen(3000, ()=>{
    console.log('LISTENING ON PORT 3000!')
})

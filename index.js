const express = require('express');

const app = express();

// function rootCall(req,res){
//     res.send('Thank You Very Much');
// }
app.get('/',(req,res) =>{
    res.send("Thanks For Calling")
});

app.listen(3000,()=> console.log('listening to port 3000'));


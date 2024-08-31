const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middlerare
app.use(cors());
app.use(express.json());



app.get('/',(req,res)=>{
    res.send('Coffee making server is runnig')
})

app.listen(port,()=>{
    console.log(`coffee server is running on port${5000}`)
})
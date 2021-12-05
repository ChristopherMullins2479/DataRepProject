const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');
                    
const strConnection = 'mongodb+srv://admin:iamtheadmin@cluster0.bvlvr.mongodb.net/Ireland?retryWrites=true&w=majority'


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(strConnection);
}

const countySchema = new mongoose.Schema({
    Name:String,
    Population:String,
    Flag:String
});

const countyModel = mongoose.model('county', countySchema);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/counties', (req,res)=>{
    console.log(req.body);
    console.log(req.body.Name);
    console.log(req.body.Population);
    console.log(req.body.Flag);

    countyModel.create({
        Name:req.body.Name,
        Population:req.body.Population,
        Flag:req.body.Flag
    });
    res.send('Data Sent to Server!')
})

app.get('/api/counties/:id',(req, res)=>{
    console.log(req.params.id);

    countyModel.findById(req.params.id,(error,data)=>{
        res.json(data);
    })
})

app.delete('/api/counties/:id',(req,res)=>{
    console.log("DELETE: "+req.params.id);

    countyModel.deleteOne({_id:req.params.id},
        (error,data)=>{
            if(error)
                res.send(error);
            
            res.send(data);
        })
})

app.put('/api/counties/:id',(req, res)=>{
    console.log('update');
    console.log(req.body);
    console.log("Updating: " + req.params.id);

    countyModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })

})

app.get('/api/counties', (req, res) => {
    countyModel.find((err, data)=>{
        res.json(data);
    })
          
           // https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg
      
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
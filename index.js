var express =require("express");
require("./db")

var app=express();
var port=3000;
var empModel=require("./model/employee")
app.use(express.json())
app.post('/',(req,res)=>{
    try{
        empModel(req.body).save();
        res.send("data added")
    }catch(error){
        res.send(error)
    }
})
app.get('/',async(req,res)=>{
    try{
        var data=await empModel.find();
        res.send(data)
    }
    catch(error){
        res.send(error)
    }
})
app.delete('/:id',async(req,res)=>{
    try{
        console.log(req.params.id);
        await empModel.findByIdAndDelete(req.params.id);
        res.send("Data deleted");
    } catch(error){
        res.send(error);
    }
})
app.put('/:id',async(req,res)=>{
    try{
        await empModel.findByIdAndUpdate(req.params.id,req.body);
        res.send("edited")
    }catch(error){
        res.send(error)
    }
})

app.get('/:id',async(req,res)=>{
    try{
        var data = await empModel.findById(req.params.id);
        res.send(data)
    }catch(errror) {
        res.send(error)
    }
})
app.listen(port,()=>{
    console.log(`Server is up and running in ${port}`)
});
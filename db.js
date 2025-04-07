var mongoose = require("mongoose");

mongoose.
connect("mongodb+srv://ashwinnathkr:a9447238299@cluster0.ivxwba1.mongodb.net/ashwin?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("CONNECTED TO DB")
})
.catch((err)=>(console.log(err)))
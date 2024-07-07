import express ,{Express}from 'express';


const app:Express=express();

app.get('/',function(req,res){
    res.json({
        message:"app is running "
    })
})


app.listen(3000,()=>console.log('app is listning on PORT 3000'))

const express = require('express')


const app = express();
app.set('view engine', 'ejs');
app.get('/',(req,resp)=>{
    resp.render('index');
})
 
app.get('/user', (req, res) => {
    res.render('user');
  });
  
  app.get('/admin', (req, res) => {
    res.render('admin');
  });



const PORT=3800

app.listen(3800,()=>{
    console.log(`server is running on Port ${PORT}`);
})
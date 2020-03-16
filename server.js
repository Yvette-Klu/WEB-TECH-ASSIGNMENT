const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

const pupils = [
    {name:"Yvette klu",
    dob:"22/17/1990",
    programme:"cs",
    level:"200",
    image:"/images/yve.jpg"
},
{
    name:"Dominic Goofy ",
    dob:"22/76/8906",
    programmes:"cs",
    level:"300",
    image:"/images/dom.jpg"
},
{
    name:"Bruce Yaa",
    dob:"22/76/2000",
    programmes:"cs",
    level:"400",
    image:"/images/bruce.jpg"
},
]

app.get('/',(req,res)=>{
  res.render('home',{
      pupils
  })
});
app.get('/:id', (req, res)=>{
    const id = req.params.id;
    const pupil = pupils[id];
    res.render('details',{
        pupil
    });
});

const port=3000;

app.listen(port,()=>{
    console.log('server running....');
});

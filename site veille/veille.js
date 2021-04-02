
    var express = require('express');  
    var app = express();  
    fs = require('fs');
    app.get('/myform', function(req, res){  
    let myObject={
      Titre:req.query.Titre,
     date_exposé:req.query.date_exposé,
     line:req.query.line,Réailiser:req.query.Réailiser
     
     }
    let data = fs.readFileSync('veille1.json');
    let users = JSON.parse(data);
    users.push(myObject);
    fs.writeFile('veille1.json', JSON.stringify(users), function (err) {
        if (err) return console.log(err);
      });
      res.redirect('http://127.0.0.1:5500/site%20veille/liste.html')
    
});  
app.listen(4000);



var ok =document.getElementById("ok");
var h1 = document.getElementById("h1");
  var pageNum=1;

ok.addEventListener("click",function(){
    var xReq = new XMLHttpRequest();
xReq.open('get','veille'+ pageNum +'.json');
xReq.onload = function(){
var xdata =JSON.parse(xReq.responseText);

       addHtml(xdata);
};
    pageNum++;
xReq.send();
if (pageNum>1 ){
    ok.classList.add("btnx");
    ok.style.backgroundColor="#eee";
    ok.style.color =" lightgray";
}
});





var clkik = document.getElementById("clkik");
clkik.addEventListener("click",function(){
    event.preventDefault();
    var xReq = new XMLHttpRequest();
xReq.open('get','veille1.json');
xReq.onload = function(){

var xdata =JSON.parse(xReq.responseText);

for (i=0;i<xdata.length;i++){
 if(xdata[i].Titre==document.getElementById("search").value){
   
  var h1=document.getElementById("h1");
  h1.innerHTML+="<tr>"+"<td>"+xdata[i].Titre+"</td>"+"<td>"+xdata[i].date_exposé+"</td>"+"<td>"+xdata[i].Réailiser+"</td>"+"<td>"+xdata[i].line+"</td>"+"</tr>";
  
 }
 
 
 }
};
});


function addHtml(xdata){
    
    var a  ;
    for (i=0; i<xdata.length; i++){
        a +="<tr>"+"<td>"+xdata[i].Titre+"</td>"+"<td>"+xdata[i].date_exposé+"</td>"+"<td>"+xdata[i].Réailiser+"</td>"+"<td>"+xdata[i].line+"</td>"+"</tr>";
      }
      h1.insertAdjacentHTML('beforeend',a);
    ;
}

























// ajouter
// 
    // var titre = document.getElementById("titre");
    // var date = document.getElementById("date");
    // var Réailiser= document.getElementById("Réailiser");
    // var line = document.getElementById("line");
    // var valide = document.getElementById("valide");
    // var  v += titre+date+Réailiser+line;
// 
//  valide.addEventListener("click",function(){
    // var xReq = new XMLHttpRequest();
    // xReq.open('get','veille2.json');
    // xReq+=myJSON;
    // xReq.onload = function(){
//    
    // 
// 
    // 
// valide.addEventListener("click",function(){
    // var myObj = {name: "John", age: 31, city: "New York"};
    // var myJSON = JSON.stringify(myObj);
    // event.preventDefault();
    // var xReq = new XMLHttpRequest();
// xReq.open('get','veille2.json');
// xReq+=myJSON;
// xReq.onload = function(){
// 
// var r =JSON.parse(xReq.responseText);
// 
    //   document.write(r[0].name);
// }
// });
// 
// 
// 
// 
// 
// var fs = require('fs'); 
// var obj = { table: [] };
//  fs.exists('myjsonfile.json', function(exists){ if(exists){ console.log("yes file exists"); 
//  fs.readFile('myjsonfile.json', function readFileCallback(err, data){ if (err){ console.log(err);
//  }
//   else { 
    //   obj = JSON.parse(data);
    //  for (i=0; i<5 ; i++){ obj.table.push({id: i, square:i*i});
    //  }
    //   var json = JSON.stringify(obj);
    //    fs.writeFile('myjsonfile.json', json); 
    // }}); 
// } 
// else 
// { 
    // console.log("file not exists") 
// for (i=0; i<5 ; i++){
    //  obj.table.push({id: i, square:i*i});
    //  } 
    //  var json = JSON.stringify(obj); 
    //  fs.writeFile('myjsonfile.json', json);
    //  } 
    // });




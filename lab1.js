const express = require('express');
var bodyParser = require('body-parser');
//khoi tao
const app = express()
//port 
const port = 3000
//route get /
app.get("/",(req, res, next)=>{
    console.log('/home');
    res.send('<h2>Home page</h2>')
})
app.use(express.urlencoded());
app.use(bodyParser.urlencoded());
//form-urlencoded
//router
app.post("/product",(req, res,next)=>{
    console.log(req.body);
    res.send("<h2>Product Add page</h2>" )
})
app.get("/product/:id",(req, res, next)=>{
    console.log(req.params.id   );
    res.send(`<h2>Product Detail id: ${req.params.id}</h2>`);
})
const inventors = [
    { id:1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id:2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { id:3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { id:4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { id:5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { id:6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }
];

app.get('/inventors', (req, res) => {
    let list='<h2>Danh sách nhà khoa học<ul>';
 inventors.forEach(e => {
 list+=`<li><a style="text-decoration:none;color:green;" href="/inventor/${e.id}">${e.last}</a></li>`;
 });
 list+='</ul></h2>';
 res.send(list);
    const inventorList = inventors.map(e => {
        return {
            id: e.id,
            name: `${e.first} ${e.last}`,
            year: e.year,
            passed: e.passed
        };
    });

    // Trả về danh sách nhà khoa học dưới dạng JSON và status code 200 (OK)
    res.status(200).json(inventorList);
});
app.get('/inventor/:id', (req, res) => {
    let id=req.params.id;
    inventor=inventors.find(e=>e.id==id);
    info=`<h2>Thông tin chi tiết nhà khoa học:Full name: ${inventor.first} ${inventor.last}, Year: ${inventor.year}, 
   Passed: ${inventor.passed}</h2>`;
    res.send(info);
   });
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

  app.get('/add-inventor', (req, res) => {
    res.send(`
    <h1>Thêm Nhà Khoa Học</h1>
    <form action="/inventor" method="POST">
        <input type="text" name="first" placeholder="Nhập tên">
        <input type="text" name="last" placeholder="Nhập họ">
        <br>
        <input type="number" name="year" placeholder="Năm sinh">
        <input type="number" name="passed" placeholder="Năm qua đời">
        <br>
        <button type="submit">Thêm Nhà Khoa Học</button>
    </form>
`)});
app.post('/inventor', (req, res) => { 
    let newInventor=req.body; 
    newInventor.id=inventors.length+1; 
    inventors.push(newInventor); 
    res.redirect('/inventors'); 
    }); 
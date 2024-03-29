const express = require('express');
var bodyParser = require('body-parser');
//khoi tao
const app = express()
//port 
const port = 3000
//use ejs
app.set("view engine", "ejs");
app.set("views", "./views");

//route get /
app.get("/home",(req, res)=>{
   
    res.render("home", {kindOfDay: "Thu Sau"})
})
// app.use(express.urlencoded());
// app.use(bodyParser.urlencoded());
// //form-urlencoded
// //router
// app.post("/product",(req, res,next)=>{
//     console.log(req.body);
//     res.send("<h2>Product Add page</h2>" )
// })
// app.get("/product/:id",(req, res, next)=>{
//     console.log(req.params.id   );
//     res.send(`<h2>Product Detail id: ${req.params.id}</h2>`);
// })
// const inventors = [
//     { id:1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//     { id:2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { id:3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { id:4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//     { id:5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//     { id:6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }
// ];

// app.get('/inventors', (req, res) => {
//     let list='<h2>Danh sách nhà khoa học<ul>';
//  inventors.forEach(e => {
//  list+=`<li><a style="text-decoration:none;color:green;" href="/inventor/${e.id}">${e.last}</a></li>`;
//  });
//  list+='</ul></h2>';
//  res.send(list);
//     const inventorList = inventors.map(e => {
//         return {
//             id: e.id,
//             name: `${e.first} ${e.last}`,
//             year: e.year,
//             passed: e.passed
//         };
//     });

//     // Trả về danh sách nhà khoa học dưới dạng JSON và status code 200 (OK)
//     res.status(200).json(inventorList);
// });
// app.get('/inventor/:id', (req, res) => {
//     let id=req.params.id;
//     inventor=inventors.find(e=>e.id==id);
//     info=`<h2>Thông tin chi tiết nhà khoa học:Full name: ${inventor.first} ${inventor.last}, Year: ${inventor.year}, 
//    Passed: ${inventor.passed}</h2>`;
//     res.send(info);
//    });
app.use(express.static("public")); 
//router 
app.get("/",(req,res)=>{ 
    var today=new Date(); 
    currentDay=today.getDay(); 
    var day=''; 
    switch(currentDay){ 
        case 0: 
            day='Chủ nhật'; 
            break; 
        case 1: 
            day = 'Thứ hai'; 
            break; 
        case 2: 
            day = 'Thứ ba'; 
            break; 
        case 3: 
            day = 'Thứ tư'; 
            break; 
        case 4: 
            day = 'Thứ năm'; 
            break; 
        case 5: 
            day = 'Thứ sáu'; 
            break; 
        case 6: 
            day = 'Thứ bảy'; 
            break; 
        default: 
            console.log(`Error: ${currentDay}`); 
    } 
    res.render('home',{kindOfDay:day}); 
})
var listProduct=[ 
    { 
        id:1,
        title:'Apple Book', 
        price:3000, 
        description:"A very interesting book about so many even more interesting things!", 
        imageURL:"book.jpg", 
    }, 
    {  id:2, 
        title:'Microsoft Book', 
        price:2000, 
        description:"A very interesting book about so many even more interesting things!", 
        imageURL:"book.jpg", 
    }, 
    { 
        id:3, 
        title:'VFast Book', 
        price:1000, 
        description:"A very interesting book about so many even more interesting things!", 
        imageURL:"book.jpg", 
    }       
]; 

app.get("/shop",(req,res)=>{ 
    res.render('shop',{products:listProduct}); 
    
}) 

    var multer=require('multer'); 
//khai báo sử dụng multer 
// SET STORAGE 
var storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
      cb(null, './public/images') 
    }, 
    filename: function (req, file, cb) { 
      cb(null, Date.now()+'-'+file.originalname ) 
    } 
  }) 
  var upload = multer({ storage: storage }) ;
  app.get('/addnew',(req,res)=>{

    res.render('addnew',); 
  })
  app.get("/product/:id", (req, res) => {
    // Lấy ID sản phẩm từ tham số đường dẫn
    const productId = req.params.id;
    
    // Tìm sản phẩm trong danh sách dựa trên ID
    const product = listProduct.find(item => item.id == productId);
    
    // Kiểm tra xem sản phẩm có tồn tại không
    if (product) {
        // Render trang chi tiết sản phẩm với dữ liệu sản phẩm tương ứng
        res.render('product_detail', { product: product });
    } else {
        // Nếu không tìm thấy sản phẩm, trả về trang 404 hoặc thông báo lỗi khác
        res.status(404).send("Sản phẩm không tồn tại");
    }
});
  app.post('/addnew', upload.single('nameImage'),(req, res) => { 
    
    //lấy dữ liệu từ form sau khi upload anh 
       const file = req.file 
       let title=req.body.productName; 
       let price=req.body.price; 
       let description=req.body.description; 
       let nameImage=file.filename; 
    //Thêm vào mảng json 1 cuối sách mới 
       listProduct.push({ 
           id:5, 
           title:title, 
           price:price, 
           description:description, 
           imageURL:nameImage, 
       }) 
    //chuyển về trang sản phẩm 
       res.redirect('/shop'); 
   }); 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });


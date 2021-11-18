var express=require("express");
var server=express();
var cors=require("cors");
server.use(express.urlencoded({extended: false}))
server.use(express.static("public"));
server.use(cors());
// server.get('/:uname',(req,res)=>{ 
//     var name= req.params.uname
//     res.send(`<h1>Welcome ${name}</h1>`);
//     res.end();
// })

// server.get('/blocks', (request, response) => {
//        var blocks = ['Fixed', 'Movable', 'Rotating'];                     
//     if (request.query.limit >= 0)    {                           
//          response.send(blocks.slice(0, request.query.limit));               
//          } else    {                            
//              response.send(blocks);                   
//              }
//     });

server.post('/addEmployee',(req,res)=>{ 
    var emp= req.body.emp;
    console.log(emp);
    res.send("Hello");
    res.end();
})


server.get("/blocks/:bname",(request,response)=>{ 
       var blocks = {       
          'Fixed':'Fastened securely in a position',          
           'Movable': 'Capable of moving around',         
            'Rotating': 'Moving in a circle around its center'      
          };       
         var description = blocks[request.params.bname];           
                 if(!description)    {       
                             response.status(404).send('No description found for ' + request.params.bname);     
                  } else     {               
                       response.send(description);        
                  }    
                })


server.listen(7000,()=>console.log("Server listening on port 3000!!"))
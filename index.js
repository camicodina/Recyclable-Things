//BACK

const fs = require('fs');
const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const cors = require("cors")
//Libreria para pre-procesar imagen que me envian y guardarla en directorio
const multer = require("multer")
const upload = multer({dest:"/tmp"})
const path = require("path")

//express
const express = require("express");
var app = express()


//Input y output son JSON files
const bodyParser = require("body-parser")

app.use(
  bodyParser.urlencoded({
     extended:true
  })
)
app.use(bodyParser.json())
app.use(cors({
  origin:true,
  credentials:true
}))

//EJS es renderizador de archivos HTML. Hay que decirle donde estan los visual

app.use(express.static(path.join(__dirname, "/public")))
app.set("views", path.join(__dirname, "/views"))

app.set("view engine", "ejs")
app.engine("html", require("ejs").renderFile)

app.get("/", (req, res)=>{
  res.render("index.html")
})


app.post("/",upload.single("image"),(req,res)=>{
      
    visualRecognition.classify({
      imagesFile: fs.createReadStream(req.file.path),
      classifierIds: ["<name of the model>"],
      threshold:0.6
    }
    )
    .then(response => {
      console.log(response)
      let visualTest = response.result.images[0].classifiers[0].classes;
      res.json(visualTest)
    })
    .catch(err => {
      console.log(err);
    });

})


//Levanto servidor
app.listen(8080, "localhost",()=>console.log("Server ok"))


const visualRecognition = new VisualRecognitionV3({
  url: '<url of your model>',
  version: '<version>',
  authenticator: new IamAuthenticator({ apikey: '<api key>' }),
});

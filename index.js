import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("write.ejs");
});

app.post("/submit",(req,res)=>{
    const titleOfWriting = req.body["title"];
    const contentOfWirtion = req.body["content"];
    res.render("write.ejs");
})

app.get("/read", (req, res) => {
    res.render("read.ejs");
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});


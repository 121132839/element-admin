const express = require("express");
const app = express();

const mongoose = require("mongoose");

//跨域
app.use(require('cors')());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/elemet-admin", {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
});

const Article = mongoose.model("Article", new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
}))





app.get("/", async (req, res) => {
    res.send("index");
});

//create article
app.post("/api/articles", async (req, res) => {
    const article = await Article.create(req.body)
    res.send(article)
})
//list
app.get("/api/articles", async (req, res) => {
    const article = await Article.find();
    res.send(article);
})
//delete
app.delete("/api/article/:id", async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.send({
        status: true
    });
});
//detail
app.get("/api/article/:id", async (req, res) => {
    const article = await Article.findById(req.params.id);
    console.log(article);
    res.send(article);

})
//改
app.put("/api/article/:id", async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id,req.body)
    res.send(article)
})


app.listen(3001, () => {
    console.log("http://localhost:3001");
});
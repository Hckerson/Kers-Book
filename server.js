// server.js
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from 'path';
import fs from 'fs';
import express, { response } from "express";
import bodyParser from "body-parser";
import axios from "axios";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;
const API_URL = "http://localhost:4000";

// Serve static files from the "public" directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Route to serve the index.html from the "views" directory
app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/books/novella", async (req, res) => {
    try{
        const response = await axios.get(`${API_URL}/books/novella`);
        res.render("render.ejs", {posts: response.data});
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
})

app.get("/books/fantasy", async (req, res) => {
    try{
        const response = await axios.get(`${API_URL}/books/fantasy`);
        res.render("render.ejs", {posts: response.data});
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
})

app.get("/books/romance", async (req, res) => {
    try{
        const response = await axios.get(`${API_URL}/books/romance`);
        res.render("render.ejs", {posts: response.data});
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
})

app.get("/books/horror", async (req, res) => {
    try{
        const response = await axios.get(`${API_URL}/books/horror`);
        res.render("render.ejs", {posts: response.data});
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
})

app.get("/books/short_story",async (req, res) => {
    try{
        const response = await axios.get(`${API_URL}/books/short_story`);
        res.render("render.ejs", {posts: response.data});
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
})

app.get("/books/picture_book", async (req, res) => {
    try{
        const response = await axios.get(`${API_URL}/books/picture_book`);
        res.render("render.ejs", {posts: response.data});
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
})

app.get("/books/chapter_book", async (req, res) => {
    try{
        const response = await axios.get(`${API_URL}/books/chapter_book`);
        res.render("render.ejs", {posts: response.data});
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage});
    }
})

app.get("/create-post", async (req, res) =>{
    res.render("create-post.ejs");
})

app.get("/books/chapter_book/edit/:id", async (req, res) =>{
    try{
        const response = await axios.get(`${API_URL}/books/chapter_book/edit/${req.params.id}`);
        res.render("create-post.ejs", {post : response.data});
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage});
    }
});

app.get("/books/novella/edit/:id", async (req, res) =>{
    try{
        const response = await axios.get(`${API_URL}/books/novella/edit/${req.params.id}`);
        res.render("create-post.ejs", {post : response.data});
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage});
    }
});

app.get("/books/fantasy/edit/:id", async (req, res) =>{
    try{
        const response = await axios.get(`${API_URL}/books/fantasy/edit/${req.params.id}`);
        res.render("create-post.ejs", {post : response.data});
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage});
    }
});

app.get("/books/horror/edit/:id", async (req, res) =>{
    try{
        const response = await axios.get(`${API_URL}/books/horror/edit/${req.params.id}`);
        res.render("create-post.ejs", {post : response.data});
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage});
    }
});

app.get("/books/picture_book/edit/:id", async (req, res) =>{
    try{
        const response = await axios.get(`${API_URL}/books/picture_book/edit/${req.params.id}`);
        res.render("create-post.ejs", {post : response.data});
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage});
    }
});

app.get("/books/romance/edit/:id", async (req, res) =>{
    try{
        const response = await axios.get(`${API_URL}/books/romance/edit/${req.params.id}`);
        res.render("create-post.ejs", {post : response.data});
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage});
    }
});

app.get("/books/short_story/edit/:id", async (req, res) =>{
    try{
        const response = await axios.get(`${API_URL}/books/short_story/edit/${req.params.id}`);
        res.render("create-post.ejs", {post : response.data});
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage});
    }
});

app.post("/books/new_post", async (req, res) =>{
    try{
        const response = await axios.post(`${API_URL}/books/${req.body.category}`, req.body);
        console.log(response.data);
        res.redirect("/");
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage});
    }
})

app.post("/books/update/:id", async (req, res) => {
    try{
        const response = await axios.patch(`${API_URL}/books/${req.body.category}/${req.params.id}`, req.body);
        console.log(response.data)
        res.redirect("/");
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
});

app.get("/books/short_story/delete/:id", async (req, res) =>{
    try{
        await axios.delete(`${API_URL}/short_story/delete/${req.params.id}`);
        res.redirect("/")
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
});

app.get("/books/romance/delete/:id", async (req, res) =>{
    try{
        await axios.delete(`${API_URL}/romance/delete/${req.params.id}`);
        res.redirect("/")
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
});

app.get("/books/picture_book/delete/:id", async (req, res) =>{
    try{
        await axios.delete(`${API_URL}/picture_book/delete/${req.params.id}`);
        res.redirect("/")
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
});

app.get("/books/novella/delete/:id", async (req, res) =>{
    try{
        await axios.delete(`${API_URL}/novella/delete/${req.params.id}`);
        res.redirect("/")
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
});

app.get("/books/horror/delete/:id", async (req, res) =>{
    try{
        await axios.delete(`${API_URL}/horror/delete/${req.params.id}`);
        res.redirect("/")
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
});

app.get("/books/fantasy/delete/:id", async (req, res) =>{
    try{
        await axios.delete(`${API_URL}/fantasy/delete/${req.params.id}`);
        res.redirect("/")
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
});

app.get("/books/chapter_book/delete/:id", async (req, res) =>{
    try{
        await axios.delete(`${API_URL}/chapter_book/delete/${req.params.id}`);
        res.redirect("/")
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
});

app.get("/books/novella/:id", async (req, res) =>{
    try{
        const response = await axios.get(`${API_URL}/novella/${req.params.id}`);
        const result = response.data;
        res.render("book_render.ejs", {body : result})
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
});

app.get("/books/chapter_book/:id", async (req, res) =>{
    try{
        const response = await axios.get(`${API_URL}/chapter_book/${req.params.id}`);
        const result = response.data;
        res.render("book_render.ejs", {body : result})
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
});

app.get("/books/fantasy/:id", async (req, res) =>{
    try{
        const response = await axios.get(`${API_URL}/fantasy/${req.params.id}`);
        const result = response.data;
        res.render("book_render.ejs", {body : result})
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
});

app.get("/books/horror/:id", async (req, res) =>{
    try{
        const response = await axios.get(`${API_URL}/horror/${req.params.id}`);
        const result = response.data;
        res.render("book_render.ejs", {body : result})
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
});

app.get("/books/picture_book/:id", async (req, res) =>{
    try{
        const response = await axios.get(`${API_URL}/picture_book/${req.params.id}`);
        const result = response.data;
        res.render("book_render.ejs", {body : result})
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
});

app.get("/books/romance/:id", async (req, res) =>{
    try{
        const response = await axios.get(`${API_URL}/romance/${req.params.id}`);
        const result = response.data;
        res.render("book_render.ejs", {body : result})
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
});

app.get("/books/short_story/:id", async (req, res) =>{
    try{
        const response = await axios.get(`${API_URL}/short_story/${req.params.id}`);
        const result = response.data;
        res.render("book_render.ejs", {body : result})
    }catch(error){
        const errorMessage = error.response ? error.response.data : error.message;
        res.render("error.ejs", {error : errorMessage})
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

import express from "express";
import postRoute from "./routes/post.route.js";

const app = express();

app.use("/api/posts", postRoute);

app.listen(8080, () => {
  console.log("Server is running!");
});

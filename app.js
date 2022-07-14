const express = require("express");
const path = require("path");
const main = require("./configs/mongo");
const Router = require("./router/api");

const app = express();

main().catch((error) => console.log(error));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", Router);

app.listen(process.env.PORT || 3000, () => console.log("server running"));

const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
app.use(express.json())


const PORT = process.env.PORT;

const indexRouter = require("./routes/index")
const productCtrl = require("./routes/product")
const authRouter = require("./routes/auth")
const cartRouter = require("./routes/cart")
const newsLetterRouter = require("./routes/newsletter")

app.use("/", indexRouter);
app.use("/", productCtrl)
app.use("/", authRouter);
app.use("/", cartRouter);
app.use("/", newsLetterRouter);



app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

mongoose.connect(process.env.mongoDBURL,
    {useNewUrlParser: true,
        useUnifiedTopology: true},
        () => {
            console.log('MongoDB connected')
        });
        
const express = require('express');

const hotelRouter = require("./routes/hotel.router");

const app = express();

//To handle the json, a middleware is used
app.use(express.json());

const PORT =3500;

app.get("/",(req,res) => {
    res.send("Hello World!")
});

// Calls the hotelRouter
app.use("/api/hotels", hotelRouter);

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})
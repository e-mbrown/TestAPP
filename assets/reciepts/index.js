const express = require("express")
const axios = require("axios")
const cors = require('cors');

const app = express()


//Cors
const whitelist = ["http://localhost:3000/", "http://localhost:19006"];
const corsOptions = {
     origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(
                new Error("Not allowed by CORS; origin domain needs to be added to whitelist.")
            );
        }
    },
};

app.use(cors(corsOptions))

app.get("/", (req, res) => {
    res.send("Hello");
});

const getData = async (body) => {
    const options = {
        'method': 'POST',
        'url': 'https://api.ocr.space/parse/image',
        'headers': {
            'apikey': 'K88783609288957'
        },
        data : {
            body
        }
    };

    try {
        const result = await axios(options);
        console.log(result);
        return result;
      } catch (e) {
           console.log(e);
      }
}


app.post("/api", async (req, res) => {
    console.log("We've reached the endpoint")
    try {
        const response = await getData(req.body);
       res.send(response);
       console.log("sent")
      } catch (e) {
        //wrap your error object and send it
      }
})

app.listen(3000, () => console.log("We listening in the 2023s"))
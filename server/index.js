const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getMotivated, deleteItem, submitMotivation } = require('./controller')


app.get('/api/motivation', getMotivated)
app.get("/api/fortune", getFortune);
app.get("/api/compliment", getCompliment);
app.delete('/api/motivation/:id', deleteItem)
app.post('api/motivation', submitMotivation)

app.listen(4000, () => console.log("Server running on 4000"));

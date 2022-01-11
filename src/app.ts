import express from 'express';

const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(` application is running on port ${port}.`);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})
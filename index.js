const express = require('express')
const app = express()
const PORT = 3000

app.post('/upload', (req, res) => {
    res.send({
        message:'File Uploaded Successfully',
    });
});

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});
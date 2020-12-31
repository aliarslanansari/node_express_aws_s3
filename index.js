require('dotenv/config')
const express = require('express')
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const { v4 } = require('uuid')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3000
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  sessionToken: process.env.AWS_SESSION_TOKEN,
})

const storage = multerS3({
  s3: s3,
  bucket: process.env.BUCKET_NAME,
  key: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    cb(null, `${v4()}${ext}`)
  },
  acl: 'public-read', //comment if you don't want the uploaded file to be publicly accessible
})

const upload = multer({ storage })

app.post('/upload', upload.array('fileData'), (req, res) => {
  console.log(req)
  res.send({
    message: 'File Uploaded Successfully',
    uploaded: req.files.length,
    filesPath: req.files.map((file) => file.location),
  })
})

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`)
})

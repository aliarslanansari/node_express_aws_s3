# Upload files to AWS S3 using NodeJS Express Server

### Packages used

- [express](https://www.npmjs.com/package/express)
- [uuid](https://www.npmjs.com/package/uuid)
- [path](https://www.npmjs.com/package/path)
- [aws-sdk](https://www.npmjs.com/package/aws-sdk)
- [multer](https://www.npmjs.com/package/multer)
- [multer-s3](https://www.npmjs.com/package/multer-s3)

## Installation

Clone this repository to your local machine by running the following command in your local system.

```
git clone https://github.com/aliarslanansari/node_express_aws_s3.git
```

After cloning change the current directory to this repository folder by running

```
cd node_express_aws_s3
```

Then run the following command to install all the packages from packages.json file.
Note that yarn or npm must be installed in your system (or install from here [Node](https://nodejs.org/en/download/) | [Yarn](https://classic.yarnpkg.com/en/docs/install/))

```
npm install
```

or

```
yarn install
```

## Configure Environment Variables

Create a **.env** file inside the root directory, and add the following variables to it

```
AWS_ACCESS_KEY_ID = 'AWSACCESSKEY123'
AWS_SECRET_ACCESS_KEY = 'xyz-aws-secret-access-key'
AWS_SESSION_TOKEN = 'xyz-aws-session_token'
BUCKET_NAME = 'bucket-name-comes-here'
```

**To get your access key ID and secret access key**

1. Open the IAM console at https://console.aws.amazon.com/iam/.

2. On the navigation menu, choose Users.

3. Choose your IAM user name (not the check box).

4. Open the Security credentials tab, and then choose Create access key.

5. To see the new access key, choose Show. Your credentials resemble the following:

   - Access key ID: AKIAIOSFODNN7EXAMPLE

   - Secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

**For AWS Educate account**

1. Go to Vocareum. This is kinda the main page of your student AWS account.

2. Click on the Account Details button.

Also add the BUCKET_NAME as name of the S3 Bucket which you've created from aws console.

## Start the Server

After configuring the envronment variabe in .env file, start the server by running the following command in the root directory

If you're using Yarn

```
yarn start
```

If you're using NPM

```
npm start
```

## Testing

To test the server is working properly, you'll need to send a post request to upload file to s3, we can test the server using REST client application **Postman** (you can install Postman from [here](https://www.postman.com/downloads/))

Open Postman and do the following

1. create a new **POST** request
2. Add the endpoint URL as below

   ```
   localhost:3000/upload
   ```

3. Navigate to body
4. Enter the key as **fileData** (we have used same key in the code, [line: 30](https://github.com/aliarslanansari/node_express_aws_s3/blob/f0baebe581f72c3523cd1249d85a60f6666b0934/index.js#L30))
5. Select value type as **File** from the end of Key input field (by default it is Text)
6. Upload file from Value column, click on **Select Files**
7. Click on **Send** button
8. You'll get the following response from the server

   ```
    {
        "message": "File Uploaded Successfully",
        "uploaded": 1,
        "filesPath": [
            "https://bucket-name.s3.amazonaws.com/8dfdsf3-a723-4280-bbd1-7b9c05249720.png"
        ]
    }
   ```

## Note

If you've set `acl:'public-read'` in the object which is passed to multerS3 on [line:25](https://github.com/aliarslanansari/node_express_aws_s3/blob/1e1f9dc164511bf74c1e30a2f9e5e01f83f6307d/index.js#L25) then file can be directly accessed from the URL returned from server in filesPath array.
